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

        var url = MODAL_BASE + file;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                callback(xhr.responseText);
            } else if (inlineHTML) {
                callback(inlineHTML);
            } else {
                callback('<div style="padding:60px;text-align:center;color:var(--bronze);">Content coming soon.</div>');
            }
        };
        xhr.onerror = function () {
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

            // ── Overlay
            var overlay = document.createElement('div');
            overlay.className = 'modal-overlay';

            // ── Visual shell (handles shape / bg / animation — no scrolling)
            var container = document.createElement('div');
            container.className = 'modal-container';
            container.setAttribute('data-project', projectId);

            // Close button
            var closeBtn = document.createElement('button');
            closeBtn.className = 'modal-close';
            closeBtn.setAttribute('aria-label', 'Close modal');
            closeBtn.innerHTML = '&times;';

            var closeBtnWrapper = document.createElement('div');
            closeBtnWrapper.className = 'modal-close-wrapper';
            closeBtnWrapper.appendChild(closeBtn);

            // Body
            var body = document.createElement('div');
            body.className = 'modal-body';
            body.innerHTML = html;

            // Inner scroll container
            var inner = document.createElement('div');
            inner.className = 'modal-inner';
            inner.appendChild(body);

            // ── Extract hero section above the scroll container
            // so it spans full-width with no scrollbar-gutter strip.
            // Wraps it in a div with the same parent class (e.g. 'dn-page')
            // so scoped CSS selectors like '.dn-page .hero-banner' still match.
            var heroEl = inner.querySelector('.hero-banner');
            if (heroEl && heroEl.parentElement) {
                var heroWrapper = document.createElement('div');
                heroWrapper.className = heroEl.parentElement.className;
                heroWrapper.appendChild(heroEl); // detaches from body, moves here
                container.appendChild(closeBtnWrapper);
                container.appendChild(heroWrapper);
                container.appendChild(inner);
            } else {
                container.appendChild(closeBtnWrapper);
                container.appendChild(inner);
            }

            overlay.appendChild(container);

            // ── Compensate for page scrollbar shift
            var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            if (scrollbarWidth > 0) {
                document.body.style.paddingRight = scrollbarWidth + 'px';
            }

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

        var duration = 380;
        setTimeout(function () {
            if (currentOverlay && currentOverlay.parentNode) {
                currentOverlay.parentNode.removeChild(currentOverlay);
            }
            document.body.classList.remove('modal-open');
            document.body.style.paddingRight = '';
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
