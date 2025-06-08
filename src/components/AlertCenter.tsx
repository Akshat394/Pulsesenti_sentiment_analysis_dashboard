import React from 'react';
import { AlertTriangle, CheckCircle, X, Clock } from 'lucide-react';
import { Alert } from '../types';

interface AlertCenterProps {
  alerts: Alert[];
  onAcknowledge: (alertId: string) => void;
}

export function AlertCenter({ alerts, onAcknowledge }: AlertCenterProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-red-500 bg-red-500/10 text-red-400';
      case 'high': return 'border-orange-500 bg-orange-500/10 text-orange-400';
      case 'medium': return 'border-yellow-500 bg-yellow-500/10 text-yellow-400';
      default: return 'border-blue-500 bg-blue-500/10 text-blue-400';
    }
  };

  const getSeverityIcon = (severity: string) => {
    const className = "w-4 h-4";
    switch (severity) {
      case 'critical':
      case 'high':
        return <AlertTriangle className={className} />;
      default:
        return <Clock className={className} />;
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-orange-400" />
          <h3 className="text-lg font-semibold text-white">Alert Center</h3>
        </div>
        <span className="text-sm text-slate-400">
          {alerts.filter(a => !a.acknowledged).length} unacknowledged
        </span>
      </div>
      
      <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
        {alerts.length === 0 ? (
          <div className="text-center py-8">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
            <p className="text-slate-400">No active alerts</p>
          </div>
        ) : (
          alerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`p-4 rounded-lg border transition-all duration-300 ${getSeverityColor(alert.severity)} ${alert.acknowledged ? 'opacity-50' : ''}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  {getSeverityIcon(alert.severity)}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-white capitalize">{alert.type}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-current/20 uppercase tracking-wide">
                        {alert.severity}
                      </span>
                    </div>
                    <p className="text-slate-200 text-sm leading-relaxed">{alert.message}</p>
                    <p className="text-slate-400 text-xs mt-2">
                      {alert.timestamp.toLocaleString()}
                    </p>
                  </div>
                </div>
                
                {!alert.acknowledged && (
                  <button
                    onClick={() => onAcknowledge(alert.id)}
                    className="p-1 hover:bg-slate-700/50 rounded transition-colors"
                  >
                    <X className="w-4 h-4 text-slate-400 hover:text-white" />
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}