/* ═══════════════════════════════════════════════════════
   theme.js — Site-wide dark / light mode controller

   Priority order:
   1. localStorage saved preference (user explicitly toggled)
   2. Dark-mode extension detected → take over with our
      dark theme so they don't wreck our styling
   3. OS / system preference (macOS, Windows, iOS, Android,
      Linux w/ GNOME/KDE) via prefers-color-scheme
   4. Fallback → light

   Note on #3: we respect OS dark mode for first-time
   visitors. Once they manually toggle, that choice
   overrides everything on return visits.

   Persistence: localStorage — purely client-side, not
   affected by ad blockers, tracker blockers, or cookie
   consent. Works on GitHub Pages.
   ═══════════════════════════════════════════════════════ */

(function () {
    'use strict';

    var STORAGE_KEY = 'vb-theme';
    var root = document.documentElement;

    /* ── Helpers ─────────────────────────────────────── */
    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        updateToggle(theme);
    }

    function saveTheme(theme) {
        try { localStorage.setItem(STORAGE_KEY, theme); }
        catch (e) { /* private browsing / quota — ignore */ }
    }

    function loadTheme() {
        try { return localStorage.getItem(STORAGE_KEY); }
        catch (e) { return null; }
    }

    function updateToggle(theme) {
        var btn = document.getElementById('themeToggle');
        if (!btn) return;
        btn.setAttribute('aria-pressed', theme === 'dark');
    }

    function toggle() {
        var current = root.getAttribute('data-theme') || 'light';
        var next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        saveTheme(next);
    }

    /* ═══════════════════════════════════════════════════
       OS / system-level dark mode detection
       Works on: macOS, Windows 10+, iOS, Android,
       Linux (GNOME, KDE, etc.)
       ═══════════════════════════════════════════════════ */
    function osPrefersDark() {
        return window.matchMedia &&
               window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    /* ═══════════════════════════════════════════════════
       Dark-mode extension detection (universal)

       Catches: Dark Reader, Night Eye, Dark Mode,
       Turn Off the Lights, Midnight Lizard,
       Chrome's Auto Dark Mode (chrome://flags),
       and any extension that injects filters or
       darkens the page background.
       ═══════════════════════════════════════════════════ */
    function detectDarkExtension() {
        // 1. Dark Reader — most popular (10M+ users)
        //    Injects <style class="darkreader"> and/or
        //    sets data-darkreader-mode on <html>
        if (root.hasAttribute('data-darkreader-mode') ||
            document.querySelector('style.darkreader') ||
            document.querySelector('style[class*="darkreader"]')) {
            return 'darkreader';
        }

        // 2. Midnight Lizard — sets data-ml-* attributes
        if (root.hasAttribute('data-ml-theme') ||
            document.querySelector('style[id*="midnight-lizard"]')) {
            return 'midnight-lizard';
        }

        // 3. Night Eye — injects <style id="nighteye_*">
        if (document.querySelector('style[id*="nighteye"]') ||
            document.querySelector('[data-nighteye]')) {
            return 'night-eye';
        }

        // 4. Generic filter/invert check — catches
        //    Chrome Auto Dark Mode, Turn Off the Lights,
        //    and any extension that applies CSS filter
        //    inversion on <html> or <body>
        try {
            var htmlStyle = window.getComputedStyle(root);
            var bodyStyle = window.getComputedStyle(document.body);

            var htmlFilter = htmlStyle.filter || '';
            var bodyFilter = bodyStyle.filter || '';

            if ((htmlFilter !== 'none' && htmlFilter !== '' &&
                 /invert|hue-rotate|brightness\(0/.test(htmlFilter)) ||
                (bodyFilter !== 'none' && bodyFilter !== '' &&
                 /invert|hue-rotate|brightness\(0/.test(bodyFilter))) {
                return 'filter-extension';
            }
        } catch (e) { /* getComputedStyle can throw in edge cases */ }

        // 5. Background color heuristic — if body bg has been
        //    significantly darkened from our expected cream
        //    (#f5f1e8 ≈ rgb(245,241,232), avg luminance ~239),
        //    an extension probably altered it.
        try {
            var bg = window.getComputedStyle(document.body).backgroundColor;
            if (bg && isSignificantlyDark(bg)) {
                return 'bg-override';
            }
        } catch (e) {}

        return null;
    }

    function isSignificantlyDark(color) {
        var m = color.match(/rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)/);
        if (!m) return false;
        var avg = (parseInt(m[1]) + parseInt(m[2]) + parseInt(m[3])) / 3;
        // Our cream is ~239. Anything below 80 is clearly
        // darkened by an extension (allows for slight
        // natural variation but catches real overrides)
        return avg < 80;
    }

    /* ── Tell Dark Reader to back off ───────────────── */
    function lockOutDarkReader() {
        if (!document.querySelector('meta[name="darkreader-lock"]')) {
            var meta = document.createElement('meta');
            meta.name = 'darkreader-lock';
            document.head.appendChild(meta);
        }
    }

    /* ═══════════════════════════════════════════════════
       Init
       ═══════════════════════════════════════════════════ */
    function init() {
        var saved = loadTheme();

        if (saved) {
            // 1. User has explicitly toggled before — honor it
            applyTheme(saved);
        } else {
            // 2. Check for dark-mode extensions
            var ext = detectDarkExtension();
            if (ext) {
                applyTheme('dark');
                lockOutDarkReader();
            }
            // 3. Check OS / system preference
            else if (osPrefersDark()) {
                applyTheme('dark');
            }
            // 4. Fallback — light
            else {
                applyTheme('light');
            }
        }

        // Bind toggle click (event delegation)
        document.addEventListener('click', function (e) {
            if (e.target.closest('#themeToggle')) {
                e.preventDefault();
                toggle();
            }
        });

        // Re-check for extensions after a delay — some
        // inject their styles after DOMContentLoaded
        setTimeout(function () {
            if (!loadTheme() && !detectDarkExtension()) return;
            if (!loadTheme() && detectDarkExtension()) {
                applyTheme('dark');
                lockOutDarkReader();
            }
        }, 600);

        // Listen for OS theme changes in real time
        // (e.g. macOS auto-switches at sunset)
        if (window.matchMedia) {
            var mq = window.matchMedia('(prefers-color-scheme: dark)');
            mq.addEventListener('change', function (e) {
                // Only auto-switch if user hasn't manually
                // toggled (no saved preference)
                if (!loadTheme()) {
                    applyTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
