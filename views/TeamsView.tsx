
import React from 'react';
import { Shield, Users, User, Calendar, Plus } from 'lucide-react';

const TeamsView: React.FC = () => {
  const teams = [
    { name: 'Academy U19', coach: 'Marcus Sterling', players: 24, nextMatch: 'Feb 12 vs City FC', color: 'bg-indigo-500' },
    { name: 'Academy U17', coach: 'Sarah Jenkins', players: 22, nextMatch: 'Feb 14 vs United Youth', color: 'bg-emerald-500' },
    { name: 'Academy U15', coach: 'David Beckham', players: 26, nextMatch: 'Feb 11 vs Metro FC', color: 'bg-orange-500' },
    { name: 'Academy U13', coach: 'Elena Rodriguez', players: 20, nextMatch: 'Feb 18 vs Lions Academy', color: 'bg-rose-500' },
    { name: 'Senior Development', coach: 'Robert Paulson', players: 18, nextMatch: 'Feb 20 vs Rovers', color: 'bg-slate-800' },
    { name: 'Goalkeeping Unit', coach: 'Tim Howard', players: 12, nextMatch: 'N/A', color: 'bg-sky-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Teams</h1>
          <p className="text-slate-500">Overview of all active academy squads.</p>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold transition-all">
          <Plus size={20} /> New Team
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-all group">
            <div className={`h-2 ${team.color}`} />
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">{team.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <User size={14} /> Coach: {team.coach}
                  </div>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg text-slate-400 group-hover:text-green-500 transition-colors">
                  <Shield size={24} />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Players</p>
                  <p className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Users size={16} className="text-slate-400" /> {team.players}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</p>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Active</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
                <Calendar size={14} /> Next: <span className="font-semibold text-slate-800">{team.nextMatch}</span>
              </div>

              <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-lg text-sm font-semibold transition-colors mt-2">
                Manage Squad
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsView;
