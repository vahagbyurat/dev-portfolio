/* ═══════════════════════════════════════════════════════
   modal.js — Project modal controller
   Opens / closes modals with TV turn-on animation.
   Content sourced from:
     1. window.MODAL_CONTENT (inline, works on file://)
     2. XHR fetch from HTML fragments under projects/
   ═══════════════════════════════════════════════════════ */

(function () {
    'use strict';

    /* ── Registry: project id → content path ────────── */
    var MODAL_BASE = (function () {
        var path = window.location.pathname;
        if (path.indexOf('/projects/') !== -1) return '';
        return 'projects/';
    })();

    var registry = {
        'dragonote':        'dragonote.html',
        'tomato-dragon':    'tomato-dragon.html',
        'round-table':      'round-table.html',
        'pseudonymous-zkp': 'pseudonymous-zkp.html'
    };

    var isOpen = false;
    var currentOverlay = null;

    /* ── Fetch modal content ────────────────────────── */
    function fetchContent(projectId, callback) {
        var file = registry[projectId];
        if (!file) return callback('<div style="padding:60px;text-align:center;color:var(--bronze);">Unknown project.</div>');

        var inlineHTML = (window.MODAL_CONTENT && window.MODAL_CONTENT[projectId]) || null;

        // 1. Try XHR first (works on http/https, gets latest .html files)
        var url = MODAL_BASE + file;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                callback(xhr.responseText);
            } else if (inlineHTML) {
                // 404 but we have inline content
                callback(inlineHTML);
            } else {
                callback('<div style="padding:60px;text-align:center;color:var(--bronze);">Content coming soon.</div>');
            }
        };
        xhr.onerror = function () {
            // 2. XHR failed (file:// protocol) — fall back to inline content
            if (inlineHTML) {
                callback(inlineHTML);
            } else {
                callback('<div style="padding:60px;text-align:center;color:var(--bronze);">Could not load content.</div>');
            }
        };
        xhr.send();
    }

    /* ── Open ────────────────────────────────────────── */
    function openModal(projectId) {
        if (isOpen) return;

        fetchContent(projectId, function (html) {
            // Build DOM
            var overlay = document.createElement('div');
            overlay.className = 'modal-overlay';

            var container = document.createElement('div');
            container.className = 'modal-container';
            container.setAttribute('data-project', projectId);

            // Close button
            var closeBtn = document.createElement('button');
            closeBtn.className = 'modal-close';
            closeBtn.setAttribute('aria-label', 'Close modal');
            closeBtn.innerHTML = '&times;';

            // Body
            var body = document.createElement('div');
            body.className = 'modal-body';
            body.innerHTML = html;

            container.appendChild(closeBtn);
            container.appendChild(body);
            overlay.appendChild(container);
            document.body.appendChild(overlay);
            document.body.classList.add('modal-open');

            currentOverlay = overlay;
            isOpen = true;

            // Close handlers
            closeBtn.addEventListener('click', closeModal);
            overlay.addEventListener('click', function (e) {
                if (e.target === overlay) closeModal();
            });
            document.addEventListener('keydown', onEscape);
        });
    }

    /* ── Close ───────────────────────────────────────── */
    function closeModal() {
        if (!isOpen || !currentOverlay) return;

        var container = currentOverlay.querySelector('.modal-container');
        currentOverlay.classList.add('closing');
        if (container) container.classList.add('closing');

        // Wait for animation to finish, then remove
        var duration = 380; // slightly longer than CSS tvTurnOff (0.35s)
        setTimeout(function () {
            if (currentOverlay && currentOverlay.parentNode) {
                currentOverlay.parentNode.removeChild(currentOverlay);
            }
            document.body.classList.remove('modal-open');
            document.removeEventListener('keydown', onEscape);
            currentOverlay = null;
            isOpen = false;
        }, duration);
    }

    function onEscape(e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            closeModal();
        }
    }

    /* ── Event delegation: .modal-trigger clicks ────── */
    document.addEventListener('click', function (e) {
        var trigger = e.target.closest('.modal-trigger');
        if (!trigger) return;

        e.preventDefault();
        var projectId = trigger.getAttribute('data-project');
        if (projectId && registry[projectId]) {
            openModal(projectId);
        }
    });
})();
