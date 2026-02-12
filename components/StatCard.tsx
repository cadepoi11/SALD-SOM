
import React from 'react';
import { StatItem } from '../types';

const StatCard: React.FC<StatItem> = ({ label, value, change, changeType, icon: Icon, color, subtext }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <h3 className="text-3xl font-bold text-slate-900">{value}</h3>
          
          <div className="flex items-center gap-2">
            {change && (
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                changeType === 'increase' ? 'bg-green-100 text-green-700' : 
                changeType === 'decrease' ? 'bg-red-100 text-red-700' : 
                'bg-slate-100 text-slate-700'
              }`}>
                {change}
              </span>
            )}
            {subtext && <span className="text-xs text-slate-400">{subtext}</span>}
          </div>
        </div>
        <div className={`p-3 rounded-lg ${color} text-white`}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
