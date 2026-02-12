
import React from 'react';
import { Calendar, Clock, MapPin, Users, Filter, ChevronRight } from 'lucide-react';

const TrainingView: React.FC = () => {
  const sessions = [
    { title: 'Full Squad Tactical', team: 'Academy U19', time: '09:00 AM', duration: '120m', location: 'Pitch A', type: 'Tactical', color: 'bg-indigo-500' },
    { title: 'Conditioning & Gym', team: 'Academy U17', time: '10:30 AM', duration: '90m', location: 'Strength Center', type: 'Fitness', color: 'bg-rose-500' },
    { title: 'Set Piece Practice', team: 'Academy U15', time: '02:00 PM', duration: '60m', location: 'Pitch B', type: 'Technical', color: 'bg-amber-500' },
    { title: 'Goalkeeper Clinic', team: 'All Teams', time: '03:30 PM', duration: '60m', location: 'Training Zone', type: 'Specialized', color: 'bg-emerald-500' },
    { title: 'Match Analysis', team: 'U19 & U17', time: '05:00 PM', duration: '45m', location: 'Media Room', type: 'Theory', color: 'bg-slate-700' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Training Schedule</h1>
          <p className="text-slate-500">Weekly session planner and attendance tracking.</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition-colors">
            <Filter size={20} className="text-slate-500" />
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold transition-all shadow-sm">
            Add Session
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-sm font-bold text-slate-900 border-b-2 border-green-500 pb-1">Today</button>
            <button className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">This Week</button>
            <button className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">Calendar</button>
          </div>
          <span className="text-sm font-bold text-slate-500">Feb 10, 2026</span>
        </div>

        <div className="divide-y divide-slate-50">
          {sessions.map((session, i) => (
            <div key={i} className="p-6 hover:bg-slate-50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group">
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center min-w-[60px]">
                  <span className="text-sm font-bold text-slate-900">{session.time}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">{session.duration}</span>
                </div>
                <div className="w-1 self-stretch rounded-full bg-slate-100 overflow-hidden">
                  <div className={`w-full h-1/2 ${session.color}`} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-green-600 transition-colors">{session.title}</h4>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-800"><Users size={14} /> {session.team}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {session.location}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      session.type === 'Tactical' ? 'bg-indigo-50 text-indigo-600' :
                      session.type === 'Fitness' ? 'bg-rose-50 text-rose-600' :
                      'bg-slate-50 text-slate-600'
                    }`}>{session.type}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 justify-between md:justify-end shrink-0">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(n => (
                    <div key={n} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/p${n}/32/32`} alt="" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">+18</div>
                </div>
                <button className="p-2 text-slate-300 hover:text-slate-600 group-hover:translate-x-1 transition-all">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingView;
