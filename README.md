# SentimentAI - Real-time Social Media Sentiment Analysis Dashboard

A production-ready, real-time sentiment analysis dashboard that monitors social media sentiment with beautiful visualizations and intelligent alerting.

![SentimentAI Dashboard](https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

## 🚀 Live Demo

**[View Live Dashboard](https://pulsesenti-realtime-sentiment.netlify.app)**

## ✨ Features

### Real-time Analytics
- **Live Tweet Stream**: Monitor incoming tweets with sentiment classification
- **Sentiment Gauge**: Visual representation of overall sentiment (-1 to +1 scale)
- **Trending Hashtags**: Track viral hashtags with sentiment analysis
- **Historical Charts**: Time-series sentiment visualization with area charts

### Performance Monitoring
- **System Metrics**: API latency, throughput, CPU, and memory usage
- **Alert Center**: Intelligent anomaly detection with severity levels
- **Connection Status**: Real-time WebSocket connection monitoring

### Advanced Visualizations
- **D3.js Sentiment Gauge**: Custom animated gauge with needle indicator
- **Recharts Integration**: Responsive charts with smooth animations
- **Color-coded Sentiment**: Intuitive green/red/gray color scheme
- **Responsive Design**: Mobile-first design with Tailwind CSS

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **D3.js** for custom visualizations
- **Recharts** for charts and graphs
- **Lucide React** for icons
- **Vite** for build tooling

### Data Processing (Simulated)
- Real-time data simulation with WebSocket-like updates
- Sentiment classification with confidence scores
- Trending analysis with momentum tracking
- Alert generation based on anomaly detection

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd sentiment-analysis-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗 Project Structure

```
src/
├── components/           # React components
│   ├── AlertCenter.tsx   # Alert management system
│   ├── Header.tsx        # Navigation header
│   ├── LiveTweetFeed.tsx # Real-time tweet display
│   ├── MetricsGrid.tsx   # Key performance indicators
│   ├── PerformanceMetrics.tsx # System health metrics
│   ├── SentimentChart.tsx     # Historical sentiment chart
│   ├── SentimentGauge.tsx     # D3.js sentiment gauge
│   └── TrendingHashtags.tsx   # Hashtag trends
├── hooks/
│   └── useRealTimeData.ts     # Real-time data management
├── types/
│   └── index.ts               # TypeScript definitions
├── utils/
│   └── mockData.ts            # Data generation utilities
├── App.tsx                    # Main application component
├── main.tsx                   # Application entry point
└── index.css                  # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary**: Modern Blue (#3B82F6) - For primary actions and key elements
- **Secondary**: Emerald Green (#10B981) - For secondary actions and success states
- **Accent**: Purple (#8B5CF6) - For highlights and special elements
- **Background**: Dark gradient from #111827 to #0F172A
- **Text**: 
  - Primary: Light Gray (#F3F4F6)
  - Secondary: Muted Gray (#9CA3AF)
  - Accent: Light Blue (#60A5FA)
- **Borders**: Subtle Gray (#374151)

### Typography
- **Headings**: Clean, modern sans-serif with proper hierarchy
- **Body**: High-contrast text for optimal readability
- **Metrics**: Bold numbers with accent colors
- **Labels**: Muted gray for secondary information

### Components
- **Cards**: Subtle elevation with elegant shadows
- **Buttons**: Clean, modern design with hover effects
- **Sections**: Light background with subtle borders
- **Scrollbars**: Minimalist design with smooth interactions

## 📊 Data Models

### Tweet Interface
```typescript
interface Tweet {
  id: string;
  text: string;
  author: string;
  timestamp: Date;
  sentiment: 'positive' | 'negative' | 'neutral';
  confidence: number;
  hashtags: string[];
  location?: string;
  retweetCount: number;
  likeCount: number;
}
```

### Sentiment Metrics
```typescript
interface SentimentMetrics {
  positive: number;
  negative: number;
  neutral: number;
  total: number;
  averageConfidence: number;
}
```

### Alert System
```typescript
interface Alert {
  id: string;
  type: 'spike' | 'trend' | 'anomaly' | 'threshold';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: Date;
  acknowledged: boolean;
}
```

## 🔧 Configuration

### Environment Variables
```env
# Development
VITE_API_URL=http://localhost:3001
VITE_WS_URL=ws://localhost:3001

# Production
VITE_API_URL=https://api.sentimentai.com
VITE_WS_URL=wss://api.sentimentai.com
```

### Build Configuration
The project uses Vite with the following optimizations:
- Tree shaking for smaller bundles
- Code splitting for better loading
- Asset optimization and compression
- TypeScript compilation with strict mode

## 🚀 Deployment

### Netlify (Current)
The application is deployed on Netlify with automatic builds from the main branch.

```bash
# Build command
npm run build

# Publish directory
dist
```

### Alternative Deployment Options

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### AWS S3 + CloudFront
```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📈 Performance

### Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

### Optimizations
- Lazy loading for non-critical components
- Memoization for expensive calculations
- Efficient re-rendering with React.memo
- Optimized bundle size with tree shaking

## 🧪 Testing

### Unit Tests
```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### E2E Testing
```bash
# Install Playwright
npm install -D @playwright/test

# Run E2E tests
npm run test:e2e
```

## 🔒 Security

### Frontend Security
- XSS protection with React's built-in sanitization
- HTTPS enforcement in production
- Content Security Policy headers
- Secure cookie handling

### Data Privacy
- No persistent storage of sensitive data
- Client-side sentiment analysis simulation
- GDPR-compliant data handling
- Anonymized user interactions

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Conventional commit messages

### Pull Request Guidelines
- Include tests for new features
- Update documentation as needed
- Ensure all checks pass
- Add screenshots for UI changes

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Hugging Face** for sentiment analysis models
- **Recharts** for beautiful chart components
- **D3.js** for custom visualizations
- **Tailwind CSS** for utility-first styling
- **Lucide** for consistent iconography

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Email: support@sentimentai.com
- Documentation: [docs.sentimentai.com](https://docs.sentimentai.com)

---

**Built with ❤️ by the SentimentAI Team**