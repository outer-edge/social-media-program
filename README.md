# Social Media Training Matrix - 12-Week Programme

A comprehensive, responsive web application for managing a 12-week social media training programme covering Claude AI, Canva, Google Analytics, Google Ads, and Meta Ads.

## 🚀 Features

### Core Training Features
- **12-Week Timeline**: Visual progress tracker with detailed weekly content
- **Daily Modules**: 30-45 minute learning sessions with practical exercises
- **Interactive Quizzes**: Assessment system with scoring and progress tracking
- **Resource Library**: Comprehensive collection of guides, templates, and videos
- **Progress Dashboard**: Real-time tracking of completion and performance
- **Certificate Generation**: Professional completion certificate with scoring

### Technical Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Local Storage**: Progress persistence without server dependencies
- **Offline Capable**: Works after initial load without internet connection
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Modern UI**: Clean, professional interface with smooth animations

### Training Content Structure

#### Weeks 1-2: Foundations
- AI fundamentals and Claude basics
- Social media landscape overview
- Digital marketing principles
- Initial assessments

#### Weeks 3-4: Claude AI Mastery
- Prompt engineering for social media
- Content creation workflows
- Brand voice development
- Claude for customer service responses
- **Test**: Create 5 different content types using Claude

#### Weeks 5-6: Canva Design Skills
- Design principles for social media
- Template creation and brand kits
- Video and animation basics
- Batch creation techniques
- **Test**: Create a week's worth of branded social content

#### Weeks 7-8: Google Analytics Deep Dive
- Setting up tracking and goals
- Understanding metrics and KPIs
- Creating custom reports
- Social media attribution
- **Test**: Build and present a monthly performance report

#### Weeks 9-10: Google Ads Platform
- Campaign structure and types
- Keyword research and audience targeting
- Ad copywriting with AI assistance
- Budget management and bidding strategies
- **Test**: Create and optimise a mock campaign

#### Weeks 11-12: Meta Ads Mastery
- Facebook Business Manager setup
- Audience creation and pixel tracking
- Creative best practices
- Campaign optimisation techniques
- **Final Project**: Integrated campaign across all platforms

## 🛠️ Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom styles with Tailwind CSS framework
- **JavaScript (ES6+)**: Modern JavaScript with local storage
- **Font Awesome**: Icon library for UI elements
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox

## 📦 Installation & Deployment

### Option 1: Direct Deployment (Recommended)

1. **Download the files**:
   ```bash
   git clone <repository-url>
   cd social-media-training-matrix
   ```

2. **Deploy to GitHub Pages**:
   - Create a new GitHub repository
   - Upload all files to the repository
   - Go to Settings > Pages
   - Select source branch (usually `main`)
   - Your app will be available at `https://username.github.io/repository-name`

3. **Deploy to Netlify**:
   - Drag and drop the folder to [Netlify](https://netlify.com)
   - Or connect your GitHub repository for automatic deployments

4. **Deploy to Vercel**:
   - Install Vercel CLI: `npm i -g vercel`
   - Run `vercel` in the project directory
   - Follow the prompts

### Option 2: Local Development

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd social-media-training-matrix
   ```

2. **Open in browser**:
   - Double-click `index.html` or
   - Use a local server: `python -m http.server 8000` or `npx serve .`

## 🎯 Usage Guide

### For Trainees

1. **Getting Started**:
   - Open the application in your browser
   - Click "Start Training" to begin
   - Complete the landing page overview

2. **Navigating the Programme**:
   - Use the Timeline tab to view all 12 weeks
   - Click on any week to see detailed content
   - Complete daily modules and take quizzes
   - Track progress in the Dashboard

3. **Using Resources**:
   - Access the Resources tab for guides and templates
   - Filter by type (PDF, Video, Template, Guide)
   - Bookmark important resources for quick access
   - Download materials as needed

4. **Taking Assessments**:
   - Complete module quizzes after each session
   - Take weekly assessments for comprehensive testing
   - View scores and progress in the Dashboard
   - Retake assessments if needed

5. **Earning Your Certificate**:
   - Complete all modules and assessments
   - Achieve minimum 80% pass rate
   - Generate and download your certificate
   - Share your achievement

### For Administrators

1. **Customizing Content**:
   - Edit `script.js` to modify training data
   - Update `trainingData.weeks` for new content
   - Modify `trainingData.resources` for new materials
   - Adjust `trainingData.assessments` for new tests

2. **Tracking Progress**:
   - User progress is stored in browser localStorage
   - Export data using browser developer tools
   - Monitor completion rates and scores
   - Generate reports for multiple users

3. **Adding Features**:
   - Extend the assessment system
   - Add new resource types
   - Implement user authentication
   - Connect to external APIs

## 📊 Assessment System

### Module Quizzes
- 10 questions per module
- Multiple choice format
- Immediate scoring and feedback
- 80% passing threshold

### Weekly Assessments
- Comprehensive testing of weekly content
- Practical assignments and projects
- Peer review system integration
- Detailed scoring breakdown

### Final Certification
- Minimum 80% overall pass rate required
- Certificate generation with QR code
- Shareable digital credential
- Professional completion record

## 🎨 Customization

### Styling
- Modify `styles.css` for custom appearance
- Update Tailwind classes in HTML
- Customize color schemes and themes
- Add brand-specific styling

### Content
- Edit training data in `script.js`
- Add new weeks and modules
- Update resource library
- Modify assessment questions

### Features
- Extend functionality with additional JavaScript
- Add new interactive elements
- Implement advanced analytics
- Connect to external services

## 🔧 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile browsers**: iOS Safari 14+, Chrome Mobile 90+

## 📱 Mobile Responsiveness

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔒 Privacy & Data

- **No server dependencies**: All data stored locally
- **No tracking**: No analytics or user data collection
- **Offline capable**: Works without internet connection
- **Local storage**: Progress saved in browser

## 🚀 Performance

- **Fast loading**: Optimized assets and minimal dependencies
- **Smooth animations**: CSS transitions and transforms
- **Efficient rendering**: Virtual DOM-like updates
- **Minimal bundle size**: No heavy frameworks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code comments
- Test in different browsers

## 🎉 Acknowledgments

- Tailwind CSS for the utility-first framework
- Font Awesome for the icon library
- Modern web standards for accessibility
- Open source community for inspiration

---

**Ready to start your social media mastery journey?** 🚀

Open `index.html` in your browser and begin the 12-week programme today!