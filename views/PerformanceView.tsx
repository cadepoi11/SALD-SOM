
import React from 'react';
// Added Trophy and Users to the lucide-react imports to fix "Cannot find name" errors.
import { Activity, Target, Zap, Heart, TrendingUp, ChevronRight, Star, Trophy, Users } from 'lucide-react';

const PerformanceView: React.FC = () => {
  const kpis = [
    { label: 'Avg Possession', value: '58.4%', trend: '+2.1%', icon: Target, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Win Ratio', value: '72%', trend: '+5%', icon: Trophy, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Pass Accuracy', value: '84%', trend: '-1.2%', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Avg Attendance', value: '94%', trend: '+0.5%', icon: Users, color: 'text-rose-600', bg: 'bg-rose-50' },
  ];

  return (
    <div className="space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Performance Analytics</h1>
        <p className="text-slate-500">Data-driven insights into academy technical progress.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className={`w-12 h-12 rounded-xl ${kpi.bg} ${kpi.color} flex items-center justify-center`}>
              <kpi.icon size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-black text-slate-900">{kpi.value}</h3>
                <span className={`text-[10px] font-bold ${kpi.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {kpi.trend}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800">Team Development Curve</h2>
            <select className="text-sm border-none bg-slate-50 rounded-lg px-2 py-1 outline-none font-semibold text-slate-600">
              <option>Last 6 Months</option>
              <option>Full Season</option>
            </select>
          </div>
          {/* Simulated Chart */}
          <div className="h-64 flex items-end gap-4 px-4 pt-10">
            {[40, 65, 55, 80, 75, 95].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                <div 
                  className="w-full bg-slate-100 rounded-t-xl group-hover:bg-green-500 transition-all duration-500 relative" 
                  style={{ height: `${h}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] py-1 px-2 rounded font-bold transition-opacity">
                    {h}%
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Month {i+1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 text-white space-y-6 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="bg-green-500 w-10 h-10 rounded-xl flex items-center justify-center">
              <Star size={20} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold">AI Scouting Insights</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Gemini analysis suggests Academy U19 is overperforming in transitional play but lacks depth in defensive recovery.
            </p>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors">
              <span className="text-sm font-semibold">Generate Full Analysis</span>
              <ChevronRight size={18} className="text-slate-500 group-hover:text-green-400" />
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors">
              <span className="text-sm font-semibold">Export Performance PDF</span>
              <ChevronRight size={18} className="text-slate-500 group-hover:text-green-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceView;
