import React from 'react';
import { TrendingUp, TrendingDown, Activity, Target } from 'lucide-react';
import { SentimentMetrics } from '../types';

interface MetricsGridProps {
  metrics: SentimentMetrics;
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  const sentimentRatio = metrics.total > 0 ? 
    (metrics.positive - metrics.negative) / metrics.total : 0;

  const cards = [
    {
      title: 'Total Tweets',
      value: metrics.total.toLocaleString(),
      icon: Activity,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      title: 'Positive',
      value: metrics.positive.toLocaleString(),
      percentage: metrics.total > 0 ? ((metrics.positive / metrics.total) * 100).toFixed(1) + '%' : '0%',
      icon: TrendingUp,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10'
    },
    {
      title: 'Negative',
      value: metrics.negative.toLocaleString(),
      percentage: metrics.total > 0 ? ((metrics.negative / metrics.total) * 100).toFixed(1) + '%' : '0%',
      icon: TrendingDown,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    },
    {
      title: 'Confidence',
      value: (metrics.averageConfidence * 100).toFixed(1) + '%',
      icon: Target,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${card.bgColor}`}>
              <card.icon className={`w-6 h-6 ${card.color}`} />
            </div>
            {card.percentage && (
              <span className={`text-sm font-medium ${card.color}`}>
                {card.percentage}
              </span>
            )}
          </div>
          <div>
            <p className="text-slate-400 text-sm font-medium mb-1">{card.title}</p>
            <p className="text-2xl font-bold text-white">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}