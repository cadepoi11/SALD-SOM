
import React from 'react';
import { UserCheck, Star, Mail, Phone, MoreVertical, Plus } from 'lucide-react';

const CoachesView: React.FC = () => {
  const coaches = [
    { id: 1, name: 'Marcus Sterling', role: 'Head of Academy', spec: 'Tactical Periodization', license: 'UEFA Pro', exp: '15 years' },
    { id: 2, name: 'Sarah Jenkins', role: 'U17 Lead Coach', spec: 'Player Development', license: 'UEFA A', exp: '8 years' },
    { id: 3, name: 'David Beckham', role: 'Technical Specialist', spec: 'Dead Ball / Crossing', license: 'UEFA B', exp: '20 years' },
    { id: 4, name: 'Tim Howard', role: 'GK Coach', spec: 'Shot Stopping', license: 'UEFA A (GK)', exp: '12 years' },
    { id: 5, name: 'Elena Rodriguez', role: 'U13 Lead Coach', spec: 'Futsal / Technical', license: 'UEFA B', exp: '6 years' },
    { id: 6, name: 'Robert Paulson', role: 'Fitness Coach', spec: 'Sports Science', license: 'MSc Fitness', exp: '10 years' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Coaches & Staff</h1>
          <p className="text-slate-500">Manage academy technical staff and roles.</p>
        </div>
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold transition-all">
          <Plus size={20} /> Add Staff
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coaches.map((coach) => (
          <div key={coach.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative group">
            <button className="absolute top-6 right-6 text-slate-300 hover:text-slate-600">
              <MoreVertical size={20} />
            </button>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 overflow-hidden shrink-0">
                <img src={`https://picsum.photos/seed/coach${coach.id}/100/100`} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 truncate">{coach.name}</h3>
                <p className="text-xs font-semibold text-green-600 uppercase tracking-wider">{coach.role}</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">License</span>
                <span className="font-bold text-slate-700 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">{coach.license}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Specialization</span>
                <span className="font-bold text-slate-700">{coach.spec}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Experience</span>
                <span className="font-bold text-slate-700">{coach.exp}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:bg-green-50 hover:text-green-600 transition-colors">
                  <Mail size={18} />
                </button>
                <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:bg-green-50 hover:text-green-600 transition-colors">
                  <Phone size={18} />
                </button>
              </div>
              <button className="text-sm font-bold text-slate-900 hover:text-green-600 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoachesView;
