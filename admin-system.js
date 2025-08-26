// Admin System for Social Media Training App
// Provides user management and reporting capabilities

class AdminSystem {
    constructor(app) {
        this.app = app;
        this.isAdminMode = false;
        this.allUsersData = this.loadAllUsersData();
        this.setupAdminAccess();
    }

    setupAdminAccess() {
        // Add admin toggle to user menu
        const userMenu = document.getElementById('user-menu');
        if (userMenu) {
            const adminOption = document.createElement('a');
            adminOption.href = '#';
            adminOption.className = 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700';
            adminOption.innerHTML = '<i class="fas fa-cog mr-2"></i>Admin Panel';
            adminOption.onclick = (e) => {
                e.preventDefault();
                this.toggleAdminMode();
            };
            
            // Insert before the separator
            const separator = userMenu.querySelector('hr');
            if (separator) {
                userMenu.insertBefore(adminOption, separator);
            }
        }

        // Listen for admin key combination (Ctrl+Alt+A)
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.altKey && e.key === 'a') {
                e.preventDefault();
                this.toggleAdminMode();
            }
        });
    }

    loadAllUsersData() {
        // In a real application, this would fetch from a server
        // For demo purposes, we'll simulate multiple users
        const userData = localStorage.getItem('smt_all_users');
        if (userData) {
            return JSON.parse(userData);
        }

        // Generate sample users for demonstration
        return this.generateSampleUsers();
    }

    generateSampleUsers() {
        const sampleUsers = [
            {
                id: 'user_1',
                name: 'John Smith',
                email: 'john.smith@company.com',
                enrollmentDate: '2024-01-15T00:00:00Z',
                currentWeek: 4,
                completedModules: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                assessmentScores: { 1: 92, 4: 87 },
                progress: {
                    overallProgress: 25,
                    weeklyProgress: [100, 100, 100, 75, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                lastActive: '2024-01-20T14:30:00Z'
            },
            {
                id: 'user_2',
                name: 'Sarah Johnson',
                email: 'sarah.j@marketing.com',
                enrollmentDate: '2024-01-10T00:00:00Z',
                currentWeek: 6,
                completedModules: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                assessmentScores: { 1: 95, 4: 91, 6: 88 },
                progress: {
                    overallProgress: 48,
                    weeklyProgress: [100, 100, 100, 100, 100, 80, 0, 0, 0, 0, 0, 0]
                },
                lastActive: '2024-01-21T09:15:00Z'
            },
            {
                id: 'user_3',
                name: 'Mike Chen',
                email: 'mike.chen@startup.io',
                enrollmentDate: '2024-01-20T00:00:00Z',
                currentWeek: 2,
                completedModules: [1, 2, 3, 4, 5, 6, 7, 8],
                assessmentScores: { 1: 83 },
                progress: {
                    overallProgress: 13,
                    weeklyProgress: [100, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                lastActive: '2024-01-21T16:45:00Z'
            }
        ];

        // Add current user if not in sample
        const currentUser = this.app.currentUser;
        if (currentUser && !sampleUsers.find(u => u.id === currentUser.id)) {
            sampleUsers.push(currentUser);
        }

        localStorage.setItem('smt_all_users', JSON.stringify(sampleUsers));
        return sampleUsers;
    }

    toggleAdminMode() {
        this.isAdminMode = !this.isAdminMode;
        
        if (this.isAdminMode) {
            this.showAdminPanel();
        } else {
            this.app.showPage('dashboard');
        }
        
        this.app.showNotification('info', 'Admin Mode', 
            this.isAdminMode ? 'Admin panel activated' : 'Admin panel deactivated');
    }

    showAdminPanel() {
        // Add admin page to navigation
        this.addAdminNavigation();
        
        // Show admin dashboard
        this.renderAdminDashboard();
        this.app.showPage('admin');
    }

    addAdminNavigation() {
        const nav = document.querySelector('.hidden.md\\:ml-10.md\\:flex.space-x-8');
        if (nav && !document.querySelector('[data-page="admin"]')) {
            const adminLink = document.createElement('a');
            adminLink.href = '#';
            adminLink.className = 'nav-link';
            adminLink.dataset.page = 'admin';
            adminLink.textContent = 'Admin';
            adminLink.style.color = '#dc2626'; // Red color to indicate admin mode
            
            adminLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.renderAdminDashboard();
                this.app.showPage('admin');
            });
            
            nav.appendChild(adminLink);
        }

        // Add admin page container if it doesn't exist
        if (!document.getElementById('page-admin')) {
            const adminPage = document.createElement('div');
            adminPage.id = 'page-admin';
            adminPage.className = 'page-content hidden';
            document.querySelector('main').appendChild(adminPage);
        }
    }

    renderAdminDashboard() {
        const container = document.getElementById('page-admin');
        if (!container) return;

        const stats = this.calculateOverallStats();
        
        container.innerHTML = `
            <div class="mb-8">
                <div class="flex items-center justify-between mb-6">
                    <div>
                        <h1 class="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
                            <i class="fas fa-shield-alt mr-3"></i>Admin Dashboard
                        </h1>
                        <p class="text-gray-600 dark:text-gray-400">Manage users and monitor programme performance</p>
                    </div>
                    <button onclick="adminSystem.toggleAdminMode()" class="btn-secondary">
                        <i class="fas fa-times mr-2"></i>Exit Admin Mode
                    </button>
                </div>

                <!-- Overall Statistics -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <i class="fas fa-users text-2xl text-blue-600"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Users</p>
                                <p class="text-2xl font-semibold text-gray-900 dark:text-white">${stats.totalUsers}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <i class="fas fa-chart-line text-2xl text-green-600"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Progress</p>
                                <p class="text-2xl font-semibold text-gray-900 dark:text-white">${stats.averageProgress}%</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <i class="fas fa-graduation-cap text-2xl text-purple-600"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Completions</p>
                                <p class="text-2xl font-semibold text-gray-900 dark:text-white">${stats.completions}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <i class="fas fa-star text-2xl text-yellow-600"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Score</p>
                                <p class="text-2xl font-semibold text-gray-900 dark:text-white">${stats.averageScore}%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Admin Actions -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">User Management</h3>
                        <div class="space-y-3">
                            <button onclick="adminSystem.showUserList()" class="w-full btn-primary text-sm">
                                <i class="fas fa-users mr-2"></i>Manage Users
                            </button>
                            <button onclick="adminSystem.exportUserData()" class="w-full btn-secondary text-sm">
                                <i class="fas fa-download mr-2"></i>Export User Data
                            </button>
                            <button onclick="adminSystem.showBulkActions()" class="w-full btn-secondary text-sm">
                                <i class="fas fa-cogs mr-2"></i>Bulk Actions
                            </button>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Reports & Analytics</h3>
                        <div class="space-y-3">
                            <button onclick="adminSystem.generateProgressReport()" class="w-full btn-primary text-sm">
                                <i class="fas fa-chart-bar mr-2"></i>Progress Report
                            </button>
                            <button onclick="adminSystem.generateAssessmentReport()" class="w-full btn-secondary text-sm">
                                <i class="fas fa-quiz mr-2"></i>Assessment Report
                            </button>
                            <button onclick="adminSystem.generateEngagementReport()" class="w-full btn-secondary text-sm">
                                <i class="fas fa-activity mr-2"></i>Engagement Report
                            </button>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Content Management</h3>
                        <div class="space-y-3">
                            <button onclick="adminSystem.manageContent()" class="w-full btn-primary text-sm">
                                <i class="fas fa-edit mr-2"></i>Edit Content
                            </button>
                            <button onclick="adminSystem.manageAssessments()" class="w-full btn-secondary text-sm">
                                <i class="fas fa-question-circle mr-2"></i>Manage Assessments
                            </button>
                            <button onclick="adminSystem.manageResources()" class="w-full btn-secondary text-sm">
                                <i class="fas fa-folder mr-2"></i>Manage Resources
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Recent Activity -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent User Activity</h3>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">User</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Progress</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Last Active</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                ${this.allUsersData.slice(0, 5).map(user => this.renderUserRow(user)).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Performance Charts -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weekly Progress Distribution</h3>
                        <div id="weekly-progress-chart" class="h-64">
                            ${this.renderWeeklyProgressChart()}
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Assessment Performance</h3>
                        <div id="assessment-performance-chart" class="h-64">
                            ${this.renderAssessmentChart()}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    calculateOverallStats() {
        const totalUsers = this.allUsersData.length;
        const averageProgress = Math.round(
            this.allUsersData.reduce((sum, user) => sum + user.progress.overallProgress, 0) / totalUsers
        );
        const completions = this.allUsersData.filter(user => user.progress.overallProgress === 100).length;
        
        const allScores = this.allUsersData.flatMap(user => Object.values(user.assessmentScores));
        const averageScore = allScores.length > 0 ? 
            Math.round(allScores.reduce((sum, score) => sum + score, 0) / allScores.length) : 0;

        return { totalUsers, averageProgress, completions, averageScore };
    }

    renderUserRow(user) {
        const lastActive = new Date(user.lastActive).toLocaleDateString();
        const progressColor = user.progress.overallProgress >= 80 ? 'green' : 
                             user.progress.overallProgress >= 50 ? 'yellow' : 'red';
        
        return `
            <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                            <div class="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">
                                <span class="text-white font-medium text-sm">${user.name.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                        </div>
                        <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900 dark:text-white">${user.name}</div>
                            <div class="text-sm text-gray-500 dark:text-gray-400">${user.email}</div>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="progress-bar w-16 mr-2">
                            <div class="progress-fill bg-${progressColor}-500" style="width: ${user.progress.overallProgress}%"></div>
                        </div>
                        <span class="text-sm text-gray-900 dark:text-white">${Math.round(user.progress.overallProgress)}%</span>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    ${lastActive}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button onclick="adminSystem.viewUserDetail('${user.id}')" class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-3">
                        View
                    </button>
                    <button onclick="adminSystem.resetUserProgress('${user.id}')" class="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                        Reset
                    </button>
                </td>
            </tr>
        `;
    }

    renderWeeklyProgressChart() {
        const weekData = Array(12).fill(0).map((_, i) => {
            const weekProgress = this.allUsersData.map(user => user.progress.weeklyProgress[i] || 0);
            return weekProgress.reduce((sum, progress) => sum + progress, 0) / this.allUsersData.length;
        });

        const maxHeight = 200;
        const barWidth = 20;
        const spacing = 25;

        return `
            <svg width="100%" height="${maxHeight + 40}" viewBox="0 0 ${12 * spacing + 40} ${maxHeight + 40}">
                ${weekData.map((progress, i) => {
                    const height = (progress / 100) * maxHeight;
                    const x = 20 + i * spacing;
                    const y = maxHeight - height + 10;
                    
                    return `
                        <rect x="${x}" y="${y}" width="${barWidth}" height="${height}" 
                              fill="#4f46e5" opacity="0.8" rx="2"/>
                        <text x="${x + barWidth/2}" y="${maxHeight + 25}" text-anchor="middle" 
                              class="text-xs fill-gray-600 dark:fill-gray-400">W${i + 1}</text>
                        <text x="${x + barWidth/2}" y="${y - 5}" text-anchor="middle" 
                              class="text-xs fill-gray-900 dark:fill-gray-100">${Math.round(progress)}%</text>
                    `;
                }).join('')}
            </svg>
        `;
    }

    renderAssessmentChart() {
        const assessmentData = [1, 4, 6, 8, 10, 12].map(weekId => {
            const scores = this.allUsersData
                .map(user => user.assessmentScores[weekId])
                .filter(score => score !== undefined);
            
            return {
                week: weekId,
                average: scores.length > 0 ? scores.reduce((sum, score) => sum + score, 0) / scores.length : 0,
                count: scores.length
            };
        });

        const maxHeight = 200;
        const barWidth = 30;
        const spacing = 40;

        return `
            <svg width="100%" height="${maxHeight + 40}" viewBox="0 0 ${assessmentData.length * spacing + 40} ${maxHeight + 40}">
                ${assessmentData.map((data, i) => {
                    const height = (data.average / 100) * maxHeight;
                    const x = 20 + i * spacing;
                    const y = maxHeight - height + 10;
                    const color = data.average >= 80 ? '#10b981' : data.average >= 60 ? '#f59e0b' : '#ef4444';
                    
                    return `
                        <rect x="${x}" y="${y}" width="${barWidth}" height="${height}" 
                              fill="${color}" opacity="0.8" rx="2"/>
                        <text x="${x + barWidth/2}" y="${maxHeight + 25}" text-anchor="middle" 
                              class="text-xs fill-gray-600 dark:fill-gray-400">W${data.week}</text>
                        <text x="${x + barWidth/2}" y="${y - 5}" text-anchor="middle" 
                              class="text-xs fill-gray-900 dark:fill-gray-100">${Math.round(data.average)}%</text>
                    `;
                }).join('')}
            </svg>
        `;
    }

    // User Management Methods
    showUserList() {
        const container = document.getElementById('page-admin');
        container.innerHTML = `
            <div class="mb-8">
                <div class="flex items-center justify-between mb-6">
                    <h1 class="text-2xl font-bold text-gray-900 dark:text-white">User Management</h1>
                    <div class="flex space-x-4">
                        <button onclick="adminSystem.addNewUser()" class="btn-primary">
                            <i class="fas fa-plus mr-2"></i>Add User
                        </button>
                        <button onclick="adminSystem.renderAdminDashboard()" class="btn-secondary">
                            <i class="fas fa-arrow-left mr-2"></i>Back to Dashboard
                        </button>
                    </div>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <div class="flex items-center justify-between">
                            <h3 class="text-lg font-medium text-gray-900 dark:text-white">All Users (${this.allUsersData.length})</h3>
                            <div class="flex items-center space-x-4">
                                <input type="text" placeholder="Search users..." 
                                       class="form-input w-64" id="user-search">
                                <select class="form-input w-48" id="user-filter">
                                    <option value="">All Users</option>
                                    <option value="active">Active (Week 1+)</option>
                                    <option value="struggling">Struggling (< 50%)</option>
                                    <option value="advanced">Advanced (Week 8+)</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        <input type="checkbox" id="select-all" class="rounded">
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">User</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Enrolled</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Current Week</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Progress</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Last Active</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700" id="users-table-body">
                                ${this.allUsersData.map(user => this.renderDetailedUserRow(user)).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;

        // Add search and filter functionality
        document.getElementById('user-search').addEventListener('input', (e) => {
            this.filterUsers(e.target.value, document.getElementById('user-filter').value);
        });
        
        document.getElementById('user-filter').addEventListener('change', (e) => {
            this.filterUsers(document.getElementById('user-search').value, e.target.value);
        });
    }

    renderDetailedUserRow(user) {
        const enrollmentDate = new Date(user.enrollmentDate).toLocaleDateString();
        const lastActive = new Date(user.lastActive).toLocaleDateString();
        const progressColor = user.progress.overallProgress >= 80 ? 'green' : 
                             user.progress.overallProgress >= 50 ? 'yellow' : 'red';
        
        return `
            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td class="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" class="user-checkbox rounded" data-user-id="${user.id}">
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                            <div class="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">
                                <span class="text-white font-medium text-sm">${user.name.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                        </div>
                        <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900 dark:text-white">${user.name}</div>
                            <div class="text-sm text-gray-500 dark:text-gray-400">${user.email}</div>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    ${enrollmentDate}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    Week ${user.currentWeek}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="progress-bar w-20 mr-2">
                            <div class="progress-fill bg-${progressColor}-500" style="width: ${user.progress.overallProgress}%"></div>
                        </div>
                        <span class="text-sm text-gray-900 dark:text-white">${Math.round(user.progress.overallProgress)}%</span>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    ${lastActive}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div class="flex space-x-2">
                        <button onclick="adminSystem.viewUserDetail('${user.id}')" 
                                class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button onclick="adminSystem.editUser('${user.id}')" 
                                class="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button onclick="adminSystem.resetUserProgress('${user.id}')" 
                                class="text-yellow-600 hover:text-yellow-900 dark:text-yellow-400 dark:hover:text-yellow-300">
                            <i class="fas fa-redo"></i>
                        </button>
                        <button onclick="adminSystem.deleteUser('${user.id}')" 
                                class="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }

    filterUsers(searchTerm, filterType) {
        let filteredUsers = this.allUsersData;

        // Apply search filter
        if (searchTerm) {
            filteredUsers = filteredUsers.filter(user => 
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply category filter
        if (filterType) {
            filteredUsers = filteredUsers.filter(user => {
                switch (filterType) {
                    case 'active':
                        return user.currentWeek > 1;
                    case 'struggling':
                        return user.progress.overallProgress < 50;
                    case 'advanced':
                        return user.currentWeek >= 8;
                    case 'completed':
                        return user.progress.overallProgress === 100;
                    default:
                        return true;
                }
            });
        }

        // Update table
        const tbody = document.getElementById('users-table-body');
        if (tbody) {
            tbody.innerHTML = filteredUsers.map(user => this.renderDetailedUserRow(user)).join('');
        }
    }

    // Report Generation Methods
    generateProgressReport() {
        const reportData = {
            generatedAt: new Date().toISOString(),
            summary: this.calculateOverallStats(),
            userProgress: this.allUsersData.map(user => ({
                name: user.name,
                email: user.email,
                currentWeek: user.currentWeek,
                overallProgress: user.progress.overallProgress,
                completedModules: user.completedModules.length,
                weeklyBreakdown: user.progress.weeklyProgress
            })),
            weeklyStats: Array(12).fill(0).map((_, i) => {
                const weekProgress = this.allUsersData.map(user => user.progress.weeklyProgress[i] || 0);
                return {
                    week: i + 1,
                    averageProgress: weekProgress.reduce((sum, progress) => sum + progress, 0) / this.allUsersData.length,
                    usersCompleted: weekProgress.filter(progress => progress === 100).length,
                    usersStarted: weekProgress.filter(progress => progress > 0).length
                };
            })
        };

        this.downloadReport(reportData, 'progress_report');
        this.app.showNotification('success', 'Report Generated', 'Progress report downloaded successfully.');
    }

    generateAssessmentReport() {
        const assessmentData = this.allUsersData.flatMap(user => 
            Object.entries(user.assessmentScores).map(([assessmentId, score]) => ({
                userId: user.id,
                userName: user.name,
                userEmail: user.email,
                assessmentId: parseInt(assessmentId),
                score: score,
                passed: score >= 80
            }))
        );

        const reportData = {
            generatedAt: new Date().toISOString(),
            summary: {
                totalAttempts: assessmentData.length,
                averageScore: assessmentData.length > 0 ? 
                    assessmentData.reduce((sum, item) => sum + item.score, 0) / assessmentData.length : 0,
                passRate: assessmentData.length > 0 ? 
                    (assessmentData.filter(item => item.passed).length / assessmentData.length) * 100 : 0
            },
            assessmentBreakdown: [1, 4, 6, 8, 10, 12].map(assessmentId => {
                const attempts = assessmentData.filter(item => item.assessmentId === assessmentId);
                return {
                    assessmentId,
                    attempts: attempts.length,
                    averageScore: attempts.length > 0 ? 
                        attempts.reduce((sum, item) => sum + item.score, 0) / attempts.length : 0,
                    passRate: attempts.length > 0 ? 
                        (attempts.filter(item => item.passed).length / attempts.length) * 100 : 0
                };
            }),
            detailedResults: assessmentData
        };

        this.downloadReport(reportData, 'assessment_report');
        this.app.showNotification('success', 'Report Generated', 'Assessment report downloaded successfully.');
    }

    generateEngagementReport() {
        const reportData = {
            generatedAt: new Date().toISOString(),
            userEngagement: this.allUsersData.map(user => {
                const enrollmentDays = Math.ceil((new Date() - new Date(user.enrollmentDate)) / (1000 * 60 * 60 * 24));
                const lastActiveDays = Math.ceil((new Date() - new Date(user.lastActive)) / (1000 * 60 * 60 * 24));
                
                return {
                    name: user.name,
                    email: user.email,
                    enrollmentDays,
                    lastActiveDays,
                    engagementScore: this.calculateEngagementScore(user),
                    completedModules: user.completedModules.length,
                    assessmentsTaken: Object.keys(user.assessmentScores).length
                };
            }),
            summary: {
                activeUsers: this.allUsersData.filter(user => {
                    const lastActiveDays = Math.ceil((new Date() - new Date(user.lastActive)) / (1000 * 60 * 60 * 24));
                    return lastActiveDays <= 7;
                }).length,
                inactiveUsers: this.allUsersData.filter(user => {
                    const lastActiveDays = Math.ceil((new Date() - new Date(user.lastActive)) / (1000 * 60 * 60 * 24));
                    return lastActiveDays > 30;
                }).length
            }
        };

        this.downloadReport(reportData, 'engagement_report');
        this.app.showNotification('success', 'Report Generated', 'Engagement report downloaded successfully.');
    }

    calculateEngagementScore(user) {
        const enrollmentDays = Math.ceil((new Date() - new Date(user.enrollmentDate)) / (1000 * 60 * 60 * 24));
        const lastActiveDays = Math.ceil((new Date() - new Date(user.lastActive)) / (1000 * 60 * 60 * 24));
        const expectedProgress = Math.min((enrollmentDays / 7) * 8.33, 100); // 8.33% per week
        const actualProgress = user.progress.overallProgress;
        
        // Score based on progress vs expected, recency of activity, and assessment participation
        const progressScore = Math.min((actualProgress / expectedProgress) * 50, 50);
        const activityScore = Math.max(0, 30 - lastActiveDays); // Up to 30 points for recent activity
        const assessmentScore = Object.keys(user.assessmentScores).length * 5; // 5 points per assessment
        
        return Math.min(progressScore + activityScore + assessmentScore, 100);
    }

    downloadReport(data, filename) {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${filename}_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    exportUserData() {
        const exportData = {
            exportDate: new Date().toISOString(),
            totalUsers: this.allUsersData.length,
            users: this.allUsersData
        };
        
        this.downloadReport(exportData, 'user_data_export');
        this.app.showNotification('success', 'Export Complete', 'User data exported successfully.');
    }

    // User Action Methods
    viewUserDetail(userId) {
        const user = this.allUsersData.find(u => u.id === userId);
        if (!user) return;

        this.app.showNotification('info', 'User Detail', `Viewing details for ${user.name}`);
        // Implementation for detailed user view would go here
    }

    editUser(userId) {
        this.app.showNotification('info', 'Edit User', 'User editing functionality would be implemented here');
        // Implementation for user editing would go here
    }

    resetUserProgress(userId) {
        if (confirm('Are you sure you want to reset this user\'s progress? This action cannot be undone.')) {
            const userIndex = this.allUsersData.findIndex(u => u.id === userId);
            if (userIndex !== -1) {
                this.allUsersData[userIndex] = {
                    ...this.allUsersData[userIndex],
                    currentWeek: 1,
                    completedModules: [],
                    assessmentScores: {},
                    progress: {
                        overallProgress: 0,
                        weeklyProgress: Array(12).fill(0),
                        moduleProgress: {}
                    }
                };
                
                localStorage.setItem('smt_all_users', JSON.stringify(this.allUsersData));
                this.app.showNotification('success', 'Progress Reset', 'User progress has been reset successfully.');
                
                // Refresh current view
                if (document.getElementById('users-table-body')) {
                    this.showUserList();
                } else {
                    this.renderAdminDashboard();
                }
            }
        }
    }

    deleteUser(userId) {
        if (confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
            this.allUsersData = this.allUsersData.filter(u => u.id !== userId);
            localStorage.setItem('smt_all_users', JSON.stringify(this.allUsersData));
            this.app.showNotification('success', 'User Deleted', 'User has been deleted successfully.');
            
            // Refresh current view
            if (document.getElementById('users-table-body')) {
                this.showUserList();
            } else {
                this.renderAdminDashboard();
            }
        }
    }

    addNewUser() {
        this.app.showNotification('info', 'Add User', 'New user creation functionality would be implemented here');
        // Implementation for adding new users would go here
    }

    showBulkActions() {
        this.app.showNotification('info', 'Bulk Actions', 'Bulk user management functionality would be implemented here');
        // Implementation for bulk actions would go here
    }

    // Content Management Methods
    manageContent() {
        this.app.showNotification('info', 'Content Management', 'Content editing functionality would be implemented here');
        // Implementation for content management would go here
    }

    manageAssessments() {
        this.app.showNotification('info', 'Assessment Management', 'Assessment editing functionality would be implemented here');
        // Implementation for assessment management would go here
    }

    manageResources() {
        this.app.showNotification('info', 'Resource Management', 'Resource management functionality would be implemented here');
        // Implementation for resource management would go here
    }
}

// Initialize admin system
document.addEventListener('DOMContentLoaded', () => {
    if (window.app) {
        window.adminSystem = new AdminSystem(window.app);
    }
});