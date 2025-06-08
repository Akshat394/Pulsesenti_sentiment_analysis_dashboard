import React from 'react';
import { Zap, Database, Cpu, Globe } from 'lucide-react';

interface PerformanceMetricsProps {
  metrics: {
    apiLatency: number;
    throughput: number;
    cpuUsage: number;
    memoryUsage: number;
  };
}

export function PerformanceMetrics({ metrics }: PerformanceMetricsProps) {
  const performanceCards = [
    {
      title: 'API Latency',
      value: `${metrics.apiLatency}ms`,
      target: '< 200ms',
      icon: Zap,
      color: metrics.apiLatency < 200 ? 'text-emerald-400' : 'text-red-400',
      bgColor: metrics.apiLatency < 200 ? 'bg-emerald-400/10' : 'bg-red-400/10'
    },
    {
      title: 'Throughput',
      value: `${metrics.throughput}/s`,
      target: '500 RPS',
      icon: Database,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      title: 'CPU Usage',
      value: `${metrics.cpuUsage}%`,
      target: '< 80%',
      icon: Cpu,
      color: metrics.cpuUsage < 80 ? 'text-emerald-400' : 'text-red-400',
      bgColor: metrics.cpuUsage < 80 ? 'bg-emerald-400/10' : 'bg-red-400/10'
    },
    {
      title: 'Memory',
      value: `${metrics.memoryUsage}%`,
      target: '< 85%',
      icon: Globe,
      color: metrics.memoryUsage < 85 ? 'text-emerald-400' : 'text-red-400',
      bgColor: metrics.memoryUsage < 85 ? 'bg-emerald-400/10' : 'bg-red-400/10'
    }
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
      <h3 className="text-lg font-semibold text-white mb-6">System Performance</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {performanceCards.map((card, index) => (
          <div key={index} className="bg-slate-700/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${card.bgColor}`}>
                <card.icon className={`w-4 h-4 ${card.color}`} />
              </div>
              <span className="text-xs text-slate-400">{card.target}</span>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">{card.title}</p>
              <p className={`text-xl font-bold ${card.color}`}>{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}