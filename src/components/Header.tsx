import React from 'react';
import { Activity, Wifi, WifiOff, Bell, Settings, User } from 'lucide-react';

interface HeaderProps {
  isConnected: boolean;
  alertCount: number;
}

export function Header({ isConnected, alertCount }: HeaderProps) {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Activity className="w-8 h-8 text-emerald-400" />
            <h1 className="text-2xl font-bold text-white">
              Sentiment<span className="text-emerald-400">AI</span>
            </h1>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            {isConnected ? (
              <>
                <Wifi className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Live</span>
              </>
            ) : (
              <>
                <WifiOff className="w-4 h-4 text-red-400" />
                <span className="text-red-400">Disconnected</span>
              </>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="w-6 h-6 text-slate-300 hover:text-white cursor-pointer transition-colors" />
            {alertCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {alertCount > 9 ? '9+' : alertCount}
              </span>
            )}
          </div>
          <Settings className="w-6 h-6 text-slate-300 hover:text-white cursor-pointer transition-colors" />
          <User className="w-6 h-6 text-slate-300 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </header>
  );
}