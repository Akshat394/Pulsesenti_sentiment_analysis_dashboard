import { Tweet, TrendingHashtag, Alert, GeographicData } from '../types';

const sampleTweets = [
  "Just launched our new product and the response has been incredible! #startup #innovation",
  "Disappointed with the customer service today. Expected better. #customerservice",
  "Beautiful sunset today, feeling grateful for life's simple pleasures 🌅",
  "Market volatility is concerning investors worldwide #finance #economy",
  "Amazing breakthrough in renewable energy technology! The future looks bright ⚡",
  "Traffic is terrible today, infrastructure needs major improvements",
  "Loving the new update to this app, so much smoother now! #tech",
  "Climate change effects are becoming more visible every day 🌍",
  "Just finished an incredible book, highly recommend it to everyone!",
  "Healthcare system needs reform, too many people suffering needlessly"
];

const hashtags = [
  '#AI', '#tech', '#startup', '#climate', '#finance', '#health', 
  '#innovation', '#sustainability', '#bitcoin', '#NFT', '#metaverse',
  '#blockchain', '#cybersecurity', '#cloudcomputing', '#fintech'
];

const locations = [
  'New York', 'London', 'Tokyo', 'San Francisco', 'Berlin', 
  'Singapore', 'Sydney', 'Toronto', 'Mumbai', 'São Paulo'
];

const authors = [
  'TechGuru2024', 'CryptoWatcher', 'EcoActivist', 'StartupLife', 
  'DataScientist', 'AIEnthusiast', 'FinanceExpert', 'InnovatorMind',
  'ClimateAdvocate', 'FutureThinker'
];

function getRandomSentiment(): { sentiment: 'positive' | 'negative' | 'neutral', confidence: number } {
  const sentiments: ('positive' | 'negative' | 'neutral')[] = ['positive', 'negative', 'neutral'];
  const weights = [0.4, 0.35, 0.25]; // Slightly positive bias
  
  let random = Math.random();
  let sentiment: 'positive' | 'negative' | 'neutral' = 'neutral';
  
  if (random < weights[0]) {
    sentiment = 'positive';
  } else if (random < weights[0] + weights[1]) {
    sentiment = 'negative';
  } else {
    sentiment = 'neutral';
  }
  
  return {
    sentiment,
    confidence: 0.6 + Math.random() * 0.4 // 60-100% confidence
  };
}

export function generateMockTweet(): Tweet {
  const { sentiment, confidence } = getRandomSentiment();
  const tweetHashtags = hashtags.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1);
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    text: sampleTweets[Math.floor(Math.random() * sampleTweets.length)],
    author: authors[Math.floor(Math.random() * authors.length)],
    timestamp: new Date(),
    sentiment,
    confidence,
    hashtags: tweetHashtags,
    location: Math.random() > 0.3 ? locations[Math.floor(Math.random() * locations.length)] : undefined,
    retweetCount: Math.floor(Math.random() * 1000),
    likeCount: Math.floor(Math.random() * 5000)
  };
}

export function generateTrendingHashtags(): TrendingHashtag[] {
  return hashtags.slice(0, 10).map(tag => ({
    tag,
    count: Math.floor(Math.random() * 10000) + 100,
    sentiment: ['positive', 'negative', 'neutral'][Math.floor(Math.random() * 3)] as any,
    trend: ['up', 'down', 'stable'][Math.floor(Math.random() * 3)] as any
  }));
}

export function generateMockAlert(): Alert {
  const types = ['spike', 'trend', 'anomaly', 'threshold'] as const;
  const severities = ['low', 'medium', 'high', 'critical'] as const;
  const messages = [
    'Unusual spike in negative sentiment detected',
    'Trending hashtag #AI showing 300% increase in mentions',
    'Sentiment threshold breached for financial keywords',
    'Geographic anomaly detected in sentiment patterns',
    'Volume surge detected: 150% above normal levels'
  ];
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    type: types[Math.floor(Math.random() * types.length)],
    severity: severities[Math.floor(Math.random() * severities.length)],
    message: messages[Math.floor(Math.random() * messages.length)],
    timestamp: new Date(),
    acknowledged: Math.random() > 0.7
  };
}

export function generateGeographicData(): GeographicData[] {
  const countries = [
    { name: 'United States', coords: [-95.7129, 37.0902] },
    { name: 'United Kingdom', coords: [-3.4360, 55.3781] },
    { name: 'Germany', coords: [10.4515, 51.1657] },
    { name: 'Japan', coords: [138.2529, 36.2048] },
    { name: 'Australia', coords: [133.7751, -25.2744] },
    { name: 'Brazil', coords: [-51.9253, -14.2350] },
    { name: 'India', coords: [77.1025, 28.7041] },
    { name: 'Canada', coords: [-106.3468, 56.1304] }
  ];
  
  return countries.map(country => ({
    country: country.name,
    sentiment: -1 + Math.random() * 2, // -1 to 1 scale
    tweetCount: Math.floor(Math.random() * 50000) + 1000,
    coordinates: country.coords as [number, number]
  }));
}