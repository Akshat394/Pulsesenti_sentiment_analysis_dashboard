import React from 'react';
import { Hash, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { TrendingHashtag } from '../types';

interface TrendingHashtagsProps {
  hashtags: TrendingHashtag[];
}

export function TrendingHashtags({ hashtags }: TrendingHashtagsProps) {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-400" />;
      default: return <Minus className="w-4 h-4 text-slate-400" />;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-emerald-400';
      case 'negative': return 'text-red-400';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
      <div className="flex items-center space-x-2 mb-6">
        <Hash className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-white">Trending Hashtags</h3>
      </div>
      
      <div className="space-y-4">
        {hashtags.slice(0, 8).map((hashtag, index) => {
          const size = Math.max(12, 20 - (index * 1.5));
          return (
            <div key={hashtag.tag} className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <span 
                  className={`font-bold ${getSentimentColor(hashtag.sentiment)}`}
                  style={{ fontSize: `${size}px` }}
                >
                  {hashtag.tag}
                </span>
                <span className="text-slate-400 text-sm">
                  {hashtag.count.toLocaleString()} mentions
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {getTrendIcon(hashtag.trend)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}