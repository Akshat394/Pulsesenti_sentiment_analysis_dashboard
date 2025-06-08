import React from 'react';
import { MessageCircle, Heart, Repeat, MapPin } from 'lucide-react';
import { Tweet } from '../types';

interface LiveTweetFeedProps {
  tweets: Tweet[];
}

export function LiveTweetFeed({ tweets }: LiveTweetFeedProps) {
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'border-emerald-400 bg-emerald-400/5';
      case 'negative': return 'border-red-400 bg-red-400/5';
      default: return 'border-slate-600 bg-slate-700/20';
    }
  };

  const getSentimentBadge = (sentiment: string, confidence: number) => {
    const colors = {
      positive: 'bg-emerald-400/20 text-emerald-400',
      negative: 'bg-red-400/20 text-red-400',
      neutral: 'bg-slate-400/20 text-slate-400'
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[sentiment as keyof typeof colors]}`}>
        {sentiment} ({Math.round(confidence * 100)}%)
      </span>
    );
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
      <div className="flex items-center space-x-2 mb-6">
        <MessageCircle className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-white">Live Tweet Feed</h3>
        <div className="flex items-center space-x-2 ml-auto">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-emerald-400">Live</span>
        </div>
      </div>
      
      <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
        {tweets.slice(0, 10).map((tweet) => (
          <div 
            key={tweet.id} 
            className={`p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] ${getSentimentColor(tweet.sentiment)}`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-white">@{tweet.author}</span>
                {tweet.location && (
                  <div className="flex items-center space-x-1 text-slate-400 text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>{tweet.location}</span>
                  </div>
                )}
              </div>
              <span className="text-slate-400 text-sm">
                {tweet.timestamp.toLocaleTimeString()}
              </span>
            </div>
            
            <p className="text-slate-200 mb-3 leading-relaxed">{tweet.text}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-slate-400 text-sm">
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{tweet.likeCount}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Repeat className="w-4 h-4" />
                  <span>{tweet.retweetCount}</span>
                </div>
              </div>
              
              {getSentimentBadge(tweet.sentiment, tweet.confidence)}
            </div>
            
            {tweet.hashtags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {tweet.hashtags.map((tag, index) => (
                  <span key={index} className="text-blue-400 text-sm hover:text-blue-300 cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}