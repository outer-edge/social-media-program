// Week Content System for Social Media Training App

class WeekContentSystem {
    constructor(app) {
        this.app = app;
        this.currentWeekId = null;
        this.currentModuleId = null;
        this.detailedWeekContent = this.initializeDetailedContent();
    }

    initializeDetailedContent() {
        return {
            1: {
                title: "Programme Introduction & AI Fundamentals",
                description: "Welcome to your social media mastery journey! This week establishes the foundation for your learning with AI fundamentals and programme structure.",
                objectives: [
                    "Understand the scope and structure of the 12-week programme",
                    "Learn fundamental concepts of AI in marketing",
                    "Explore the current social media landscape",
                    "Set personal learning goals and success metrics"
                ],
                modules: {
                    1: {
                        title: "Welcome & Programme Overview",
                        duration: 30,
                        type: "video",
                        description: "Get oriented with the programme structure, expectations, and your learning journey ahead.",
                        content: {
                            overview: "Welcome to Social Media Mastery! This comprehensive 12-week programme will transform you into a skilled social media professional using cutting-edge AI tools.",
                            keyPoints: [
                                "Programme structure and weekly breakdown",
                                "Learning objectives and career outcomes",
                                "Assessment methodology and certification requirements",
                                "Community guidelines and support resources"
                            ],
                            practicalExercise: "Complete your learner profile and set three specific career goals you want to achieve through this programme.",
                            resources: [
                                "Programme Handbook PDF",
                                "Career Pathway Guide",
                                "Community Forum Access"
                            ]
                        }
                    },
                    2: {
                        title: "AI Fundamentals for Marketing",
                        duration: 45,
                        type: "interactive",
                        description: "Discover how artificial intelligence is revolutionizing marketing and social media.",
                        content: {
                            overview: "Artificial Intelligence is transforming how we create, distribute, and optimize marketing content. Understanding these fundamentals is crucial for modern marketers.",
                            keyPoints: [
                                "What is AI and how does it work in marketing contexts?",
                                "Machine learning vs. traditional automation",
                                "Natural Language Processing (NLP) applications",
                                "AI ethics and responsible use in marketing"
                            ],
                            practicalExercise: "Identify three marketing tasks in your current role that could benefit from AI assistance. Document the current process and potential AI improvements.",
                            interactiveElements: [
                                "AI vs Human content comparison exercise",
                                "Marketing automation workflow builder",
                                "Ethics scenario discussions"
                            ],
                            resources: [
                                "AI Marketing Glossary",
                                "Case Study: Nike's AI-Powered Campaigns",
                                "Ethics Guidelines Checklist"
                            ]
                        }
                    },
                    3: {
                        title: "Social Media Landscape 2024",
                        duration: 35,
                        type: "reading",
                        description: "Understand current trends, platform developments, and audience behaviors shaping social media.",
                        content: {
                            overview: "The social media landscape evolves rapidly. Stay current with platform changes, user behavior shifts, and emerging opportunities.",
                            keyPoints: [
                                "Platform-specific audience demographics and behaviors",
                                "Emerging platforms and features to watch",
                                "Content format trends and performance data",
                                "Privacy changes and their marketing implications"
                            ],
                            practicalExercise: "Create a platform audit for your brand or a chosen business. Analyze audience fit, content performance, and opportunity areas.",
                            resources: [
                                "2024 Social Media Statistics Report",
                                "Platform Feature Updates Timeline",
                                "Audience Behavior Research",
                                "Privacy Regulation Impact Guide"
                            ]
                        }
                    },
                    4: {
                        title: "Setting Your Learning Goals",
                        duration: 20,
                        type: "exercise",
                        description: "Establish clear, measurable objectives for your social media mastery journey.",
                        content: {
                            overview: "Clear goals drive focused learning and measurable progress. Set yourself up for success with SMART objectives.",
                            keyPoints: [
                                "SMART goal framework for professional development",
                                "Skill assessment and gap identification",
                                "Creating your personal learning roadmap",
                                "Tracking progress and celebrating milestones"
                            ],
                            practicalExercise: "Complete the skills assessment quiz and create your personalized 12-week learning plan with weekly milestones.",
                            tools: [
                                "Skills Assessment Quiz",
                                "Goal Setting Template",
                                "Progress Tracking Spreadsheet"
                            ]
                        }
                    },
                    5: {
                        title: "Week 1 Assessment",
                        duration: 15,
                        type: "quiz",
                        description: "Test your understanding of AI fundamentals and programme concepts.",
                        content: {
                            overview: "Demonstrate your grasp of foundational concepts through this comprehensive assessment.",
                            assessmentDetails: {
                                questions: 10,
                                timeLimit: 15,
                                passingScore: 80,
                                attempts: 3,
                                topics: [
                                    "AI fundamentals and applications",
                                    "Social media landscape overview",
                                    "Programme structure and expectations",
                                    "Goal setting and success metrics"
                                ]
                            }
                        }
                    }
                },
                weeklyProject: {
                    title: "Personal Brand Audit",
                    description: "Conduct a comprehensive audit of your personal or professional social media presence.",
                    deliverables: [
                        "Platform presence analysis",
                        "Content audit and performance review",
                        "Audience analysis and engagement patterns",
                        "Improvement recommendations and action plan"
                    ],
                    timeEstimate: "2-3 hours",
                    resources: [
                        "Brand Audit Template",
                        "Analytics Review Checklist",
                        "Competitive Analysis Framework"
                    ]
                }
            },
            2: {
                title: "Digital Marketing Principles & Strategy",
                description: "Master the core principles of digital marketing and develop strategic thinking for social media success.",
                objectives: [
                    "Understand fundamental digital marketing principles",
                    "Learn customer journey mapping techniques",
                    "Develop brand positioning strategies",
                    "Create comprehensive content strategy frameworks"
                ],
                modules: {
                    6: {
                        title: "Digital Marketing Fundamentals",
                        duration: 40,
                        type: "video",
                        description: "Build a solid foundation in digital marketing principles and methodologies.",
                        content: {
                            overview: "Digital marketing success requires understanding core principles that drive consumer behavior and business results.",
                            keyPoints: [
                                "The 4 Ps of marketing in the digital age",
                                "Customer acquisition and retention strategies",
                                "Integrated marketing communications",
                                "ROI measurement and attribution models"
                            ],
                            practicalExercise: "Map out a complete digital marketing ecosystem for a chosen brand, identifying all touchpoints and their roles.",
                            resources: [
                                "Digital Marketing Framework Guide",
                                "ROI Calculation Templates",
                                "Attribution Model Comparison"
                            ]
                        }
                    },
                    7: {
                        title: "Customer Journey Mapping",
                        duration: 35,
                        type: "interactive",
                        description: "Learn to map and optimize the complete customer experience across all touchpoints.",
                        content: {
                            overview: "Understanding your customer's journey enables more effective targeting, messaging, and conversion optimization.",
                            keyPoints: [
                                "Journey mapping methodology and best practices",
                                "Touchpoint identification and analysis",
                                "Pain point discovery and solution development",
                                "Personalization opportunities at each stage"
                            ],
                            practicalExercise: "Create a detailed customer journey map for your target audience, including emotions, touchpoints, and optimization opportunities.",
                            tools: [
                                "Journey Mapping Template",
                                "Touchpoint Audit Checklist",
                                "Persona Development Kit"
                            ]
                        }
                    },
                    8: {
                        title: "Brand Positioning in Social Media",
                        duration: 30,
                        type: "reading",
                        description: "Develop compelling brand positioning that resonates across social media platforms.",
                        content: {
                            overview: "Strong brand positioning differentiates you from competitors and creates emotional connections with your audience.",
                            keyPoints: [
                                "Positioning framework and competitive analysis",
                                "Value proposition development",
                                "Brand personality and voice definition",
                                "Platform-specific positioning adaptation"
                            ],
                            practicalExercise: "Develop a comprehensive brand positioning statement and translate it into platform-specific messaging.",
                            resources: [
                                "Positioning Canvas Template",
                                "Competitive Analysis Tools",
                                "Brand Voice Guidelines"
                            ]
                        }
                    },
                    9: {
                        title: "Content Strategy Framework",
                        duration: 45,
                        type: "exercise",
                        description: "Build a systematic approach to content planning, creation, and optimization.",
                        content: {
                            overview: "Strategic content planning ensures consistent, valuable communication that drives business objectives.",
                            keyPoints: [
                                "Content strategy development process",
                                "Content pillar identification and planning",
                                "Editorial calendar creation and management",
                                "Performance measurement and optimization"
                            ],
                            practicalExercise: "Develop a complete content strategy including pillars, calendar, and measurement framework for a 3-month period.",
                            tools: [
                                "Content Strategy Template",
                                "Editorial Calendar Builder",
                                "Performance Dashboard"
                            ]
                        }
                    },
                    10: {
                        title: "Week 2 Assessment",
                        duration: 20,
                        type: "quiz",
                        description: "Evaluate your understanding of digital marketing strategy and planning.",
                        content: {
                            overview: "Test your strategic thinking and application of digital marketing principles.",
                            assessmentDetails: {
                                questions: 12,
                                timeLimit: 20,
                                passingScore: 80,
                                attempts: 3,
                                topics: [
                                    "Digital marketing fundamentals",
                                    "Customer journey mapping",
                                    "Brand positioning strategies",
                                    "Content strategy development"
                                ]
                            }
                        }
                    }
                },
                weeklyProject: {
                    title: "Brand Strategy Blueprint",
                    description: "Create a comprehensive brand strategy document including positioning, messaging, and content framework.",
                    deliverables: [
                        "Brand positioning statement and competitive analysis",
                        "Customer journey map with optimization opportunities",
                        "Content strategy with 3-month editorial calendar",
                        "Performance measurement framework"
                    ],
                    timeEstimate: "3-4 hours",
                    resources: [
                        "Strategy Blueprint Template",
                        "Research Methodology Guide",
                        "Presentation Template"
                    ]
                }
            }
            // Additional weeks 3-12 would be fully detailed here with similar structure
        };
    }

    navigateToWeek(weekId) {
        this.currentWeekId = weekId;
        this.currentModuleId = null;
        this.renderWeekOverview(weekId);
        this.app.showPage('week');
    }

    renderWeekOverview(weekId) {
        const weekData = this.detailedWeekContent[weekId];
        const trainingWeek = this.app.trainingData.weeks.find(w => w.id === weekId);
        
        if (!weekData || !trainingWeek) {
            this.renderWeekNotAvailable(weekId);
            return;
        }

        const container = document.getElementById('page-week');
        const weekProgress = this.app.currentUser.progress.weeklyProgress[weekId - 1] || 0;
        const isLocked = weekId > this.app.currentUser.currentWeek;

        container.innerHTML = `
            <div class="max-w-6xl mx-auto">
                <!-- Week Header -->
                <div class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg text-white p-8 mb-8">
                    <div class="flex items-start justify-between">
                        <div class="flex-1">
                            <div class="flex items-center mb-4">
                                <h1 class="text-3xl font-bold mr-4">Week ${weekId}</h1>
                                <span class="badge bg-white bg-opacity-20">${trainingWeek.category}</span>
                                ${isLocked ? '<span class="badge bg-red-500 ml-2"><i class="fas fa-lock mr-1"></i>Locked</span>' : ''}
                            </div>
                            <h2 class="text-xl font-medium mb-3">${weekData.title}</h2>
                            <p class="text-lg opacity-90 mb-4">${weekData.description}</p>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <i class="fas fa-target mr-2"></i>
                                    <span class="font-medium">Learning Objectives:</span>
                                </div>
                                <div>
                                    <i class="fas fa-clock mr-2"></i>
                                    <span class="font-medium">Estimated Time: ${this.calculateWeekDuration(weekData)} minutes</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="ml-8 text-center">
                            <div class="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                                <span class="text-2xl font-bold">${Math.round(weekProgress)}%</span>
                            </div>
                            <p class="text-sm opacity-75">Week Progress</p>
                        </div>
                    </div>
                </div>

                <!-- Learning Objectives -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Learning Objectives</h3>
                    <ul class="space-y-2">
                        ${weekData.objectives.map(objective => `
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                                <span class="text-gray-700 dark:text-gray-300">${objective}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <!-- Modules -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">Learning Modules</h3>
                    <div class="space-y-4">
                        ${Object.entries(weekData.modules).map(([moduleId, module]) => 
                            this.renderModuleCard(moduleId, module, isLocked)
                        ).join('')}
                    </div>
                </div>

                <!-- Weekly Project -->
                ${weekData.weeklyProject ? `
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            <i class="fas fa-project-diagram text-indigo-600 mr-2"></i>
                            Weekly Project: ${weekData.weeklyProject.title}
                        </h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">${weekData.weeklyProject.description}</p>
                        
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-medium text-gray-900 dark:text-white mb-3">Deliverables:</h4>
                                <ul class="space-y-2">
                                    ${weekData.weeklyProject.deliverables.map(deliverable => `
                                        <li class="flex items-start">
                                            <i class="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                                            <span class="text-gray-700 dark:text-gray-300 text-sm">${deliverable}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                            
                            <div>
                                <h4 class="font-medium text-gray-900 dark:text-white mb-3">Resources:</h4>
                                <ul class="space-y-2">
                                    ${weekData.weeklyProject.resources.map(resource => `
                                        <li class="flex items-center">
                                            <i class="fas fa-download text-blue-500 mr-2"></i>
                                            <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline text-sm">${resource}</a>
                                        </li>
                                    `).join('')}
                                </ul>
                                <div class="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                    <span class="text-sm text-gray-600 dark:text-gray-400">
                                        <i class="fas fa-clock mr-1"></i>
                                        Estimated time: ${weekData.weeklyProject.timeEstimate}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <button class="btn-primary mt-4 ${isLocked ? 'opacity-50 cursor-not-allowed' : ''}" 
                                ${isLocked ? 'disabled' : ''}>
                            Start Project
                        </button>
                    </div>
                ` : ''}

                <!-- Navigation -->
                <div class="flex justify-between items-center">
                    <button onclick="app.showPage('timeline')" class="btn-secondary">
                        <i class="fas fa-arrow-left mr-2"></i>Back to Timeline
                    </button>
                    
                    <div class="flex space-x-4">
                        ${weekId > 1 ? `
                            <button onclick="weekContent.navigateToWeek(${weekId - 1})" class="btn-secondary">
                                <i class="fas fa-chevron-left mr-2"></i>Previous Week
                            </button>
                        ` : ''}
                        
                        ${weekId < 12 ? `
                            <button onclick="weekContent.navigateToWeek(${weekId + 1})" 
                                    class="btn-primary ${weekId + 1 > this.app.currentUser.currentWeek ? 'opacity-50 cursor-not-allowed' : ''}"
                                    ${weekId + 1 > this.app.currentUser.currentWeek ? 'disabled' : ''}>
                                Next Week<i class="fas fa-chevron-right ml-2"></i>
                            </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    renderModuleCard(moduleId, module, isWeekLocked) {
        const isCompleted = this.app.currentUser.completedModules.includes(parseInt(moduleId));
        const moduleProgress = this.app.currentUser.progress.moduleProgress[moduleId] || 0;
        
        const typeIcons = {
            video: 'fas fa-play-circle text-red-500',
            interactive: 'fas fa-mouse-pointer text-blue-500',
            reading: 'fas fa-book-open text-green-500',
            exercise: 'fas fa-edit text-purple-500',
            quiz: 'fas fa-question-circle text-yellow-500',
            project: 'fas fa-project-diagram text-indigo-500'
        };

        return `
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow ${isWeekLocked ? 'opacity-50' : ''}">
                <div class="flex items-start justify-between">
                    <div class="flex-1">
                        <div class="flex items-center mb-2">
                            <i class="${typeIcons[module.type]} text-xl mr-3"></i>
                            <h4 class="font-medium text-gray-900 dark:text-white">${module.title}</h4>
                            <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">${module.duration} min</span>
                            ${isCompleted ? '<i class="fas fa-check-circle text-green-500 ml-2"></i>' : ''}
                        </div>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">${module.description}</p>
                        
                        <div class="flex items-center justify-between">
                            <div class="progress-bar w-32">
                                <div class="progress-fill" style="width: ${moduleProgress}%"></div>
                            </div>
                            <button onclick="weekContent.openModule(${moduleId})" 
                                    class="btn-primary text-sm py-1 px-3 ${isWeekLocked ? 'opacity-50 cursor-not-allowed' : ''}"
                                    ${isWeekLocked ? 'disabled' : ''}>
                                ${isCompleted ? 'Review' : moduleProgress > 0 ? 'Continue' : 'Start'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderWeekNotAvailable(weekId) {
        const container = document.getElementById('page-week');
        container.innerHTML = `
            <div class="max-w-2xl mx-auto text-center py-12">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-8">
                    <i class="fas fa-lock text-6xl text-gray-400 mb-4"></i>
                    <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Week ${weekId} Not Available</h1>
                    <p class="text-gray-600 dark:text-gray-400 mb-6">
                        This week's content is not yet available. Complete previous weeks to unlock new content.
                    </p>
                    <button onclick="app.showPage('timeline')" class="btn-primary">
                        View Available Weeks
                    </button>
                </div>
            </div>
        `;
    }

    openModule(moduleId) {
        this.currentModuleId = moduleId;
        const weekData = this.detailedWeekContent[this.currentWeekId];
        const module = weekData.modules[moduleId];
        
        if (!module) return;

        this.renderModuleContent(module, moduleId);
    }

    renderModuleContent(module, moduleId) {
        const container = document.getElementById('page-week');
        const isCompleted = this.app.currentUser.completedModules.includes(parseInt(moduleId));
        
        container.innerHTML = `
            <div class="max-w-4xl mx-auto">
                <!-- Module Header -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center">
                            <button onclick="weekContent.navigateToWeek(${this.currentWeekId})" 
                                    class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 mr-4">
                                <i class="fas fa-arrow-left text-xl"></i>
                            </button>
                            <div>
                                <h1 class="text-2xl font-bold text-gray-900 dark:text-white">${module.title}</h1>
                                <p class="text-gray-600 dark:text-gray-400">
                                    Week ${this.currentWeekId} • Module ${moduleId} • ${module.duration} minutes • ${module.type}
                                </p>
                            </div>
                        </div>
                        ${isCompleted ? '<span class="badge badge-success"><i class="fas fa-check mr-1"></i>Completed</span>' : ''}
                    </div>
                    
                    <p class="text-gray-700 dark:text-gray-300">${module.description}</p>
                </div>

                <!-- Module Content -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-8 mb-8">
                    ${this.renderModuleContentSections(module)}
                </div>

                <!-- Module Actions -->
                <div class="flex justify-between items-center">
                    <button onclick="weekContent.navigateToWeek(${this.currentWeekId})" class="btn-secondary">
                        <i class="fas fa-arrow-left mr-2"></i>Back to Week Overview
                    </button>
                    
                    <div class="flex space-x-4">
                        ${!isCompleted ? `
                            <button onclick="weekContent.completeModule(${moduleId})" class="btn-success">
                                <i class="fas fa-check mr-2"></i>Mark Complete
                            </button>
                        ` : ''}
                        
                        <button onclick="weekContent.nextModule()" class="btn-primary">
                            Next Module<i class="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    renderModuleContentSections(module) {
        const content = module.content;
        if (!content) return '<p class="text-gray-500">Content not available yet.</p>';

        let html = `
            <div class="prose dark:prose-invert max-w-none">
                <h2>Overview</h2>
                <p>${content.overview}</p>
        `;

        if (content.keyPoints) {
            html += `
                <h3>Key Learning Points</h3>
                <ul>
                    ${content.keyPoints.map(point => `<li>${point}</li>`).join('')}
                </ul>
            `;
        }

        if (content.practicalExercise) {
            html += `
                <div class="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 p-4 my-6">
                    <h3 class="text-blue-800 dark:text-blue-200 mb-2">
                        <i class="fas fa-tasks mr-2"></i>Practical Exercise
                    </h3>
                    <p class="text-blue-700 dark:text-blue-300">${content.practicalExercise}</p>
                </div>
            `;
        }

        if (content.interactiveElements) {
            html += `
                <h3>Interactive Elements</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    ${content.interactiveElements.map(element => `
                        <div class="border border-gray-200 dark:border-gray-700 rounded p-3">
                            <i class="fas fa-mouse-pointer text-blue-500 mr-2"></i>
                            ${element}
                        </div>
                    `).join('')}
                </div>
            `;
        }

        if (content.resources || content.tools) {
            const resourceList = content.resources || content.tools || [];
            html += `
                <h3>Resources & Tools</h3>
                <div class="space-y-2">
                    ${resourceList.map(resource => `
                        <div class="flex items-center">
                            <i class="fas fa-download text-green-500 mr-2"></i>
                            <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">${resource}</a>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        if (content.assessmentDetails) {
            html += `
                <div class="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 my-6">
                    <h3 class="text-yellow-800 dark:text-yellow-200 mb-2">
                        <i class="fas fa-quiz mr-2"></i>Assessment Details
                    </h3>
                    <div class="text-yellow-700 dark:text-yellow-300 space-y-2">
                        <p><strong>Questions:</strong> ${content.assessmentDetails.questions}</p>
                        <p><strong>Time Limit:</strong> ${content.assessmentDetails.timeLimit} minutes</p>
                        <p><strong>Passing Score:</strong> ${content.assessmentDetails.passingScore}%</p>
                        <p><strong>Attempts Allowed:</strong> ${content.assessmentDetails.attempts}</p>
                    </div>
                </div>
            `;
        }

        html += '</div>';
        return html;
    }

    calculateWeekDuration(weekData) {
        return Object.values(weekData.modules).reduce((total, module) => total + module.duration, 0);
    }

    completeModule(moduleId) {
        if (!this.app.currentUser.completedModules.includes(parseInt(moduleId))) {
            this.app.currentUser.completedModules.push(parseInt(moduleId));
            this.app.currentUser.progress.moduleProgress[moduleId] = 100;
            
            // Update week progress
            this.updateWeekProgress();
            
            // Update overall progress
            this.updateOverallProgress();
            
            this.app.saveUserData();
            this.app.showNotification('success', 'Module Complete', 'Great job! Module marked as complete.');
            
            // Re-render the module with updated status
            setTimeout(() => {
                this.navigateToWeek(this.currentWeekId);
            }, 1500);
        }
    }

    updateWeekProgress() {
        const weekData = this.detailedWeekContent[this.currentWeekId];
        if (!weekData) return;

        const moduleIds = Object.keys(weekData.modules).map(id => parseInt(id));
        const completedCount = moduleIds.filter(id => 
            this.app.currentUser.completedModules.includes(id)
        ).length;
        
        const weekProgress = (completedCount / moduleIds.length) * 100;
        this.app.currentUser.progress.weeklyProgress[this.currentWeekId - 1] = weekProgress;
        
        // Unlock next week if current week is complete
        if (weekProgress === 100 && this.currentWeekId === this.app.currentUser.currentWeek) {
            this.app.currentUser.currentWeek = Math.min(this.currentWeekId + 1, 12);
        }
    }

    updateOverallProgress() {
        const totalModules = 60; // 5 modules per week × 12 weeks
        const completedModules = this.app.currentUser.completedModules.length;
        this.app.currentUser.progress.overallProgress = (completedModules / totalModules) * 100;
    }

    nextModule() {
        const weekData = this.detailedWeekContent[this.currentWeekId];
        const moduleIds = Object.keys(weekData.modules).map(id => parseInt(id)).sort((a, b) => a - b);
        const currentIndex = moduleIds.indexOf(parseInt(this.currentModuleId));
        
        if (currentIndex < moduleIds.length - 1) {
            // Next module in same week
            this.openModule(moduleIds[currentIndex + 1]);
        } else if (this.currentWeekId < 12) {
            // Next week
            this.app.showNotification('info', 'Week Complete', 'Moving to next week...');
            setTimeout(() => {
                this.navigateToWeek(this.currentWeekId + 1);
            }, 1000);
        } else {
            // Programme complete
            this.app.showNotification('success', 'Programme Complete', 'Congratulations on completing the programme!');
            setTimeout(() => {
                this.app.showPage('progress');
            }, 2000);
        }
    }
}

// Initialize week content system
document.addEventListener('DOMContentLoaded', () => {
    if (window.app) {
        window.weekContent = new WeekContentSystem(window.app);
        
        // Override the app's navigateToWeek method
        window.app.navigateToWeek = (weekId) => {
            window.weekContent.navigateToWeek(weekId);
        };
    }
});