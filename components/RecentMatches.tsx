
import React from 'react';
import { Trophy } from 'lucide-react';
import { Match } from '../types';

const RecentMatches: React.FC = () => {
  const matches: Match[] = [
    { id: '1', teams: 'Academy U15 vs City FC U15', date: 'Feb 8, 2026', score: '3 - 1', status: 'completed', color: 'bg-green-500' },
    { id: '2', teams: 'United Youth vs Academy U17', date: 'Feb 5, 2026', score: '2 - 2', status: 'completed', color: 'bg-yellow-500' },
    { id: '3', teams: 'Academy U19 vs Rangers Academy', date: 'Feb 3, 2026', score: '1 - 3', status: 'completed', color: 'bg-red-500' },
    { id: '4', teams: 'Academy U15 vs Metro Youth', date: 'Feb 1, 2026', score: '4 - 0', status: 'completed', color: 'bg-green-500' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col h-full overflow-hidden">
      <div className="p-6 border-b border-slate-50 flex items-center justify-between">
        <h4 className="font-bold text-slate-800">Recent Matches</h4>
        <Trophy className="text-yellow-500" size={18} />
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {matches.map((match) => (
          <div key={match.id} className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${match.color}`} />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-900">{match.teams}</p>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    📅 {match.date}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-lg font-bold text-slate-900 tracking-wider">
              {match.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentMatches;
