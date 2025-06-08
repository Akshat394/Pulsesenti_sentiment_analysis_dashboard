# GitHub Repository Setup Guide

## Option 1: Using GitHub CLI (Recommended)

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Real-time sentiment analysis dashboard"

# Create GitHub repository and push
gh repo create sentiment-analysis-dashboard --public --push --source=.
```

## Option 2: Using Git + GitHub Web Interface

### Step 1: Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `sentiment-analysis-dashboard`
3. Description: `Real-time social media sentiment analysis dashboard with React, D3.js, and Tailwind CSS`
4. Make it Public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Push Local Code
```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Real-time sentiment analysis dashboard"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/sentiment-analysis-dashboard.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Option 3: Import from Existing Code

1. Go to https://github.com/new/import
2. Enter the URL of your current repository or upload files
3. Follow the import wizard

## Repository Settings Recommendations

### Branch Protection
```bash
# After pushing, set up branch protection
gh api repos/:owner/:repo/branches/main/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":[]}' \
  --field enforce_admins=true \
  --field required_pull_request_reviews='{"required_approving_review_count":1}' \
  --field restrictions=null
```

### GitHub Pages Setup
1. Go to repository Settings > Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: /dist (after building)

### Environment Variables for GitHub Actions
If you plan to use CI/CD, add these secrets in Settings > Secrets:
- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`

## Recommended Repository Structure

```
sentiment-analysis-dashboard/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── src/
├── public/
├── dist/
├── README.md
├── package.json
├── .gitignore
└── LICENSE
```

## Next Steps After GitHub Setup

1. **Enable GitHub Pages** for automatic deployment
2. **Set up GitHub Actions** for CI/CD
3. **Add issue templates** for bug reports and feature requests
4. **Create contributing guidelines**
5. **Add code of conduct**
6. **Set up automated security scanning**