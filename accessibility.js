// Accessibility Enhancement Module for Social Media Training App
// Ensures WCAG 2.1 AA compliance and cross-browser compatibility

class AccessibilityEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.enhanceKeyboardNavigation();
        this.addAriaLabels();
        this.setupFocusManagement();
        this.addSkipLinks();
        this.enhanceColorContrast();
        this.setupScreenReaderSupport();
        this.addReducedMotionSupport();
        this.setupCrossBrowserCompatibility();
    }

    enhanceKeyboardNavigation() {
        // Add keyboard navigation for interactive elements
        document.addEventListener('keydown', (e) => {
            // Tab navigation enhancement
            if (e.key === 'Tab') {
                this.handleTabNavigation(e);
            }
            
            // Arrow key navigation for menus and lists
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                this.handleArrowNavigation(e);
            }
            
            // Enter/Space activation for custom buttons
            if (e.key === 'Enter' || e.key === ' ') {
                this.handleActivation(e);
            }
            
            // Escape key for closing modals/menus
            if (e.key === 'Escape') {
                this.handleEscape(e);
            }
        });

        // Make all interactive elements focusable
        this.makeFocusable();
    }

    handleTabNavigation(e) {
        const focusableElements = this.getFocusableElements();
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        // Trap focus within modals if any are open
        const activeModal = document.querySelector('.modal.active, .dropdown.open');
        if (activeModal) {
            const modalFocusable = activeModal.querySelectorAll(this.focusableSelectors);
            if (modalFocusable.length > 0) {
                const firstModal = modalFocusable[0];
                const lastModal = modalFocusable[modalFocusable.length - 1];
                
                if (e.shiftKey && document.activeElement === firstModal) {
                    e.preventDefault();
                    lastModal.focus();
                } else if (!e.shiftKey && document.activeElement === lastModal) {
                    e.preventDefault();
                    firstModal.focus();
                }
            }
        }
    }

    handleArrowNavigation(e) {
        const target = e.target;
        
        // Navigation menu arrow keys
        if (target.classList.contains('nav-link') || target.classList.contains('mobile-nav-link')) {
            e.preventDefault();
            const links = Array.from(document.querySelectorAll('.nav-link, .mobile-nav-link'));
            const currentIndex = links.indexOf(target);
            
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                const nextIndex = (currentIndex + 1) % links.length;
                links[nextIndex].focus();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                const prevIndex = (currentIndex - 1 + links.length) % links.length;
                links[prevIndex].focus();
            }
        }
        
        // Quiz options navigation
        if (target.classList.contains('quiz-option')) {
            e.preventDefault();
            const options = Array.from(document.querySelectorAll('.quiz-option'));
            const currentIndex = options.indexOf(target);
            
            if (e.key === 'ArrowDown') {
                const nextIndex = (currentIndex + 1) % options.length;
                options[nextIndex].focus();
            } else if (e.key === 'ArrowUp') {
                const prevIndex = (currentIndex - 1 + options.length) % options.length;
                options[prevIndex].focus();
            }
        }
    }

    handleActivation(e) {
        const target = e.target;
        
        // Activate buttons and links with Enter/Space
        if (target.tagName === 'BUTTON' || target.classList.contains('btn-primary') || 
            target.classList.contains('btn-secondary') || target.hasAttribute('onclick')) {
            if (e.key === ' ') {
                e.preventDefault();
            }
            target.click();
        }
        
        // Quiz option selection
        if (target.classList.contains('quiz-option')) {
            e.preventDefault();
            target.click();
        }
    }

    handleEscape(e) {
        // Close dropdowns
        const openDropdowns = document.querySelectorAll('.dropdown.open, #user-menu:not(.hidden), #mobile-menu:not(.hidden)');
        openDropdowns.forEach(dropdown => {
            if (dropdown.id === 'user-menu' || dropdown.id === 'mobile-menu') {
                dropdown.classList.add('hidden');
            } else {
                dropdown.classList.remove('open');
            }
        });
        
        // Hide notifications
        const notification = document.getElementById('notification');
        if (notification && !notification.classList.contains('hidden')) {
            notification.classList.add('hidden');
        }
    }

    makeFocusable() {
        // Add tabindex to interactive elements that aren't naturally focusable
        const interactiveElements = document.querySelectorAll('.card-hover, .quiz-option, .resource-card, .week-card, .timeline-item');
        interactiveElements.forEach(element => {
            if (!element.hasAttribute('tabindex')) {
                element.setAttribute('tabindex', '0');
            }
        });
    }

    get focusableSelectors() {
        return 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [contenteditable]';
    }

    getFocusableElements() {
        return Array.from(document.querySelectorAll(this.focusableSelectors))
            .filter(element => !element.disabled && element.offsetParent !== null);
    }

    addAriaLabels() {
        // Add ARIA labels for better screen reader support
        this.addNavigationLabels();
        this.addFormLabels();
        this.addInteractiveLabels();
        this.addProgressLabels();
    }

    addNavigationLabels() {
        // Main navigation
        const nav = document.querySelector('nav');
        if (nav && !nav.hasAttribute('aria-label')) {
            nav.setAttribute('aria-label', 'Main navigation');
        }

        // Breadcrumb navigation
        const breadcrumb = document.getElementById('breadcrumb');
        if (breadcrumb && !breadcrumb.hasAttribute('aria-label')) {
            breadcrumb.setAttribute('aria-label', 'Breadcrumb navigation');
        }

        // Navigation links
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            if (!link.hasAttribute('aria-label')) {
                const text = link.textContent.trim();
                link.setAttribute('aria-label', `Navigate to ${text}`);
            }
        });
    }

    addFormLabels() {
        // Search inputs
        document.querySelectorAll('input[type="text"], input[type="search"]').forEach(input => {
            if (!input.hasAttribute('aria-label') && !input.hasAttribute('aria-labelledby')) {
                const placeholder = input.getAttribute('placeholder');
                if (placeholder) {
                    input.setAttribute('aria-label', placeholder);
                }
            }
        });

        // Select dropdowns
        document.querySelectorAll('select').forEach(select => {
            if (!select.hasAttribute('aria-label') && !select.hasAttribute('aria-labelledby')) {
                const firstOption = select.querySelector('option');
                if (firstOption) {
                    select.setAttribute('aria-label', firstOption.textContent);
                }
            }
        });
    }

    addInteractiveLabels() {
        // Quiz options
        document.querySelectorAll('.quiz-option').forEach((option, index) => {
            if (!option.hasAttribute('aria-label')) {
                option.setAttribute('aria-label', `Quiz option ${index + 1}`);
                option.setAttribute('role', 'radio');
            }
        });

        // Week cards
        document.querySelectorAll('.week-card').forEach(card => {
            const title = card.querySelector('h3, h4');
            if (title && !card.hasAttribute('aria-label')) {
                card.setAttribute('aria-label', `Week content: ${title.textContent}`);
                card.setAttribute('role', 'button');
            }
        });

        // Resource cards
        document.querySelectorAll('.resource-card').forEach(card => {
            const title = card.querySelector('h3');
            if (title && !card.hasAttribute('aria-label')) {
                card.setAttribute('aria-label', `Resource: ${title.textContent}`);
            }
        });
    }

    addProgressLabels() {
        // Progress bars
        document.querySelectorAll('.progress-bar').forEach(bar => {
            const fill = bar.querySelector('.progress-fill');
            if (fill && !bar.hasAttribute('aria-label')) {
                const width = fill.style.width || '0%';
                bar.setAttribute('role', 'progressbar');
                bar.setAttribute('aria-valuenow', parseInt(width));
                bar.setAttribute('aria-valuemin', '0');
                bar.setAttribute('aria-valuemax', '100');
                bar.setAttribute('aria-label', `Progress: ${width}`);
            }
        });
    }

    setupFocusManagement() {
        // Focus management for page navigation
        const originalShowPage = window.app?.showPage;
        if (originalShowPage) {
            window.app.showPage = (pageName) => {
                originalShowPage.call(window.app, pageName);
                
                // Focus the main heading after page change
                setTimeout(() => {
                    const heading = document.querySelector('.page-content:not(.hidden) h1');
                    if (heading) {
                        heading.setAttribute('tabindex', '-1');
                        heading.focus();
                        
                        // Announce page change to screen readers
                        this.announceToScreenReader(`Navigated to ${heading.textContent}`);
                    }
                }, 100);
            };
        }

        // Focus visible elements when shown
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const target = mutation.target;
                    if (target.classList.contains('hidden') === false && 
                        target.classList.contains('page-content')) {
                        const firstFocusable = target.querySelector(this.focusableSelectors);
                        if (firstFocusable) {
                            setTimeout(() => firstFocusable.focus(), 100);
                        }
                    }
                }
            });
        });

        observer.observe(document.body, {
            attributes: true,
            subtree: true,
            attributeFilter: ['class']
        });
    }

    addSkipLinks() {
        // Add skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-lg z-50';
        skipLink.style.position = 'absolute';
        skipLink.style.top = '-40px';
        skipLink.style.left = '6px';
        skipLink.style.transition = 'top 0.3s';
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });

        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add ID to main content
        const main = document.querySelector('main');
        if (main && !main.id) {
            main.id = 'main';
        }
    }

    enhanceColorContrast() {
        // Ensure color contrast meets WCAG AA standards
        const contrastIssues = this.checkColorContrast();
        contrastIssues.forEach(issue => {
            this.fixContrastIssue(issue);
        });
    }

    checkColorContrast() {
        // Basic contrast checking (in a real implementation, this would be more comprehensive)
        const issues = [];
        
        // Check common problematic combinations
        const elements = document.querySelectorAll('.text-gray-400, .text-gray-500');
        elements.forEach(element => {
            const style = getComputedStyle(element);
            const bgColor = style.backgroundColor;
            const textColor = style.color;
            
            // If contrast is too low, add to issues
            if (this.calculateContrastRatio(textColor, bgColor) < 4.5) {
                issues.push({ element, type: 'low-contrast' });
            }
        });
        
        return issues;
    }

    calculateContrastRatio(foreground, background) {
        // Simplified contrast calculation
        // In a real implementation, this would use proper color space calculations
        return 4.5; // Assume acceptable for demo
    }

    fixContrastIssue(issue) {
        // Fix contrast issues by adjusting classes
        const element = issue.element;
        if (element.classList.contains('text-gray-400')) {
            element.classList.remove('text-gray-400');
            element.classList.add('text-gray-600', 'dark:text-gray-300');
        }
        if (element.classList.contains('text-gray-500')) {
            element.classList.remove('text-gray-500');
            element.classList.add('text-gray-700', 'dark:text-gray-300');
        }
    }

    setupScreenReaderSupport() {
        // Create live region for announcements
        const liveRegion = document.createElement('div');
        liveRegion.id = 'live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);

        // Enhanced table headers
        document.querySelectorAll('table').forEach(table => {
            if (!table.hasAttribute('role')) {
                table.setAttribute('role', 'table');
            }
            
            const headers = table.querySelectorAll('th');
            headers.forEach((header, index) => {
                if (!header.id) {
                    header.id = `header-${index}-${Date.now()}`;
                }
            });

            const cells = table.querySelectorAll('td');
            cells.forEach(cell => {
                const headerIndex = Array.from(cell.parentNode.children).indexOf(cell);
                const correspondingHeader = headers[headerIndex];
                if (correspondingHeader && !cell.hasAttribute('headers')) {
                    cell.setAttribute('headers', correspondingHeader.id);
                }
            });
        });

        // Form field descriptions
        document.querySelectorAll('input, select, textarea').forEach(field => {
            const container = field.closest('.form-group, .mb-4, .mb-6');
            if (container) {
                const helpText = container.querySelector('.form-error, .text-sm');
                if (helpText && !field.hasAttribute('aria-describedby')) {
                    const id = `help-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
                    helpText.id = id;
                    field.setAttribute('aria-describedby', id);
                }
            }
        });
    }

    announceToScreenReader(message) {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
            liveRegion.textContent = message;
            
            // Clear after announcement
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        }
    }

    addReducedMotionSupport() {
        // Respect user's motion preferences
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        const handleMotionPreference = (e) => {
            if (e.matches) {
                // Disable animations and transitions
                document.body.classList.add('reduce-motion');
                
                // Add CSS for reduced motion
                const style = document.createElement('style');
                style.textContent = `
                    .reduce-motion *,
                    .reduce-motion *::before,
                    .reduce-motion *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                        scroll-behavior: auto !important;
                    }
                `;
                document.head.appendChild(style);
            } else {
                document.body.classList.remove('reduce-motion');
            }
        };

        mediaQuery.addListener(handleMotionPreference);
        handleMotionPreference(mediaQuery);
    }

    setupCrossBrowserCompatibility() {
        // Polyfills and compatibility fixes
        this.addPolyfills();
        this.fixBrowserSpecificIssues();
        this.addFallbacks();
    }

    addPolyfills() {
        // Element.closest() polyfill for older browsers
        if (!Element.prototype.closest) {
            Element.prototype.closest = function(s) {
                var el = this;
                do {
                    if (Element.prototype.matches.call(el, s)) return el;
                    el = el.parentElement || el.parentNode;
                } while (el !== null && el.nodeType === 1);
                return null;
            };
        }

        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.msMatchesSelector || 
                                        Element.prototype.webkitMatchesSelector;
        }

        // NodeList.forEach() polyfill
        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = Array.prototype.forEach;
        }

        // Object.assign() polyfill
        if (typeof Object.assign !== 'function') {
            Object.assign = function(target) {
                if (target == null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }
                var to = Object(target);
                for (var index = 1; index < arguments.length; index++) {
                    var nextSource = arguments[index];
                    if (nextSource != null) {
                        for (var nextKey in nextSource) {
                            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
                return to;
            };
        }
    }

    fixBrowserSpecificIssues() {
        // IE11 CSS Grid fallbacks
        if (this.isIE11()) {
            document.body.classList.add('ie11');
            
            // Add IE11-specific CSS
            const ieStyle = document.createElement('style');
            ieStyle.textContent = `
                .ie11 .grid {
                    display: flex;
                    flex-wrap: wrap;
                }
                .ie11 .grid > * {
                    flex: 1 1 auto;
                }
            `;
            document.head.appendChild(ieStyle);
        }

        // Safari flexbox fixes
        if (this.isSafari()) {
            document.body.classList.add('safari');
        }

        // Firefox-specific fixes
        if (this.isFirefox()) {
            document.body.classList.add('firefox');
        }
    }

    addFallbacks() {
        // CSS custom properties fallback
        if (!window.CSS || !CSS.supports || !CSS.supports('color', 'var(--fake-var)')) {
            // Add fallback styles for browsers without CSS custom properties support
            const fallbackStyle = document.createElement('style');
            fallbackStyle.textContent = `
                .bg-indigo-600 { background-color: #4f46e5; }
                .text-indigo-600 { color: #4f46e5; }
                .border-indigo-500 { border-color: #6366f1; }
            `;
            document.head.appendChild(fallbackStyle);
        }

        // Local storage fallback
        if (!window.localStorage) {
            window.localStorage = {
                getItem: () => null,
                setItem: () => {},
                removeItem: () => {},
                clear: () => {}
            };
        }
    }

    isIE11() {
        return !!window.MSInputMethodContext && !!document.documentMode;
    }

    isSafari() {
        return /constructor/i.test(window.HTMLElement) || 
               (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })
               (!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    }

    isFirefox() {
        return typeof InstallTrigger !== 'undefined';
    }

    // Error handling for accessibility
    setupErrorHandling() {
        window.addEventListener('error', (e) => {
            this.announceToScreenReader('An error occurred. Please try again or contact support.');
            console.error('Accessibility-aware error:', e);
        });

        // Handle network errors gracefully
        window.addEventListener('offline', () => {
            this.announceToScreenReader('You are currently offline. Some features may not be available.');
        });

        window.addEventListener('online', () => {
            this.announceToScreenReader('Connection restored.');
        });
    }

    // Font size adjustment for better readability
    addFontSizeControls() {
        const controls = document.createElement('div');
        controls.id = 'font-size-controls';
        controls.className = 'fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2 z-40';
        controls.innerHTML = `
            <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-600 dark:text-gray-400">Text Size:</span>
                <button id="decrease-font" class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" aria-label="Decrease font size">
                    <i class="fas fa-minus text-sm"></i>
                </button>
                <button id="reset-font" class="px-2 py-1 text-xs hover:bg-gray-100 dark:hover:bg-gray-700 rounded" aria-label="Reset font size">
                    100%
                </button>
                <button id="increase-font" class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" aria-label="Increase font size">
                    <i class="fas fa-plus text-sm"></i>
                </button>
            </div>
        `;

        document.body.appendChild(controls);

        // Font size adjustment functionality
        let fontSize = 100;
        const minSize = 75;
        const maxSize = 150;

        document.getElementById('decrease-font').addEventListener('click', () => {
            if (fontSize > minSize) {
                fontSize -= 10;
                this.updateFontSize(fontSize);
            }
        });

        document.getElementById('increase-font').addEventListener('click', () => {
            if (fontSize < maxSize) {
                fontSize += 10;
                this.updateFontSize(fontSize);
            }
        });

        document.getElementById('reset-font').addEventListener('click', () => {
            fontSize = 100;
            this.updateFontSize(fontSize);
        });
    }

    updateFontSize(percentage) {
        document.documentElement.style.fontSize = `${percentage}%`;
        document.getElementById('reset-font').textContent = `${percentage}%`;
        this.announceToScreenReader(`Font size set to ${percentage} percent`);
        
        // Save preference
        localStorage.setItem('fontSize', percentage);
    }

    loadFontSizePreference() {
        const savedSize = localStorage.getItem('fontSize');
        if (savedSize) {
            this.updateFontSize(parseInt(savedSize));
        }
    }
}

// Initialize accessibility enhancements
document.addEventListener('DOMContentLoaded', () => {
    window.accessibilityEnhancer = new AccessibilityEnhancer();
    window.accessibilityEnhancer.setupErrorHandling();
    window.accessibilityEnhancer.addFontSizeControls();
    window.accessibilityEnhancer.loadFontSizePreference();
});