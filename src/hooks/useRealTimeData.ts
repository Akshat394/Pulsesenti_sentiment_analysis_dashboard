import { useState, useEffect, useCallback } from 'react';
import { Tweet, SentimentMetrics, TrendingHashtag, Alert } from '../types';
import { generateMockTweet, generateTrendingHashtags, generateMockAlert } from '../utils/mockData';

export function useRealTimeData() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [metrics, setMetrics] = useState<SentimentMetrics>({
    positive: 0,
    negative: 0,
    neutral: 0,
    total: 0,
    averageConfidence: 0
  });
  const [trendingHashtags, setTrendingHashtags] = useState<TrendingHashtag[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  const calculateMetrics = useCallback((tweetList: Tweet[]) => {
    const positive = tweetList.filter(t => t.sentiment === 'positive').length;
    const negative = tweetList.filter(t => t.sentiment === 'negative').length;
    const neutral = tweetList.filter(t => t.sentiment === 'neutral').length;
    const total = tweetList.length;
    const averageConfidence = total > 0 
      ? tweetList.reduce((acc, t) => acc + t.confidence, 0) / total 
      : 0;

    return { positive, negative, neutral, total, averageConfidence };
  }, []);

  useEffect(() => {
    // Simulate WebSocket connection
    setIsConnected(true);
    
    // Initialize with some data
    const initialTweets = Array.from({ length: 50 }, () => generateMockTweet());
    setTweets(initialTweets);
    setMetrics(calculateMetrics(initialTweets));
    setTrendingHashtags(generateTrendingHashtags());
    
    // Simulate real-time tweet stream
    const tweetInterval = setInterval(() => {
      const newTweet = generateMockTweet();
      setTweets(prev => {
        const updated = [newTweet, ...prev].slice(0, 100); // Keep last 100 tweets
        setMetrics(calculateMetrics(updated));
        return updated;
      });
    }, 2000);

    // Update trending hashtags every 30 seconds
    const hashtagInterval = setInterval(() => {
      setTrendingHashtags(generateTrendingHashtags());
    }, 30000);

    // Generate random alerts
    const alertInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance every 15 seconds
        const newAlert = generateMockAlert();
        setAlerts(prev => [newAlert, ...prev].slice(0, 20));
      }
    }, 15000);

    return () => {
      clearInterval(tweetInterval);
      clearInterval(hashtagInterval);
      clearInterval(alertInterval);
    };
  }, [calculateMetrics]);

  const acknowledgeAlert = useCallback((alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, acknowledged: true } : alert
    ));
  }, []);

  return {
    tweets,
    metrics,
    trendingHashtags,
    alerts,
    isConnected,
    acknowledgeAlert
  };
}