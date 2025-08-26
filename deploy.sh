#!/bin/bash

# Social Media Training Matrix - Deployment Script
# This script helps deploy the application to various platforms

echo "🚀 Social Media Training Matrix - Deployment Helper"
echo "=================================================="

# Check if files exist
if [ ! -f "index.html" ] || [ ! -f "script.js" ] || [ ! -f "styles.css" ]; then
    echo "❌ Error: Required files not found. Please run this script from the project directory."
    exit 1
fi

echo "✅ All required files found!"

# Function to deploy to GitHub Pages
deploy_github_pages() {
    echo "📦 Deploying to GitHub Pages..."
    echo "1. Create a new GitHub repository"
    echo "2. Upload all files to the repository"
    echo "3. Go to Settings > Pages"
    echo "4. Select source branch (usually 'main')"
    echo "5. Your app will be available at https://username.github.io/repository-name"
    echo ""
    echo "💡 Tip: You can also use GitHub CLI:"
    echo "   gh repo create social-media-training-matrix --public"
    echo "   git add . && git commit -m 'Initial commit' && git push"
}

# Function to deploy to Netlify
deploy_netlify() {
    echo "📦 Deploying to Netlify..."
    echo "1. Go to https://netlify.com"
    echo "2. Drag and drop this folder to the deploy area"
    echo "3. Or connect your GitHub repository for automatic deployments"
    echo ""
    echo "💡 Tip: You can also use Netlify CLI:"
    echo "   npm install -g netlify-cli"
    echo "   netlify deploy --prod --dir=."
}

# Function to deploy to Vercel
deploy_vercel() {
    echo "📦 Deploying to Vercel..."
    if command -v vercel &> /dev/null; then
        echo "Vercel CLI found. Deploying..."
        vercel --prod
    else
        echo "1. Install Vercel CLI: npm install -g vercel"
        echo "2. Run: vercel"
        echo "3. Follow the prompts"
        echo ""
        echo "💡 Tip: You can also deploy via Vercel dashboard by connecting your GitHub repo"
    fi
}

# Function to run locally
run_local() {
    echo "🏃 Running locally..."
    if command -v python3 &> /dev/null; then
        echo "Starting Python server..."
        python3 -m http.server 8000
    elif command -v python &> /dev/null; then
        echo "Starting Python server..."
        python -m http.server 8000
    elif command -v npx &> /dev/null; then
        echo "Starting Node.js server..."
        npx serve .
    else
        echo "❌ No server found. Please install Python or Node.js, or simply open index.html in your browser."
    fi
}

# Main menu
while true; do
    echo ""
    echo "Choose deployment option:"
    echo "1) Deploy to GitHub Pages"
    echo "2) Deploy to Netlify"
    echo "3) Deploy to Vercel"
    echo "4) Run locally"
    echo "5) Exit"
    echo ""
    read -p "Enter your choice (1-5): " choice

    case $choice in
        1)
            deploy_github_pages
            ;;
        2)
            deploy_netlify
            ;;
        3)
            deploy_vercel
            ;;
        4)
            run_local
            break
            ;;
        5)
            echo "👋 Goodbye!"
            exit 0
            ;;
        *)
            echo "❌ Invalid choice. Please enter 1-5."
            ;;
    esac
done