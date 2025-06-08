export interface Tweet {
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

export interface SentimentMetrics {
  positive: number;
  negative: number;
  neutral: number;
  total: number;
  averageConfidence: number;
}

export interface TrendingHashtag {
  tag: string;
  count: number;
  sentiment: 'positive' | 'negative' | 'neutral';
  trend: 'up' | 'down' | 'stable';
}

export interface Alert {
  id: string;
  type: 'spike' | 'trend' | 'anomaly' | 'threshold';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: Date;
  acknowledged: boolean;
}

export interface GeographicData {
  country: string;
  sentiment: number;
  tweetCount: number;
  coordinates: [number, number];
}