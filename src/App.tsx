import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MetricsGrid } from './components/MetricsGrid';
import { SentimentGauge } from './components/SentimentGauge';
import { TrendingHashtags } from './components/TrendingHashtags';
import { LiveTweetFeed } from './components/LiveTweetFeed';
import { AlertCenter } from './components/AlertCenter';
import { SentimentChart } from './components/SentimentChart';
import { PerformanceMetrics } from './components/PerformanceMetrics';
import { useRealTimeData } from './hooks/useRealTimeData';

function App() {
  const { tweets, metrics, trendingHashtags, alerts, isConnected, acknowledgeAlert } = useRealTimeData();
  
  // Generate historical sentiment data for the chart
  const [chartData, setChartData] = useState<Array<{
    time: string;
    positive: number;
    negative: number;
    neutral: number;
  }>>([]);

  // Mock performance metrics
  const [performanceMetrics, setPerformanceMetrics] = useState({
    apiLatency: 120,
    throughput: 450,
    cpuUsage: 65,
    memoryUsage: 72
  });

  useEffect(() => {
    // Update chart data every 30 seconds
    const updateChart = () => {
      const now = new Date();
      const newDataPoint = {
        time: now.toLocaleTimeString('en-US', { hour12: false }),
        positive: Math.floor(Math.random() * 50) + 30,
        negative: Math.floor(Math.random() * 30) + 10,
        neutral: Math.floor(Math.random() * 40) + 20
      };
      
      setChartData(prev => [...prev.slice(-19), newDataPoint]);
    };

    // Initialize chart with some data
    const initialData = Array.from({ length: 20 }, (_, i) => {
      const time = new Date(Date.now() - (19 - i) * 30000);
      return {
        time: time.toLocaleTimeString('en-US', { hour12: false }),
        positive: Math.floor(Math.random() * 50) + 30,
        negative: Math.floor(Math.random() * 30) + 10,
        neutral: Math.floor(Math.random() * 40) + 20
      };
    });
    setChartData(initialData);

    const chartInterval = setInterval(updateChart, 30000);

    // Update performance metrics
    const perfInterval = setInterval(() => {
      setPerformanceMetrics({
        apiLatency: Math.floor(Math.random() * 100) + 80,
        throughput: Math.floor(Math.random() * 200) + 400,
        cpuUsage: Math.floor(Math.random() * 40) + 50,
        memoryUsage: Math.floor(Math.random() * 30) + 60
      });
    }, 10000);

    return () => {
      clearInterval(chartInterval);
      clearInterval(perfInterval);
    };
  }, []);

  // Calculate overall sentiment for gauge
  const overallSentiment = metrics.total > 0 ? 
    (metrics.positive - metrics.negative) / metrics.total : 0;

  const unacknowledgedAlerts = alerts.filter(a => !a.acknowledged).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header isConnected={isConnected} alertCount={unacknowledgedAlerts} />
      
      <main className="p-6 space-y-6">
        {/* Top Metrics Row */}
        <MetricsGrid metrics={metrics} />
        
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Overall Sentiment</h3>
              <SentimentGauge sentiment={overallSentiment} className="flex justify-center" />
            </div>
            
            <PerformanceMetrics metrics={performanceMetrics} />
          </div>
          
          {/* Middle Column */}
          <div className="space-y-6">
            <TrendingHashtags hashtags={trendingHashtags} />
            <AlertCenter alerts={alerts} onAcknowledge={acknowledgeAlert} />
          </div>
          
          {/* Right Column */}
          <div>
            <LiveTweetFeed tweets={tweets} />
          </div>
        </div>
        
        {/* Bottom Chart */}
        <SentimentChart data={chartData} />
      </main>
    </div>
  );
}

export default App;