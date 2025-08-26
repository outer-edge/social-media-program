// Social Media Training Matrix - Main JavaScript

// Training Data Structure
const trainingData = {
    weeks: [
        {
            week: 1,
            title: "AI Fundamentals & Social Media Landscape",
            focus: "Foundations",
            status: "not-started",
            progress: 0,
            modules: [
                {
                    day: 1,
                    title: "Introduction to AI and Claude",
                    duration: "45 min",
                    content: "Understanding AI fundamentals, Claude's capabilities, and its role in social media marketing.",
                    resources: ["AI Basics Guide", "Claude Introduction Video"],
                    quiz: {
                        questions: [
                            {
                                question: "What is the primary advantage of using AI in social media marketing?",
                                options: ["Cost reduction", "Automated content creation", "Personalized customer engagement", "All of the above"],
                                correct: 3
                            },
                            {
                                question: "Which of the following is NOT a key feature of Claude AI?",
                                options: ["Text generation", "Image creation", "Code analysis", "Video editing"],
                                correct: 3
                            }
                        ]
                    }
                },
                {
                    day: 2,
                    title: "Social Media Landscape Overview",
                    duration: "30 min",
                    content: "Current trends, platform demographics, and emerging opportunities in social media marketing.",
                    resources: ["Social Media Trends Report", "Platform Demographics Guide"],
                    quiz: {
                        questions: [
                            {
                                question: "Which platform has the highest engagement rate for B2B marketing?",
                                options: ["Facebook", "LinkedIn", "Instagram", "Twitter"],
                                correct: 1
                            }
                        ]
                    }
                }
            ]
        },
        {
            week: 2,
            title: "Digital Marketing Principles & Assessment",
            focus: "Foundations",
            status: "not-started",
            progress: 0,
            modules: [
                {
                    day: 1,
                    title: "Digital Marketing Fundamentals",
                    duration: "40 min",
                    content: "Core principles of digital marketing, customer journey mapping, and conversion optimization.",
                    resources: ["Digital Marketing Guide", "Customer Journey Template"],
                    quiz: {
                        questions: [
                            {
                                question: "What is the first stage of the customer journey?",
                                options: ["Awareness", "Consideration", "Purchase", "Retention"],
                                correct: 0
                            }
                        ]
                    }
                }
            ]
        },
        {
            week: 3,
            title: "Claude AI Mastery - Part 1",
            focus: "Claude AI",
            status: "not-started",
            progress: 0,
            modules: [
                {
                    day: 1,
                    title: "Prompt Engineering for Social Media",
                    duration: "45 min",
                    content: "Mastering the art of writing effective prompts for social media content creation.",
                    resources: ["Prompt Engineering Guide", "Best Practices Video"],
                    quiz: {
                        questions: [
                            {
                                question: "What is the most important element of a good prompt?",
                                options: ["Length", "Specificity", "Creativity", "Speed"],
                                correct: 1
                            }
                        ]
                    }
                }
            ]
        },
        {
            week: 4,
            title: "Claude AI Mastery - Part 2",
            focus: "Claude AI",
            status: "not-started",
            progress: 0,
            modules: [
                {
                    day: 1,
                    title: "Content Creation Workflows",
                    duration: "50 min",
                    content: "Building efficient workflows for creating various types of social media content.",
                    resources: ["Workflow Templates", "Content Calendar Guide"],
                    quiz: {
                        questions: [
                            {
                                question: "How often should you post on Instagram for optimal engagement?",
                                options: ["Once a day", "2-3 times per week", "Every hour", "Once a month"],
                                correct: 0
                            }
                        ]
                    }
                }
            ]
        },
        {
            week: 5,
            title: "Canva Design Skills - Part 1",
            focus: "Canva",
            status: "not-started",
            progress: 0,
            modules: [
                {
                    day: 1,
                    title: "Design Principles for Social Media",
                    duration: "40 min",
                    content: "Understanding color theory, typography, and layout principles for social media graphics.",
                    resources: ["Design Principles Guide", "Color Theory Cheat Sheet"],
                    quiz: {
                        questions: [
                            {
                                question: "Which color combination creates the most contrast?",
                                options: ["Blue and Green", "Black and White", "Red and Orange", "Purple and Pink"],
                                correct: 1
                            }
                        ]
                    }
                }
            ]
        },
        {
            week: 6,
            title: "Canva Design Skills - Part 2",
            focus: "Canva",
            status: "not-started",
            progress: 0,
            modules: [
                {
                    day: 1,
                    title: "Template Creation and Brand Kits",
                    duration: "45 min",
                    content: "Creating reusable templates and maintaining brand consistency across all platforms.",
                    resources: ["Template Library", "Brand Kit Guide"],
                    quiz: {
                        questions: [
                            {
                                question: "What is the recommended size for Instagram posts?",
                                options: ["1080x1080px", "1200x630px", "800x600px", "1920x1080px"],
                                correct: 0
                            }
                        ]
                    }
                }
            ]
        },
        {
            week: 7,
            title: "Google Analytics Deep Dive - Part 1",
            focus: "Google Analytics",
            status: "not-started",
            progress: 0,
            modules: [
                {
                    day: 1,
                    title: "Setting Up Tracking and Goals",
                    duration: "50 min",
                    content: "Proper setup of Google Analytics, tracking codes, and conversion goals.",
                    resources: ["Analytics Setup Guide", "Tracking Code Tutorial"],
                    quiz: {
                        questions: [
                            {
                                question: "What is a conversion goal in Google Analytics?",
                                options: ["A page view", "A specific action you want users to take", "A bounce rate", "A session duration"],
                                correct: 1
                            }
                        ]
                    }
                }
            ]
        },
        {
            week: 8,
            title: "Google Analytics Deep Dive - Part 2",
            focus: "Google Analytics",
            status: "not-started",
            progress: 0,
            modules: [
                {
                    day: 1,
                    title: "Understanding Metrics and KPIs",
                    duration: "45 min",
                    content: "Key performance indicators, metrics interpretation, and data-driven decision making.",
                    resources: ["KPI Guide", "Metrics Dictionary"],
                    quiz: {
                        questions: [
                            {
                                question: "What does CTR stand for?",
                                options: ["Click Through Rate", "Cost To Revenue", "Conversion Time Ratio", "Customer Time Response"],
                                correct: 0
                            }
                        ]
                    }
                }
            ]
        },
        {
            week: 9,
            title: "Google Ads Platform - Part 1",
            focus: "Google Ads",
            status: "not-started",
            progress: 0,
            modules: [
                {
                    day: 1,
                    title: "Campaign Structure and Types",
                    duration: "50 min",
                    content: "Understanding different campaign types, ad groups, and campaign hierarchy.",
                    resources: ["Campaign Structure Guide", "Ad Types Overview"],
                    quiz: {
                        questions: [
                            {
                                question: "Which campaign type is best for brand awareness?",
                                options: ["Search", "Display", "Video", "Shopping"],
                                correct: 1
                            }
                        ]
                    }
                }
            ]
        },
        {
            week: 10,
            title: "Google Ads Platform - Part 2",
            focus: "Google Ads",
            status: "not-started",
            progress: 0,
            modules: [
                {
                    day: 1,
                    title: "Keyword Research and Audience Targeting",
                    duration: "45 min",
                    content: "Advanced keyword research techniques and audience targeting strategies.",
                    resources: ["Keyword Research Tools", "Audience Targeting Guide"],
                    quiz: {
                        questions: [
                            {
                                question: "What is a negative keyword?",
                                options: ["A keyword that costs more", "A keyword you don't want to trigger your ad", "A keyword with low search volume", "A keyword that's banned"],
                                correct: 1
                            }
                        ]
                    }
                }
            ]
        },
        {
            week: 11,
            title: "Meta Ads Mastery - Part 1",
            focus: "Meta Ads",
            status: "not-started",
            progress: 0,
            modules: [
                {
                    day: 1,
                    title: "Facebook Business Manager Setup",
                    duration: "40 min",
                    content: "Setting up Facebook Business Manager, ad accounts, and pixel tracking.",
                    resources: ["Business Manager Guide", "Pixel Setup Tutorial"],
                    quiz: {
                        questions: [
                            {
                                question: "What is the Facebook Pixel used for?",
                                options: ["Tracking website visitors", "Creating ads", "Managing pages", "Scheduling posts"],
                                correct: 0
                            }
                        ]
                    }
                }
            ]
        },
        {
            week: 12,
            title: "Meta Ads Mastery - Part 2 & Final Project",
            focus: "Meta Ads",
            status: "not-started",
            progress: 0,
            modules: [
                {
                    day: 1,
                    title: "Creative Best Practices and Optimization",
                    duration: "45 min",
                    content: "Creating compelling ad creatives and optimization techniques for better performance.",
                    resources: ["Creative Best Practices", "Optimization Guide"],
                    quiz: {
                        questions: [
                            {
                                question: "What is the recommended video length for Facebook ads?",
                                options: ["15 seconds", "30 seconds", "60 seconds", "2 minutes"],
                                correct: 0
                            }
                        ]
                    }
                }
            ]
        }
    ],
    resources: [
        {
            id: 1,
            title: "AI Basics Guide",
            type: "pdf",
            category: "Claude AI",
            url: "#",
            description: "Comprehensive guide to understanding AI fundamentals and Claude's capabilities."
        },
        {
            id: 2,
            title: "Social Media Trends Report 2024",
            type: "pdf",
            category: "Foundations",
            url: "#",
            description: "Latest trends and insights in social media marketing."
        },
        {
            id: 3,
            title: "Prompt Engineering Masterclass",
            type: "video",
            category: "Claude AI",
            url: "#",
            description: "Video tutorial on mastering prompt engineering for social media content."
        },
        {
            id: 4,
            title: "Canva Design Templates",
            type: "template",
            category: "Canva",
            url: "#",
            description: "Professional templates for social media graphics."
        },
        {
            id: 5,
            title: "Google Analytics Setup Guide",
            type: "guide",
            category: "Google Analytics",
            url: "#",
            description: "Step-by-step guide to setting up Google Analytics tracking."
        }
    ],
    assessments: [
        {
            id: 1,
            title: "Week 1-2 Foundation Assessment",
            type: "quiz",
            questions: 20,
            timeLimit: 30,
            passingScore: 80
        },
        {
            id: 2,
            title: "Claude AI Practical Test",
            type: "practical",
            description: "Create 5 different content types using Claude",
            timeLimit: 60,
            passingScore: 80
        },
        {
            id: 3,
            title: "Canva Design Challenge",
            type: "practical",
            description: "Create a week's worth of branded social content",
            timeLimit: 90,
            passingScore: 80
        }
    ]
};

// User Progress Data
let userProgress = {
    currentWeek: 1,
    completedModules: [],
    quizScores: {},
    assessmentScores: {},
    bookmarks: [],
    lastActivity: null,
    startDate: null,
    completionDate: null
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadUserProgress();
    renderTimeline();
    renderDashboard();
    renderResources();
    renderAssessments();
    setupEventListeners();
    updateProgress();
}

// Local Storage Functions
function saveUserProgress() {
    localStorage.setItem('trainingProgress', JSON.stringify(userProgress));
}

function loadUserProgress() {
    const saved = localStorage.getItem('trainingProgress');
    if (saved) {
        userProgress = { ...userProgress, ...JSON.parse(saved) };
    } else {
        userProgress.startDate = new Date().toISOString();
        saveUserProgress();
    }
}

// Navigation Functions
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
    
    // Add active class to corresponding tab button
    const activeButton = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Timeline Functions
function renderTimeline() {
    const timelineGrid = document.getElementById('timelineGrid');
    timelineGrid.innerHTML = '';
    
    trainingData.weeks.forEach(week => {
        const weekCard = createWeekCard(week);
        timelineGrid.appendChild(weekCard);
    });
}

function createWeekCard(week) {
    const card = document.createElement('div');
    card.className = `timeline-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ${week.status}`;
    card.onclick = () => openWeekModal(week.week);
    
    const statusIcon = week.status === 'completed' ? 'fas fa-check-circle text-green-500' :
                      week.status === 'in-progress' ? 'fas fa-play-circle text-blue-500' :
                      'fas fa-circle text-gray-400';
    
    card.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Week ${week.week}</h4>
            <i class="${statusIcon}"></i>
        </div>
        <h5 class="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">${week.title}</h5>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">${week.focus}</p>
        <div class="flex items-center justify-between">
            <div class="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-3">
                <div class="bg-blue-500 h-2 rounded-full transition-all duration-500" style="width: ${week.progress}%"></div>
            </div>
            <span class="text-sm text-gray-600 dark:text-gray-400">${week.progress}%</span>
        </div>
    `;
    
    return card;
}

// Modal Functions
function openWeekModal(weekNumber) {
    const week = trainingData.weeks.find(w => w.week === weekNumber);
    if (!week) return;
    
    const modal = document.getElementById('weekModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    modalTitle.textContent = `Week ${week.week}: ${week.title}`;
    
    let modulesHTML = '';
    week.modules.forEach(module => {
        const isCompleted = userProgress.completedModules.includes(`${week.week}-${module.day}`);
        modulesHTML += `
            <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div class="flex items-center justify-between mb-3">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Day ${module.day}: ${module.title}</h4>
                    <div class="flex items-center space-x-2">
                        <span class="text-sm text-gray-600 dark:text-gray-400">${module.duration}</span>
                        ${isCompleted ? 
                            '<i class="fas fa-check-circle text-green-500"></i>' : 
                            '<i class="fas fa-circle text-gray-400"></i>'
                        }
                    </div>
                </div>
                <p class="text-gray-700 dark:text-gray-300 mb-3">${module.content}</p>
                <div class="flex flex-wrap gap-2 mb-3">
                    ${module.resources.map(resource => 
                        `<span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">${resource}</span>`
                    ).join('')}
                </div>
                <div class="flex space-x-2">
                    <button onclick="startModule(${week.week}, ${module.day})" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                        ${isCompleted ? 'Review' : 'Start Module'}
                    </button>
                    <button onclick="takeQuiz(${week.week}, ${module.day})" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">
                        Take Quiz
                    </button>
                </div>
            </div>
        `;
    });
    
    modalContent.innerHTML = `
        <div class="mb-6">
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Week Overview</h4>
            <p class="text-gray-700 dark:text-gray-300">${week.title}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Focus: ${week.focus}</p>
        </div>
        <div class="space-y-4">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Daily Modules</h4>
            ${modulesHTML}
        </div>
    `;
    
    modal.classList.remove('hidden');
}

function closeWeekModal() {
    document.getElementById('weekModal').classList.add('hidden');
}

function openQuizModal(weekNumber, dayNumber) {
    const week = trainingData.weeks.find(w => w.week === weekNumber);
    const module = week.modules.find(m => m.day === dayNumber);
    
    if (!module || !module.quiz) return;
    
    const modal = document.getElementById('quizModal');
    const quizTitle = document.getElementById('quizTitle');
    const quizContent = document.getElementById('quizContent');
    
    quizTitle.textContent = `Quiz: ${module.title}`;
    
    let questionsHTML = '';
    module.quiz.questions.forEach((question, index) => {
        questionsHTML += `
            <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Question ${index + 1}: ${question.question}</h4>
                <div class="space-y-2">
                    ${question.options.map((option, optIndex) => `
                        <label class="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="q${index}" value="${optIndex}" class="text-blue-600">
                            <span class="text-gray-700 dark:text-gray-300">${option}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    quizContent.innerHTML = `
        <div class="mb-4">
            <p class="text-gray-600 dark:text-gray-400">Answer all questions to complete this quiz.</p>
        </div>
        <form id="quizForm">
            ${questionsHTML}
            <div class="flex justify-end space-x-2 mt-6">
                <button type="button" onclick="closeQuizModal()" class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
                    Cancel
                </button>
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                    Submit Quiz
                </button>
            </div>
        </form>
    `;
    
    // Add form submission handler
    document.getElementById('quizForm').onsubmit = (e) => {
        e.preventDefault();
        submitQuiz(weekNumber, dayNumber);
    };
    
    modal.classList.remove('hidden');
}

function closeQuizModal() {
    document.getElementById('quizModal').classList.add('hidden');
}

// Module and Quiz Functions
function startModule(weekNumber, dayNumber) {
    const moduleId = `${weekNumber}-${dayNumber}`;
    if (!userProgress.completedModules.includes(moduleId)) {
        userProgress.completedModules.push(moduleId);
        userProgress.lastActivity = new Date().toISOString();
        saveUserProgress();
        updateProgress();
        showMessage('Module completed!', 'success');
    }
    closeWeekModal();
}

function takeQuiz(weekNumber, dayNumber) {
    openQuizModal(weekNumber, dayNumber);
}

function submitQuiz(weekNumber, dayNumber) {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    const answers = {};
    
    for (let [key, value] of formData.entries()) {
        answers[key] = parseInt(value);
    }
    
    const week = trainingData.weeks.find(w => w.week === weekNumber);
    const module = week.modules.find(m => m.day === dayNumber);
    
    let correctAnswers = 0;
    module.quiz.questions.forEach((question, index) => {
        if (answers[`q${index}`] === question.correct) {
            correctAnswers++;
        }
    });
    
    const score = Math.round((correctAnswers / module.quiz.questions.length) * 100);
    const quizId = `${weekNumber}-${dayNumber}`;
    userProgress.quizScores[quizId] = score;
    
    saveUserProgress();
    updateProgress();
    closeQuizModal();
    
    showMessage(`Quiz completed! Score: ${score}%`, score >= 80 ? 'success' : 'warning');
}

// Dashboard Functions
function renderDashboard() {
    updateDashboardStats();
    renderWeeklyProgress();
    renderRecentActivity();
}

function updateDashboardStats() {
    const totalModules = trainingData.weeks.reduce((sum, week) => sum + week.modules.length, 0);
    const completedModules = userProgress.completedModules.length;
    const overallProgress = Math.round((completedModules / totalModules) * 100);
    
    document.getElementById('overallProgress').textContent = `${overallProgress}%`;
    document.getElementById('overallProgressBar').style.width = `${overallProgress}%`;
    
    const currentWeek = userProgress.currentWeek;
    const currentWeekData = trainingData.weeks.find(w => w.week === currentWeek);
    document.getElementById('currentWeek').textContent = currentWeek;
    document.getElementById('currentWeekTitle').textContent = currentWeekData ? currentWeekData.title : 'Not started';
    
    const quizScores = Object.values(userProgress.quizScores);
    const averageScore = quizScores.length > 0 ? 
        Math.round(quizScores.reduce((sum, score) => sum + score, 0) / quizScores.length) : 0;
    document.getElementById('assessmentScore').textContent = `${averageScore}%`;
}

function renderWeeklyProgress() {
    const weeklyProgress = document.getElementById('weeklyProgress');
    weeklyProgress.innerHTML = '';
    
    trainingData.weeks.forEach(week => {
        const completedModules = week.modules.filter(module => 
            userProgress.completedModules.includes(`${week.week}-${module.day}`)
        ).length;
        const progress = Math.round((completedModules / week.modules.length) * 100);
        
        const card = document.createElement('div');
        card.className = 'bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center';
        card.innerHTML = `
            <div class="text-lg font-bold text-gray-900 dark:text-white">${week.week}</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">${progress}%</div>
            <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1 mt-2">
                <div class="bg-blue-500 h-1 rounded-full" style="width: ${progress}%"></div>
            </div>
        `;
        weeklyProgress.appendChild(card);
    });
}

function renderRecentActivity() {
    const recentActivity = document.getElementById('recentActivity');
    recentActivity.innerHTML = '';
    
    const activities = [];
    
    // Add completed modules
    userProgress.completedModules.forEach(moduleId => {
        const [week, day] = moduleId.split('-');
        const weekData = trainingData.weeks.find(w => w.week === parseInt(week));
        const module = weekData.modules.find(m => m.day === parseInt(day));
        
        activities.push({
            type: 'module',
            text: `Completed: ${module.title}`,
            time: userProgress.lastActivity
        });
    });
    
    // Add quiz scores
    Object.entries(userProgress.quizScores).forEach(([quizId, score]) => {
        const [week, day] = quizId.split('-');
        const weekData = trainingData.weeks.find(w => w.week === parseInt(week));
        const module = weekData.modules.find(m => m.day === parseInt(day));
        
        activities.push({
            type: 'quiz',
            text: `Quiz: ${module.title} - ${score}%`,
            time: userProgress.lastActivity
        });
    });
    
    // Sort by time and take last 5
    activities.sort((a, b) => new Date(b.time) - new Date(a.time));
    activities.slice(0, 5).forEach(activity => {
        const item = document.createElement('div');
        item.className = 'activity-item';
        item.innerHTML = `
            <div class="text-sm text-gray-900 dark:text-white">${activity.text}</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">${formatTime(activity.time)}</div>
        `;
        recentActivity.appendChild(item);
    });
}

// Resources Functions
function renderResources() {
    const resourcesGrid = document.getElementById('resourcesGrid');
    resourcesGrid.innerHTML = '';
    
    trainingData.resources.forEach(resource => {
        const card = document.createElement('div');
        card.className = 'resource-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md';
        card.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2">
                    <i class="fas fa-${getResourceIcon(resource.type)} text-${getResourceColor(resource.type)}"></i>
                    <span class="text-xs bg-${getResourceColor(resource.type)}-100 dark:bg-${getResourceColor(resource.type)}-900 text-${getResourceColor(resource.type)}-800 dark:text-${getResourceColor(resource.type)}-200 px-2 py-1 rounded">
                        ${resource.type.toUpperCase()}
                    </span>
                </div>
                <button onclick="toggleBookmark(${resource.id})" class="bookmark-btn text-gray-400 hover:text-yellow-500">
                    <i class="fas fa-bookmark ${userProgress.bookmarks.includes(resource.id) ? 'text-yellow-500' : ''}"></i>
                </button>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">${resource.title}</h4>
            <p class="text-gray-600 dark:text-gray-300 mb-4">${resource.description}</p>
            <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500 dark:text-gray-400">${resource.category}</span>
                <button onclick="downloadResource(${resource.id})" class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                    Download
                </button>
            </div>
        `;
        resourcesGrid.appendChild(card);
    });
}

function getResourceIcon(type) {
    const icons = {
        'pdf': 'file-pdf',
        'video': 'video',
        'template': 'file-image',
        'guide': 'book'
    };
    return icons[type] || 'file';
}

function getResourceColor(type) {
    const colors = {
        'pdf': 'red',
        'video': 'blue',
        'template': 'green',
        'guide': 'purple'
    };
    return colors[type] || 'gray';
}

// Assessments Functions
function renderAssessments() {
    const assessmentsGrid = document.getElementById('assessmentsGrid');
    assessmentsGrid.innerHTML = '';
    
    trainingData.assessments.forEach(assessment => {
        const card = document.createElement('div');
        card.className = 'assessment-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md';
        
        const score = userProgress.assessmentScores[assessment.id] || null;
        const status = score ? (score >= assessment.passingScore ? 'passed' : 'failed') : 'not-attempted';
        
        card.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white">${assessment.title}</h4>
                <span class="text-xs px-2 py-1 rounded ${getAssessmentStatusColor(status)}">
                    ${status.toUpperCase()}
                </span>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
                ${assessment.type === 'quiz' ? 
                    `${assessment.questions} questions • ${assessment.timeLimit} minutes` : 
                    assessment.description
                }
            </p>
            ${score ? `<p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Score: ${score}%</p>` : ''}
            <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500 dark:text-gray-400">Passing: ${assessment.passingScore}%</span>
                <button onclick="startAssessment(${assessment.id})" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">
                    ${score ? 'Retake' : 'Start Assessment'}
                </button>
            </div>
        `;
        assessmentsGrid.appendChild(card);
    });
}

function getAssessmentStatusColor(status) {
    const colors = {
        'passed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        'failed': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
        'not-attempted': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    };
    return colors[status];
}

// Utility Functions
function updateProgress() {
    // Update week statuses
    trainingData.weeks.forEach(week => {
        const completedModules = week.modules.filter(module => 
            userProgress.completedModules.includes(`${week.week}-${module.day}`)
        ).length;
        const progress = Math.round((completedModules / week.modules.length) * 100);
        
        week.progress = progress;
        week.status = progress === 100 ? 'completed' : 
                     progress > 0 ? 'in-progress' : 'not-started';
    });
    
    // Re-render components
    renderTimeline();
    renderDashboard();
}

function showMessage(message, type = 'info') {
    const colors = {
        'success': 'bg-green-100 border-green-400 text-green-700',
        'error': 'bg-red-100 border-red-400 text-red-700',
        'warning': 'bg-yellow-100 border-yellow-400 text-yellow-700',
        'info': 'bg-blue-100 border-blue-400 text-blue-700'
    };
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `fixed top-4 right-4 p-4 rounded-lg border ${colors[type]} z-50 message`;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

function formatTime(timestamp) {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

function toggleBookmark(resourceId) {
    const index = userProgress.bookmarks.indexOf(resourceId);
    if (index > -1) {
        userProgress.bookmarks.splice(index, 1);
    } else {
        userProgress.bookmarks.push(resourceId);
    }
    saveUserProgress();
    renderResources();
}

function downloadResource(resourceId) {
    // Simulate download
    showMessage('Download started...', 'success');
}

function startAssessment(assessmentId) {
    showMessage('Assessment started!', 'info');
}

// Event Listeners
function setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    // Resource filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterResources(e.target.dataset.filter);
        });
    });
    
    // Modal close on outside click
    document.getElementById('weekModal').addEventListener('click', (e) => {
        if (e.target.id === 'weekModal') closeWeekModal();
    });
    
    document.getElementById('quizModal').addEventListener('click', (e) => {
        if (e.target.id === 'quizModal') closeQuizModal();
    });
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    // Implement search functionality
    console.log('Searching for:', query);
}

function filterResources(filter) {
    // Implement resource filtering
    console.log('Filtering resources by:', filter);
}

// Certificate Functions
function generateCertificate() {
    const studentName = prompt('Enter your name for the certificate:') || '[Your Name]';
    document.getElementById('studentName').textContent = studentName;
    
    const completionDate = new Date().toLocaleDateString();
    document.getElementById('completionDate').textContent = completionDate;
    
    const finalScore = document.getElementById('assessmentScore').textContent;
    document.getElementById('finalScore').textContent = finalScore;
    
    // Print certificate
    window.print();
}

function shareCertificate() {
    if (navigator.share) {
        navigator.share({
            title: 'Social Media Training Certificate',
            text: 'I completed the Social Media Mastery Programme!',
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        showMessage('Certificate link copied to clipboard!', 'success');
    }
}

// Initialize theme
if (localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
}