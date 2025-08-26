// Social Media Mastery Training Application
// Main JavaScript file with all functionality

class SocialMediaTrainingApp {
    constructor() {
        this.currentUser = null;
        this.currentPage = 'dashboard';
        this.currentWeek = 1;
        this.trainingData = this.initializeTrainingData();
        this.init();
    }

    init() {
        this.loadUserData();
        this.setupEventListeners();
        this.setupTheme();
        this.hideLoadingScreen();
        this.updateDashboard();
    }

    // Initialize training data structure
    initializeTrainingData() {
        return {
            weeks: [
                {
                    id: 1,
                    title: "Programme Introduction & AI Fundamentals",
                    category: "foundations",
                    description: "Welcome to your social media mastery journey! Understanding AI and programme structure.",
                    modules: [
                        { id: 1, title: "Welcome & Programme Overview", duration: 30, type: "video" },
                        { id: 2, title: "AI Fundamentals for Marketing", duration: 45, type: "interactive" },
                        { id: 3, title: "Social Media Landscape 2024", duration: 35, type: "reading" },
                        { id: 4, title: "Setting Your Learning Goals", duration: 20, type: "exercise" },
                        { id: 5, title: "Week 1 Assessment", duration: 15, type: "quiz" }
                    ]
                },
                {
                    id: 2,
                    title: "Digital Marketing Principles & Strategy",
                    category: "foundations",
                    description: "Core principles of digital marketing and strategic thinking for social media.",
                    modules: [
                        { id: 6, title: "Digital Marketing Fundamentals", duration: 40, type: "video" },
                        { id: 7, title: "Customer Journey Mapping", duration: 35, type: "interactive" },
                        { id: 8, title: "Brand Positioning in Social Media", duration: 30, type: "reading" },
                        { id: 9, title: "Content Strategy Framework", duration: 45, type: "exercise" },
                        { id: 10, title: "Week 2 Assessment", duration: 20, type: "quiz" }
                    ]
                },
                {
                    id: 3,
                    title: "Claude AI: Prompt Engineering Basics",
                    category: "claude",
                    description: "Master the fundamentals of prompt engineering for social media content creation.",
                    modules: [
                        { id: 11, title: "Introduction to Claude AI", duration: 25, type: "video" },
                        { id: 12, title: "Prompt Engineering Principles", duration: 50, type: "interactive" },
                        { id: 13, title: "Content Creation Workflows", duration: 40, type: "exercise" },
                        { id: 14, title: "Brand Voice Development", duration: 35, type: "practical" },
                        { id: 15, title: "Week 3 Assessment", duration: 25, type: "quiz" }
                    ]
                },
                {
                    id: 4,
                    title: "Claude AI: Advanced Applications",
                    category: "claude",
                    description: "Advanced Claude AI techniques for customer service and content optimization.",
                    modules: [
                        { id: 16, title: "Advanced Prompt Techniques", duration: 45, type: "video" },
                        { id: 17, title: "Customer Service Automation", duration: 40, type: "interactive" },
                        { id: 18, title: "Content Optimization Strategies", duration: 35, type: "exercise" },
                        { id: 19, title: "A/B Testing with AI Content", duration: 30, type: "practical" },
                        { id: 20, title: "Claude AI Mastery Test", duration: 30, type: "assessment" }
                    ]
                },
                {
                    id: 5,
                    title: "Canva: Design Fundamentals",
                    category: "canva",
                    description: "Master design principles and create stunning social media visuals.",
                    modules: [
                        { id: 21, title: "Design Principles for Social Media", duration: 35, type: "video" },
                        { id: 22, title: "Canva Interface & Tools", duration: 30, type: "interactive" },
                        { id: 23, title: "Brand Kit Setup", duration: 25, type: "practical" },
                        { id: 24, title: "Template Creation Workshop", duration: 50, type: "exercise" },
                        { id: 25, title: "Week 5 Design Challenge", duration: 20, type: "assignment" }
                    ]
                },
                {
                    id: 6,
                    title: "Canva: Advanced Techniques",
                    category: "canva",
                    description: "Video creation, animations, and batch production techniques.",
                    modules: [
                        { id: 26, title: "Video & Animation Basics", duration: 45, type: "video" },
                        { id: 27, title: "Batch Creation Techniques", duration: 40, type: "practical" },
                        { id: 28, title: "Advanced Design Features", duration: 35, type: "interactive" },
                        { id: 29, title: "Brand Consistency Workshop", duration: 30, type: "exercise" },
                        { id: 30, title: "Canva Mastery Project", duration: 60, type: "project" }
                    ]
                },
                {
                    id: 7,
                    title: "Google Analytics: Setup & Basics",
                    category: "analytics",
                    description: "Set up tracking, understand key metrics, and interpret data.",
                    modules: [
                        { id: 31, title: "GA4 Setup & Configuration", duration: 40, type: "practical" },
                        { id: 32, title: "Understanding Key Metrics", duration: 35, type: "video" },
                        { id: 33, title: "Goal Setting & Conversions", duration: 30, type: "interactive" },
                        { id: 34, title: "Audience Analysis", duration: 45, type: "exercise" },
                        { id: 35, title: "Week 7 Analytics Quiz", duration: 25, type: "quiz" }
                    ]
                },
                {
                    id: 8,
                    title: "Google Analytics: Advanced Reporting",
                    category: "analytics",
                    description: "Create custom reports and understand social media attribution.",
                    modules: [
                        { id: 36, title: "Custom Reports & Dashboards", duration: 50, type: "practical" },
                        { id: 37, title: "Social Media Attribution", duration: 40, type: "video" },
                        { id: 38, title: "Advanced Segmentation", duration: 35, type: "interactive" },
                        { id: 39, title: "Performance Analysis Workshop", duration: 45, type: "exercise" },
                        { id: 40, title: "Monthly Report Project", duration: 60, type: "project" }
                    ]
                },
                {
                    id: 9,
                    title: "Google Ads: Campaign Fundamentals",
                    category: "ads",
                    description: "Understanding campaign structure, keyword research, and targeting.",
                    modules: [
                        { id: 41, title: "Google Ads Campaign Structure", duration: 40, type: "video" },
                        { id: 42, title: "Keyword Research Mastery", duration: 45, type: "practical" },
                        { id: 43, title: "Audience Targeting Strategies", duration: 35, type: "interactive" },
                        { id: 44, title: "Ad Copywriting with AI", duration: 40, type: "exercise" },
                        { id: 45, title: "Campaign Setup Workshop", duration: 30, type: "practical" }
                    ]
                },
                {
                    id: 10,
                    title: "Google Ads: Optimization & Management",
                    category: "ads",
                    description: "Budget management, bidding strategies, and campaign optimization.",
                    modules: [
                        { id: 46, title: "Bidding Strategies Deep Dive", duration: 40, type: "video" },
                        { id: 47, title: "Budget Management Techniques", duration: 35, type: "interactive" },
                        { id: 48, title: "Performance Optimization", duration: 45, type: "practical" },
                        { id: 49, title: "Quality Score Improvement", duration: 30, type: "exercise" },
                        { id: 50, title: "Google Ads Certification Mock", duration: 45, type: "assessment" }
                    ]
                },
                {
                    id: 11,
                    title: "Meta Ads: Platform Mastery",
                    category: "ads",
                    description: "Facebook Business Manager, audience creation, and pixel tracking.",
                    modules: [
                        { id: 51, title: "Facebook Business Manager Setup", duration: 35, type: "practical" },
                        { id: 52, title: "Audience Creation & Targeting", duration: 40, type: "interactive" },
                        { id: 53, title: "Pixel Implementation", duration: 30, type: "practical" },
                        { id: 54, title: "Creative Best Practices", duration: 45, type: "video" },
                        { id: 55, title: "Campaign Creation Workshop", duration: 40, type: "exercise" }
                    ]
                },
                {
                    id: 12,
                    title: "Integrated Campaign & Final Project",
                    category: "ads",
                    description: "Create and execute a comprehensive cross-platform campaign.",
                    modules: [
                        { id: 56, title: "Campaign Optimization Advanced", duration: 45, type: "video" },
                        { id: 57, title: "Cross-Platform Integration", duration: 40, type: "practical" },
                        { id: 58, title: "Performance Analysis", duration: 35, type: "interactive" },
                        { id: 59, title: "Final Project Presentation", duration: 60, type: "project" },
                        { id: 60, title: "Programme Completion Assessment", duration: 45, type: "final_exam" }
                    ]
                }
            ],
            resources: [
                {
                    id: 1,
                    title: "Claude AI Prompt Library",
                    type: "template",
                    category: "claude",
                    description: "100+ tested prompts for social media content creation",
                    url: "#",
                    week: [3, 4],
                    tags: ["prompts", "ai", "templates"]
                },
                {
                    id: 2,
                    title: "Social Media Design Templates",
                    type: "template",
                    category: "canva",
                    description: "50+ professional Canva templates for all platforms",
                    url: "#",
                    week: [5, 6],
                    tags: ["design", "templates", "canva"]
                },
                {
                    id: 3,
                    title: "GA4 Setup Checklist",
                    type: "pdf",
                    category: "analytics",
                    description: "Step-by-step guide for Google Analytics 4 configuration",
                    url: "#",
                    week: [7, 8],
                    tags: ["analytics", "setup", "checklist"]
                },
                {
                    id: 4,
                    title: "Google Ads Account Structure Guide",
                    type: "guide",
                    category: "ads",
                    description: "Best practices for organizing your Google Ads campaigns",
                    url: "#",
                    week: [9, 10],
                    tags: ["google-ads", "structure", "optimization"]
                },
                {
                    id: 5,
                    title: "Meta Ads Creative Specifications",
                    type: "pdf",
                    category: "ads",
                    description: "Complete specifications for all Meta advertising formats",
                    url: "#",
                    week: [11, 12],
                    tags: ["meta-ads", "specifications", "creative"]
                }
            ],
            assessments: [
                {
                    id: 1,
                    week: 1,
                    title: "AI & Digital Marketing Foundations",
                    questions: 10,
                    timeLimit: 15,
                    passingScore: 80
                },
                {
                    id: 2,
                    week: 4,
                    title: "Claude AI Mastery Test",
                    questions: 15,
                    timeLimit: 20,
                    passingScore: 80
                },
                {
                    id: 3,
                    week: 6,
                    title: "Canva Design Competency",
                    questions: 12,
                    timeLimit: 18,
                    passingScore: 80
                },
                {
                    id: 4,
                    week: 8,
                    title: "Google Analytics Proficiency",
                    questions: 20,
                    timeLimit: 25,
                    passingScore: 80
                },
                {
                    id: 5,
                    week: 10,
                    title: "Google Ads Certification Prep",
                    questions: 25,
                    timeLimit: 30,
                    passingScore: 80
                },
                {
                    id: 6,
                    week: 12,
                    title: "Final Comprehensive Exam",
                    questions: 50,
                    timeLimit: 60,
                    passingScore: 80
                }
            ]
        };
    }

    // Local Storage Management
    loadUserData() {
        const savedData = localStorage.getItem('smt_user_data');
        if (savedData) {
            this.currentUser = JSON.parse(savedData);
        } else {
            this.currentUser = this.createDefaultUser();
            this.saveUserData();
        }
        this.updateUserInterface();
    }

    createDefaultUser() {
        return {
            id: 'user_' + Date.now(),
            name: 'Training Participant',
            email: '',
            enrollmentDate: new Date().toISOString(),
            currentWeek: 1,
            completedModules: [],
            assessmentScores: {},
            bookmarkedResources: [],
            settings: {
                theme: 'light',
                notifications: true,
                emailUpdates: true
            },
            progress: {
                overallProgress: 0,
                weeklyProgress: Array(12).fill(0),
                moduleProgress: {}
            }
        };
    }

    saveUserData() {
        localStorage.setItem('smt_user_data', JSON.stringify(this.currentUser));
    }

    // Theme Management
    setupTheme() {
        const theme = this.currentUser?.settings?.theme || 'light';
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    toggleTheme() {
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
            document.documentElement.classList.remove('dark');
            this.currentUser.settings.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            this.currentUser.settings.theme = 'dark';
        }
        this.saveUserData();
    }

    // Event Listeners
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.dataset.page;
                if (page) this.showPage(page);
            });
        });

        // Mobile menu toggle
        document.getElementById('mobile-menu-button')?.addEventListener('click', () => {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // User menu toggle
        document.getElementById('user-menu-button')?.addEventListener('click', () => {
            const userMenu = document.getElementById('user-menu');
            userMenu.classList.toggle('hidden');
        });

        // Theme toggle
        document.getElementById('theme-toggle')?.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Global search
        document.getElementById('global-search')?.addEventListener('input', (e) => {
            this.performSearch(e.target.value);
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#user-menu-button')) {
                document.getElementById('user-menu')?.classList.add('hidden');
            }
            if (!e.target.closest('#mobile-menu-button')) {
                document.getElementById('mobile-menu')?.classList.add('hidden');
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.getElementById('user-menu')?.classList.add('hidden');
                document.getElementById('mobile-menu')?.classList.add('hidden');
            }
        });
    }

    // Page Navigation
    showPage(pageName) {
        // Hide all pages
        document.querySelectorAll('.page-content').forEach(page => {
            page.classList.add('hidden');
        });

        // Show target page
        const targetPage = document.getElementById(`page-${pageName}`);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            this.currentPage = pageName;
            this.updateBreadcrumb(pageName);
            this.updateActiveNavigation(pageName);
            
            // Load page content
            this.loadPageContent(pageName);
        }
    }

    updateBreadcrumb(pageName) {
        const breadcrumb = document.getElementById('current-page');
        const pageNames = {
            dashboard: 'Dashboard',
            timeline: 'Timeline',
            resources: 'Resources',
            assessments: 'Assessments',
            progress: 'Progress'
        };
        if (breadcrumb) {
            breadcrumb.textContent = pageNames[pageName] || 'Page';
        }
    }

    updateActiveNavigation(pageName) {
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageName) {
                link.classList.add('active');
            }
        });
    }

    // Content Loading
    loadPageContent(pageName) {
        switch (pageName) {
            case 'timeline':
                this.renderTimeline();
                break;
            case 'resources':
                this.renderResources();
                break;
            case 'assessments':
                this.renderAssessments();
                break;
            case 'progress':
                this.renderProgress();
                break;
        }
    }

    // Update user interface elements
    updateUserInterface() {
        if (this.currentUser) {
            const initials = this.getInitials(this.currentUser.name);
            document.getElementById('user-initials').textContent = initials;
        }
    }

    getInitials(name) {
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    }

    // Dashboard Updates
    updateDashboard() {
        this.updateStats();
        this.updateCurrentWeekContent();
    }

    updateStats() {
        document.getElementById('current-week').textContent = this.currentUser.currentWeek;
        document.getElementById('overall-progress').textContent = `${Math.round(this.currentUser.progress.overallProgress)}%`;
        document.getElementById('completed-modules').textContent = this.currentUser.completedModules.length;
        
        const avgScore = this.calculateAverageScore();
        document.getElementById('average-score').textContent = avgScore ? `${avgScore}%` : '-';
    }

    calculateAverageScore() {
        const scores = Object.values(this.currentUser.assessmentScores);
        if (scores.length === 0) return null;
        return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    }

    updateCurrentWeekContent() {
        const currentWeekData = this.trainingData.weeks.find(w => w.id === this.currentUser.currentWeek);
        if (currentWeekData) {
            const content = document.getElementById('current-week-content');
            content.innerHTML = `
                <h3 class="text-xl font-medium mb-2">${currentWeekData.title}</h3>
                <p class="mb-4">${currentWeekData.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${currentWeekData.modules.map(module => 
                        `<span class="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">${module.title}</span>`
                    ).join('')}
                </div>
                <button class="bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors" onclick="app.navigateToWeek(${currentWeekData.id})">
                    Start Week ${currentWeekData.id} <i class="fas fa-arrow-right ml-2"></i>
                </button>
            `;
        }
    }

    // Timeline Rendering
    renderTimeline() {
        const container = document.getElementById('page-timeline');
        container.innerHTML = `
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">12-Week Programme Timeline</h1>
                <p class="text-xl text-gray-600 dark:text-gray-400 mb-6">Track your progress through the comprehensive social media mastery programme.</p>
                
                <div class="timeline">
                    ${this.trainingData.weeks.map((week, index) => this.renderTimelineWeek(week, index)).join('')}
                </div>
            </div>
        `;
    }

    renderTimelineWeek(week, index) {
        const isCompleted = this.currentUser.progress.weeklyProgress[index] === 100;
        const isCurrent = week.id === this.currentUser.currentWeek;
        const progress = this.currentUser.progress.weeklyProgress[index] || 0;
        
        const categoryColors = {
            foundations: 'gray',
            claude: 'indigo',
            canva: 'purple',
            analytics: 'green',
            ads: 'blue'
        };
        
        const color = categoryColors[week.category] || 'gray';
        
        return `
            <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}">
                <div class="timeline-marker ${isCompleted ? 'completed' : isCurrent ? 'current' : ''}"></div>
                <div class="timeline-content">
                    <div class="week-card ${week.category} cursor-pointer" onclick="app.navigateToWeek(${week.id})">
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-3">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Week ${week.id}</h3>
                                <span class="badge badge-${color.includes('gray') ? 'primary' : color === 'indigo' ? 'primary' : color === 'purple' ? 'primary' : color === 'green' ? 'success' : 'primary'}">${week.category}</span>
                            </div>
                            <h4 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">${week.title}</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">${week.description}</p>
                            
                            <div class="progress-bar mb-3">
                                <div class="progress-fill" style="width: ${progress}%"></div>
                            </div>
                            
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-gray-500 dark:text-gray-400">${week.modules.length} modules</span>
                                <span class="text-${color}-600 dark:text-${color}-400 font-medium">${Math.round(progress)}% complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Resources Rendering
    renderResources() {
        const container = document.getElementById('page-resources');
        container.innerHTML = `
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Resource Library</h1>
                <p class="text-xl text-gray-600 dark:text-gray-400 mb-6">Access templates, guides, and reference materials for your training.</p>
                
                <div class="mb-6 flex flex-col sm:flex-row gap-4">
                    <div class="flex-1">
                        <input type="text" id="resource-search" placeholder="Search resources..." 
                               class="form-input">
                    </div>
                    <select id="resource-filter" class="form-input sm:w-48">
                        <option value="">All Categories</option>
                        <option value="claude">Claude AI</option>
                        <option value="canva">Canva</option>
                        <option value="analytics">Analytics</option>
                        <option value="ads">Advertising</option>
                    </select>
                </div>
                
                <div id="resources-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${this.trainingData.resources.map(resource => this.renderResourceCard(resource)).join('')}
                </div>
            </div>
        `;
        
        // Add search and filter functionality
        document.getElementById('resource-search').addEventListener('input', (e) => {
            this.filterResources(e.target.value, document.getElementById('resource-filter').value);
        });
        
        document.getElementById('resource-filter').addEventListener('change', (e) => {
            this.filterResources(document.getElementById('resource-search').value, e.target.value);
        });
    }

    renderResourceCard(resource) {
        const isBookmarked = this.currentUser.bookmarkedResources.includes(resource.id);
        
        return `
            <div class="resource-card">
                <div class="p-6">
                    <div class="flex items-start justify-between mb-3">
                        <div class="flex-1">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">${resource.title}</h3>
                            <span class="resource-tag ${resource.type}">${resource.type.toUpperCase()}</span>
                        </div>
                        <button onclick="app.toggleBookmark(${resource.id})" 
                                class="text-gray-400 hover:text-yellow-500 transition-colors">
                            <i class="fas fa-star ${isBookmarked ? 'text-yellow-500' : ''}"></i>
                        </button>
                    </div>
                    
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">${resource.description}</p>
                    
                    <div class="flex flex-wrap gap-1 mb-4">
                        ${resource.tags.map(tag => `<span class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">${tag}</span>`).join('')}
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-500 dark:text-gray-400">Week ${resource.week.join(', ')}</span>
                        <button class="btn-primary text-sm py-1" onclick="app.openResource(${resource.id})">
                            View Resource
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    filterResources(searchTerm, category) {
        const filteredResources = this.trainingData.resources.filter(resource => {
            const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            
            const matchesCategory = !category || resource.category === category;
            
            return matchesSearch && matchesCategory;
        });
        
        const grid = document.getElementById('resources-grid');
        grid.innerHTML = filteredResources.map(resource => this.renderResourceCard(resource)).join('');
    }

    // Assessment Rendering
    renderAssessments() {
        const container = document.getElementById('page-assessments');
        container.innerHTML = `
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Assessments & Quizzes</h1>
                <p class="text-xl text-gray-600 dark:text-gray-400 mb-6">Test your knowledge and track your learning progress.</p>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    ${this.trainingData.assessments.map(assessment => this.renderAssessmentCard(assessment)).join('')}
                </div>
            </div>
        `;
    }

    renderAssessmentCard(assessment) {
        const score = this.currentUser.assessmentScores[assessment.id];
        const isAvailable = assessment.week <= this.currentUser.currentWeek;
        const isPassed = score && score >= assessment.passingScore;
        
        return `
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${!isAvailable ? 'opacity-50' : ''}">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${assessment.title}</h3>
                    ${score ? `<span class="badge ${isPassed ? 'badge-success' : 'badge-error'}">${score}%</span>` : ''}
                </div>
                
                <div class="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div class="flex justify-between">
                        <span>Week:</span>
                        <span>${assessment.week}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Questions:</span>
                        <span>${assessment.questions}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Time Limit:</span>
                        <span>${assessment.timeLimit} minutes</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Passing Score:</span>
                        <span>${assessment.passingScore}%</span>
                    </div>
                </div>
                
                <button onclick="app.startAssessment(${assessment.id})" 
                        class="w-full ${isAvailable ? 'btn-primary' : 'btn-secondary'} ${!isAvailable ? 'cursor-not-allowed' : ''}"
                        ${!isAvailable ? 'disabled' : ''}>
                    ${score ? 'Retake Assessment' : 'Start Assessment'}
                </button>
            </div>
        `;
    }

    // Progress Rendering
    renderProgress() {
        const container = document.getElementById('page-progress');
        container.innerHTML = `
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Progress Dashboard</h1>
                <p class="text-xl text-gray-600 dark:text-gray-400 mb-6">Track your learning journey and achievements.</p>
                
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2">
                        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Weekly Progress</h2>
                            <div class="space-y-4">
                                ${this.trainingData.weeks.map((week, index) => this.renderWeekProgress(week, index)).join('')}
                            </div>
                        </div>
                        
                        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Assessment Scores</h2>
                            <div class="space-y-3">
                                ${this.trainingData.assessments.map(assessment => this.renderAssessmentProgress(assessment)).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Overall Progress</h2>
                            <div class="flex justify-center mb-4">
                                ${this.renderProgressCircle(this.currentUser.progress.overallProgress)}
                            </div>
                            <div class="text-center">
                                <p class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">${Math.round(this.currentUser.progress.overallProgress)}%</p>
                                <p class="text-gray-500 dark:text-gray-400">Complete</p>
                            </div>
                        </div>
                        
                        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Stats</h2>
                            <div class="space-y-3">
                                <div class="flex justify-between">
                                    <span class="text-gray-600 dark:text-gray-400">Current Week:</span>
                                    <span class="font-medium">${this.currentUser.currentWeek}/12</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600 dark:text-gray-400">Modules Completed:</span>
                                    <span class="font-medium">${this.currentUser.completedModules.length}/60</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600 dark:text-gray-400">Assessments Passed:</span>
                                    <span class="font-medium">${Object.values(this.currentUser.assessmentScores).filter(score => score >= 80).length}/6</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600 dark:text-gray-400">Days Active:</span>
                                    <span class="font-medium">${this.calculateDaysActive()}</span>
                                </div>
                            </div>
                            
                            <button onclick="app.exportProgress()" class="w-full btn-secondary mt-4">
                                <i class="fas fa-download mr-2"></i>Export Progress
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderWeekProgress(week, index) {
        const progress = this.currentUser.progress.weeklyProgress[index] || 0;
        const isCurrent = week.id === this.currentUser.currentWeek;
        
        return `
            <div class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-${week.category === 'foundations' ? 'gray' : week.category === 'claude' ? 'indigo' : week.category === 'canva' ? 'purple' : week.category === 'analytics' ? 'green' : 'blue'}-100 dark:bg-${week.category === 'foundations' ? 'gray' : week.category === 'claude' ? 'indigo' : week.category === 'canva' ? 'purple' : week.category === 'analytics' ? 'green' : 'blue'}-900/30 flex items-center justify-center">
                    <span class="text-${week.category === 'foundations' ? 'gray' : week.category === 'claude' ? 'indigo' : week.category === 'canva' ? 'purple' : week.category === 'analytics' ? 'green' : 'blue'}-600 font-semibold">${week.id}</span>
                </div>
                <div class="flex-1">
                    <div class="flex items-center justify-between mb-1">
                        <span class="text-sm font-medium text-gray-900 dark:text-white">${week.title}</span>
                        <span class="text-sm text-gray-500 dark:text-gray-400">${Math.round(progress)}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                </div>
                ${isCurrent ? '<span class="badge badge-warning">Current</span>' : ''}
            </div>
        `;
    }

    renderAssessmentProgress(assessment) {
        const score = this.currentUser.assessmentScores[assessment.id];
        const isPassed = score && score >= assessment.passingScore;
        
        return `
            <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span class="text-sm font-medium text-gray-900 dark:text-white">${assessment.title}</span>
                ${score ? 
                    `<span class="badge ${isPassed ? 'badge-success' : 'badge-error'}">${score}%</span>` :
                    '<span class="text-gray-400 text-sm">Not taken</span>'
                }
            </div>
        `;
    }

    renderProgressCircle(percentage) {
        const radius = 50;
        const circumference = 2 * Math.PI * radius;
        const strokeDashoffset = circumference - (percentage / 100) * circumference;
        
        return `
            <div class="progress-circle">
                <svg width="120" height="120" viewBox="0 0 120 120">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#4f46e5"/>
                            <stop offset="100%" style="stop-color:#7c3aed"/>
                        </linearGradient>
                    </defs>
                    <circle class="bg-circle" cx="60" cy="60" r="${radius}"/>
                    <circle class="progress-circle-fill" cx="60" cy="60" r="${radius}" 
                            style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${strokeDashoffset};"/>
                </svg>
            </div>
        `;
    }

    calculateDaysActive() {
        const enrollmentDate = new Date(this.currentUser.enrollmentDate);
        const now = new Date();
        const diffTime = Math.abs(now - enrollmentDate);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    // Navigation Methods
    navigateToWeek(weekId) {
        // Implementation for week navigation would go here
        this.showNotification('success', 'Week Navigation', `Opening Week ${weekId} content...`);
    }

    // Utility Methods
    toggleBookmark(resourceId) {
        const index = this.currentUser.bookmarkedResources.indexOf(resourceId);
        if (index > -1) {
            this.currentUser.bookmarkedResources.splice(index, 1);
        } else {
            this.currentUser.bookmarkedResources.push(resourceId);
        }
        this.saveUserData();
        if (this.currentPage === 'resources') {
            this.renderResources();
        }
    }

    openResource(resourceId) {
        this.showNotification('info', 'Resource', 'Opening resource in new tab...');
        // Implementation for opening resources
    }

    startAssessment(assessmentId) {
        this.showNotification('info', 'Assessment', 'Starting assessment...');
        // Implementation for starting assessments
    }

    exportProgress() {
        const data = {
            user: this.currentUser,
            exportDate: new Date().toISOString(),
            summary: {
                overallProgress: this.currentUser.progress.overallProgress,
                currentWeek: this.currentUser.currentWeek,
                completedModules: this.currentUser.completedModules.length,
                averageScore: this.calculateAverageScore()
            }
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `smt_progress_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        
        this.showNotification('success', 'Export Complete', 'Progress report downloaded successfully.');
    }

    performSearch(query) {
        if (!query) return;
        // Implementation for global search functionality
        this.showNotification('info', 'Search', `Searching for "${query}"...`);
    }

    // Notification System
    showNotification(type, title, message) {
        const notification = document.getElementById('notification');
        const icon = document.getElementById('notification-icon');
        const titleEl = document.getElementById('notification-title');
        const messageEl = document.getElementById('notification-message');
        
        const icons = {
            success: 'fas fa-check-circle text-green-500',
            error: 'fas fa-exclamation-circle text-red-500',
            warning: 'fas fa-exclamation-triangle text-yellow-500',
            info: 'fas fa-info-circle text-blue-500'
        };
        
        icon.className = icons[type] || icons.info;
        titleEl.textContent = title;
        messageEl.textContent = message;
        
        notification.classList.remove('hidden');
        
        setTimeout(() => {
            this.hideNotification();
        }, 5000);
    }

    hideNotification() {
        document.getElementById('notification')?.classList.add('hidden');
    }

    hideLoadingScreen() {
        setTimeout(() => {
            document.getElementById('loading-screen')?.classList.add('hidden');
        }, 1000);
    }
}

// Global functions for HTML onclick handlers
window.navigateToWeek = (weekId) => window.app.navigateToWeek(weekId);
window.showPage = (page) => window.app.showPage(page);
window.hideNotification = () => window.app.hideNotification();

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.app = new SocialMediaTrainingApp();
});

// Service Worker registration for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}