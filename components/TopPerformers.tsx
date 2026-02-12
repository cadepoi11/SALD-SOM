
import React from 'react';
import { TrendingUp, Star } from 'lucide-react';
import { TopPerformer } from '../types';

const TopPerformers: React.FC = () => {
  const performers: TopPerformer[] = [
    { id: '1', name: 'Ahmed Hassan', position: 'Forward', team: 'U19', rating: 9.2, stats: '15G / 8A', initials: 'AH' },
    { id: '2', name: 'Mohamed Ali', position: 'Midfielder', team: 'U17', rating: 8.8, stats: '7G / 12A', initials: 'MA' },
    { id: '3', name: 'Omar Ibrahim', position: 'Defender', team: 'U19', rating: 8.5, stats: '2G / 5A', initials: 'OI' },
    { id: '4', name: 'Yusuf Ahmed', position: 'Goalkeeper', team: 'U15', rating: 8.3, stats: '0G / 1A', initials: 'YA' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col h-full overflow-hidden">
      <div className="p-6 border-b border-slate-50 flex items-center justify-between">
        <h4 className="font-bold text-slate-800">Top Performers</h4>
        <TrendingUp className="text-green-500" size={18} />
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
        <div className="space-y-6">
          {performers.map((player, index) => (
            <div key={player.id} className="flex items-center gap-4 group">
              <span className="text-sm font-bold text-slate-400 w-4">{index + 1}</span>
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-bold shrink-0">
                {player.initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 truncate group-hover:text-green-600 transition-colors">
                  {player.name}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {player.position} • {player.team}
                </p>
              </div>
              <div className="text-right shrink-0">
                <div className="flex items-center gap-1 justify-end text-sm font-bold text-slate-900">
                  <Star className="text-yellow-400 fill-yellow-400" size={14} />
                  {player.rating}
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">
                  {player.stats}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPerformers;
