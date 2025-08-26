// Quiz System Module for Social Media Training App

class QuizSystem {
    constructor(app) {
        this.app = app;
        this.currentQuiz = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.timeLeft = 0;
        this.timerInterval = null;
        this.quizQuestions = this.initializeQuizQuestions();
    }

    initializeQuizQuestions() {
        return {
            1: [ // Week 1 - AI & Digital Marketing Foundations
                {
                    question: "What is the primary advantage of using AI in social media content creation?",
                    options: [
                        "It completely replaces human creativity",
                        "It enables faster, more consistent content production at scale",
                        "It eliminates the need for strategy",
                        "It automatically guarantees viral content"
                    ],
                    correct: 1,
                    explanation: "AI enhances human creativity by enabling faster, more consistent content production while maintaining quality and brand voice."
                },
                {
                    question: "Which of the following is NOT a key component of the customer journey in social media marketing?",
                    options: [
                        "Awareness",
                        "Consideration", 
                        "Conversion",
                        "Automation"
                    ],
                    correct: 3,
                    explanation: "Automation is a tool used in marketing, not a stage of the customer journey. The key stages are Awareness, Consideration, Conversion, and Retention."
                },
                {
                    question: "What should be the first step when developing a social media strategy?",
                    options: [
                        "Choose which platforms to use",
                        "Create content calendars",
                        "Define clear objectives and target audience",
                        "Set up analytics tracking"
                    ],
                    correct: 2,
                    explanation: "Defining clear objectives and understanding your target audience forms the foundation of any successful social media strategy."
                },
                {
                    question: "Which metric is most important for measuring brand awareness on social media?",
                    options: [
                        "Click-through rate",
                        "Conversion rate",
                        "Reach and impressions",
                        "Cost per acquisition"
                    ],
                    correct: 2,
                    explanation: "Reach and impressions directly measure how many people have seen your content, making them key metrics for brand awareness."
                },
                {
                    question: "What is the recommended approach for AI-assisted content creation?",
                    options: [
                        "Let AI create everything without human input",
                        "Use AI as a starting point, then refine with human creativity",
                        "Only use AI for technical content",
                        "Avoid AI entirely for authenticity"
                    ],
                    correct: 1,
                    explanation: "The best approach combines AI efficiency with human creativity and strategic thinking for optimal results."
                },
                {
                    question: "Which element is crucial for maintaining brand consistency across social media platforms?",
                    options: [
                        "Using the same content on all platforms",
                        "Posting at the same time everywhere",
                        "Maintaining consistent brand voice and visual identity",
                        "Having the same number of followers on each platform"
                    ],
                    correct: 2,
                    explanation: "Brand voice and visual identity should remain consistent while adapting content format to each platform's unique characteristics."
                },
                {
                    question: "What is the primary purpose of social media analytics?",
                    options: [
                        "To increase follower count",
                        "To measure performance and optimize strategy",
                        "To compete with other brands",
                        "To automate content creation"
                    ],
                    correct: 1,
                    explanation: "Analytics provide insights into what's working and what isn't, enabling data-driven strategy optimization."
                },
                {
                    question: "Which type of content typically generates the highest engagement rates?",
                    options: [
                        "Promotional posts",
                        "User-generated content and interactive posts",
                        "Company announcements",
                        "Industry news shares"
                    ],
                    correct: 1,
                    explanation: "User-generated content and interactive posts (polls, questions, etc.) typically generate higher engagement as they encourage participation."
                },
                {
                    question: "What is the recommended ratio of promotional to non-promotional content on social media?",
                    options: [
                        "80% promotional, 20% non-promotional",
                        "50% promotional, 50% non-promotional",
                        "20% promotional, 80% non-promotional",
                        "100% promotional"
                    ],
                    correct: 2,
                    explanation: "The 80/20 rule suggests 80% valuable, educational, or entertaining content and 20% promotional content for best engagement."
                },
                {
                    question: "Which is the most important factor when choosing social media platforms for a business?",
                    options: [
                        "The platform with the most users",
                        "Where your target audience is most active",
                        "The newest platform available",
                        "The platform with the lowest advertising costs"
                    ],
                    correct: 1,
                    explanation: "Success depends on being where your target audience spends their time, not necessarily where there are the most total users."
                }
            ],
            4: [ // Week 4 - Claude AI Mastery Test
                {
                    question: "What is the most effective way to improve Claude AI's response quality for social media content?",
                    options: [
                        "Use shorter prompts",
                        "Provide detailed context, examples, and specific requirements",
                        "Ask for multiple options without guidance",
                        "Use technical jargon"
                    ],
                    correct: 1,
                    explanation: "Detailed, contextual prompts with specific requirements and examples help Claude understand exactly what you need."
                },
                {
                    question: "When creating prompts for brand voice consistency, what should you include?",
                    options: [
                        "Only the topic to write about",
                        "Brand personality traits, tone examples, and target audience details",
                        "Just the word count requirement",
                        "Previous successful posts only"
                    ],
                    correct: 1,
                    explanation: "Brand voice prompts should include personality traits, tone examples, target audience, and specific guidelines for consistency."
                },
                {
                    question: "Which prompt engineering technique is most effective for generating multiple content variations?",
                    options: [
                        "Asking for one perfect version",
                        "Using iterative refinement with specific variations requested",
                        "Repeating the same prompt multiple times",
                        "Using very general instructions"
                    ],
                    correct: 1,
                    explanation: "Iterative refinement allows you to build on good responses and request specific variations for different contexts."
                },
                {
                    question: "How should you structure a prompt for customer service response templates?",
                    options: [
                        "Just describe the complaint",
                        "Include scenario, brand voice, solution approach, and desired outcome",
                        "Only provide the customer's message",
                        "Ask for a generic response"
                    ],
                    correct: 1,
                    explanation: "Comprehensive prompts for customer service should include all context needed for appropriate, on-brand responses."
                },
                {
                    question: "What's the best practice for using Claude AI in content workflow automation?",
                    options: [
                        "Fully automate without human review",
                        "Use AI for ideation and first drafts, then human review and refinement",
                        "Only use AI for final editing",
                        "Replace all human involvement"
                    ],
                    correct: 1,
                    explanation: "The most effective workflow combines AI efficiency with human strategic thinking and quality control."
                },
                {
                    question: "When prompting Claude for social media captions, what elements should you specify?",
                    options: [
                        "Just the image description",
                        "Platform, audience, tone, call-to-action, and hashtag strategy",
                        "Only the character limit",
                        "Just the main message"
                    ],
                    correct: 1,
                    explanation: "Effective caption prompts need platform specifications, audience context, tone guidance, and strategic elements."
                },
                {
                    question: "How can you use Claude AI most effectively for content personalization?",
                    options: [
                        "Create one version for everyone",
                        "Provide audience segments with specific characteristics and preferences",
                        "Use demographic data only",
                        "Avoid personalization entirely"
                    ],
                    correct: 1,
                    explanation: "Effective personalization requires detailed audience segment information including preferences, pain points, and communication styles."
                },
                {
                    question: "What's the most important consideration when using AI for crisis communication?",
                    options: [
                        "Speed of response",
                        "Ensuring human oversight and empathy in messaging",
                        "Using standard templates",
                        "Avoiding any AI assistance"
                    ],
                    correct: 1,
                    explanation: "Crisis communication requires human empathy, judgment, and oversight, with AI serving as a support tool for drafting."
                },
                {
                    question: "Which approach works best for training Claude on your brand's specific voice?",
                    options: [
                        "Providing random examples",
                        "Systematic examples with clear voice characteristics and guidelines",
                        "Only using competitor examples",
                        "Avoiding specific examples"
                    ],
                    correct: 1,
                    explanation: "Systematic training with clear examples and explicit voice characteristics helps Claude understand and replicate your brand voice."
                },
                {
                    question: "How should you validate AI-generated content before publishing?",
                    options: [
                        "Publish immediately if it looks good",
                        "Check for accuracy, brand alignment, legal compliance, and audience appropriateness",
                        "Only check for grammar",
                        "Trust the AI completely"
                    ],
                    correct: 1,
                    explanation: "Comprehensive validation ensures content meets quality standards, brand guidelines, and regulatory requirements."
                },
                {
                    question: "What's the most effective way to use Claude for content calendar planning?",
                    options: [
                        "Ask for random post ideas",
                        "Provide strategic context, campaigns, events, and audience insights",
                        "Only focus on holidays",
                        "Generate content without strategy"
                    ],
                    correct: 1,
                    explanation: "Strategic content planning requires comprehensive context about business goals, audience needs, and marketing campaigns."
                },
                {
                    question: "Which is the best practice for iterating on AI-generated content?",
                    options: [
                        "Accept the first version",
                        "Provide specific feedback and refinement requests",
                        "Start over completely each time",
                        "Make random changes"
                    ],
                    correct: 1,
                    explanation: "Iterative improvement with specific feedback helps refine content to meet exact requirements."
                },
                {
                    question: "How can Claude AI best support A/B testing for social media content?",
                    options: [
                        "Create identical content versions",
                        "Generate variations with specific differences in headlines, CTAs, or approaches",
                        "Focus only on visual changes",
                        "Avoid testing entirely"
                    ],
                    correct: 1,
                    explanation: "AI can efficiently generate strategic variations for testing different approaches while maintaining consistency in other elements."
                },
                {
                    question: "What's the key to maintaining authenticity when using AI for social media?",
                    options: [
                        "Never mention using AI",
                        "Ensure human insight, brand values, and genuine personality shine through",
                        "Only use AI for scheduling",
                        "Copy competitor content"
                    ],
                    correct: 1,
                    explanation: "Authenticity comes from genuine brand personality and human insight, with AI serving as a tool to express these more efficiently."
                },
                {
                    question: "Which metric is most important for evaluating AI content performance?",
                    options: [
                        "How quickly it was created",
                        "Engagement rates, conversion metrics, and brand sentiment",
                        "Word count only",
                        "Cost savings"
                    ],
                    correct: 1,
                    explanation: "Content success should be measured by audience engagement, business impact, and brand perception, not just efficiency."
                }
            ]
            // Additional quiz questions for other weeks would be added here
        };
    }

    startQuiz(assessmentId) {
        const assessment = this.app.trainingData.assessments.find(a => a.id === assessmentId);
        if (!assessment) return;

        // Check if quiz is available
        if (assessment.week > this.app.currentUser.currentWeek) {
            this.app.showNotification('warning', 'Quiz Not Available', 'Complete previous weeks to unlock this assessment.');
            return;
        }

        this.currentQuiz = assessment;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.timeLeft = assessment.timeLimit * 60; // Convert to seconds

        this.renderQuizInterface();
        this.startTimer();
    }

    renderQuizInterface() {
        const container = document.getElementById('page-assessments');
        const questions = this.quizQuestions[this.currentQuiz.id] || [];
        
        container.innerHTML = `
            <div class="max-w-4xl mx-auto">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <!-- Quiz Header -->
                    <div class="flex items-center justify-between mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                        <div>
                            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">${this.currentQuiz.title}</h1>
                            <p class="text-gray-600 dark:text-gray-400">Question ${this.currentQuestionIndex + 1} of ${questions.length}</p>
                        </div>
                        <div class="text-right">
                            <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400" id="timer">
                                ${this.formatTime(this.timeLeft)}
                            </div>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Time Remaining</p>
                        </div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="mb-8">
                        <div class="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                            <span>Progress</span>
                            <span>${Math.round(((this.currentQuestionIndex + 1) / questions.length) * 100)}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${((this.currentQuestionIndex + 1) / questions.length) * 100}%"></div>
                        </div>
                    </div>

                    <!-- Question -->
                    <div id="quiz-question-container">
                        ${this.renderQuestion(questions[this.currentQuestionIndex], this.currentQuestionIndex)}
                    </div>

                    <!-- Navigation -->
                    <div class="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <button onclick="quizSystem.previousQuestion()" 
                                class="btn-secondary ${this.currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}"
                                ${this.currentQuestionIndex === 0 ? 'disabled' : ''}>
                            <i class="fas fa-arrow-left mr-2"></i>Previous
                        </button>
                        
                        <button onclick="quizSystem.nextQuestion()" 
                                class="btn-primary" id="next-button">
                            ${this.currentQuestionIndex === questions.length - 1 ? 'Submit Quiz' : 'Next'}
                            <i class="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    renderQuestion(question, index) {
        if (!question) return '<p>Question not available</p>';

        return `
            <div class="mb-6">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">${question.question}</h2>
                <div class="space-y-3">
                    ${question.options.map((option, optionIndex) => `
                        <div class="quiz-option ${this.userAnswers[index] === optionIndex ? 'selected' : ''}" 
                             onclick="quizSystem.selectAnswer(${index}, ${optionIndex})">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center mr-4 ${this.userAnswers[index] === optionIndex ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30' : ''}">
                                    ${this.userAnswers[index] === optionIndex ? '<div class="w-3 h-3 rounded-full bg-indigo-500"></div>' : ''}
                                </div>
                                <span class="text-gray-900 dark:text-white">${option}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    selectAnswer(questionIndex, answerIndex) {
        this.userAnswers[questionIndex] = answerIndex;
        
        // Update the visual selection
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((option, index) => {
            option.classList.remove('selected');
            if (index === answerIndex) {
                option.classList.add('selected');
            }
        });

        // Enable next button
        document.getElementById('next-button').disabled = false;
    }

    nextQuestion() {
        const questions = this.quizQuestions[this.currentQuiz.id] || [];
        
        if (this.currentQuestionIndex < questions.length - 1) {
            this.currentQuestionIndex++;
            this.updateQuestionDisplay();
        } else {
            this.submitQuiz();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.updateQuestionDisplay();
        }
    }

    updateQuestionDisplay() {
        const questions = this.quizQuestions[this.currentQuiz.id] || [];
        const questionContainer = document.getElementById('quiz-question-container');
        questionContainer.innerHTML = this.renderQuestion(questions[this.currentQuestionIndex], this.currentQuestionIndex);
        
        // Update progress
        const progressBar = document.querySelector('.progress-fill');
        progressBar.style.width = `${((this.currentQuestionIndex + 1) / questions.length) * 100}%`;
        
        // Update question counter
        document.querySelector('.text-gray-600.dark\\:text-gray-400').textContent = 
            `Question ${this.currentQuestionIndex + 1} of ${questions.length}`;
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            const timerElement = document.getElementById('timer');
            if (timerElement) {
                timerElement.textContent = this.formatTime(this.timeLeft);
                
                // Warning when time is low
                if (this.timeLeft <= 300) { // 5 minutes
                    timerElement.classList.add('text-red-600', 'dark:text-red-400');
                }
                
                if (this.timeLeft <= 0) {
                    this.submitQuiz();
                }
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    submitQuiz() {
        this.stopTimer();
        
        const questions = this.quizQuestions[this.currentQuiz.id] || [];
        let score = 0;
        
        // Calculate score
        questions.forEach((question, index) => {
            if (this.userAnswers[index] === question.correct) {
                score++;
            }
        });
        
        const percentage = Math.round((score / questions.length) * 100);
        
        // Save score
        this.app.currentUser.assessmentScores[this.currentQuiz.id] = percentage;
        this.app.saveUserData();
        
        // Show results
        this.showQuizResults(percentage, score, questions.length);
    }

    showQuizResults(percentage, correctAnswers, totalQuestions) {
        const passed = percentage >= this.currentQuiz.passingScore;
        const questions = this.quizQuestions[this.currentQuiz.id] || [];
        
        const container = document.getElementById('page-assessments');
        container.innerHTML = `
            <div class="max-w-4xl mx-auto">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                    <div class="mb-6">
                        <div class="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${passed ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}">
                            <i class="fas ${passed ? 'fa-check' : 'fa-times'} text-4xl ${passed ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}"></i>
                        </div>
                        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            ${passed ? 'Congratulations!' : 'Keep Learning!'}
                        </h1>
                        <p class="text-xl text-gray-600 dark:text-gray-400">
                            You scored ${percentage}% (${correctAnswers}/${totalQuestions} correct)
                        </p>
                    </div>

                    <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div>
                                <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${percentage}%</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">Final Score</div>
                            </div>
                            <div>
                                <div class="text-2xl font-bold text-gray-900 dark:text-white">${correctAnswers}/${totalQuestions}</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">Correct Answers</div>
                            </div>
                            <div>
                                <div class="text-2xl font-bold ${passed ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">
                                    ${passed ? 'PASSED' : 'FAILED'}
                                </div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">Required: ${this.currentQuiz.passingScore}%</div>
                            </div>
                        </div>
                    </div>

                    <div class="text-left mb-6">
                        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Review Your Answers</h2>
                        <div class="space-y-4">
                            ${questions.map((question, index) => this.renderQuestionReview(question, index)).join('')}
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onclick="app.showPage('assessments')" class="btn-secondary">
                            Back to Assessments
                        </button>
                        ${!passed ? `
                            <button onclick="quizSystem.startQuiz(${this.currentQuiz.id})" class="btn-primary">
                                Retake Quiz
                            </button>
                        ` : ''}
                        <button onclick="app.showPage('progress')" class="btn-primary">
                            View Progress
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    renderQuestionReview(question, index) {
        const userAnswer = this.userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        return `
            <div class="bg-white dark:bg-gray-800 border ${isCorrect ? 'border-green-200 dark:border-green-800' : 'border-red-200 dark:border-red-800'} rounded-lg p-4">
                <div class="flex items-start justify-between mb-2">
                    <h3 class="font-medium text-gray-900 dark:text-white pr-4">
                        ${index + 1}. ${question.question}
                    </h3>
                    <span class="flex-shrink-0 badge ${isCorrect ? 'badge-success' : 'badge-error'}">
                        ${isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                </div>
                
                <div class="text-sm space-y-2">
                    <div class="flex items-center">
                        <span class="text-gray-600 dark:text-gray-400 mr-2">Your answer:</span>
                        <span class="${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">
                            ${userAnswer !== undefined ? question.options[userAnswer] : 'Not answered'}
                        </span>
                    </div>
                    
                    ${!isCorrect ? `
                        <div class="flex items-center">
                            <span class="text-gray-600 dark:text-gray-400 mr-2">Correct answer:</span>
                            <span class="text-green-600 dark:text-green-400">
                                ${question.options[question.correct]}
                            </span>
                        </div>
                    ` : ''}
                    
                    <div class="mt-2 p-3 bg-blue-50 dark:bg-blue-900/30 rounded border-l-4 border-blue-400">
                        <span class="text-blue-800 dark:text-blue-200 text-sm">
                            <strong>Explanation:</strong> ${question.explanation}
                        </span>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize quiz system when app is ready
document.addEventListener('DOMContentLoaded', () => {
    if (window.app) {
        window.quizSystem = new QuizSystem(window.app);
        
        // Override the app's startAssessment method
        window.app.startAssessment = (assessmentId) => {
            window.quizSystem.startQuiz(assessmentId);
        };
    }
});