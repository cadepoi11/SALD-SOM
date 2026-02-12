
import React from 'react';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';
import { TrainingSession } from '../types';

const UpcomingTraining: React.FC = () => {
  const sessions: TrainingSession[] = [
    { id: '1', title: 'Tactical Session', group: 'Academy U15', time: '4:00 PM', location: 'Main Pitch', tag: 'Today', tagColor: 'text-green-600 bg-green-50', status: 'today' },
    { id: '2', title: 'Fitness Training', group: 'Academy U17', time: '5:30 PM', location: 'Training Ground B', tag: 'Today', tagColor: 'text-green-600 bg-green-50', status: 'today' },
    { id: '3', title: 'Match Preparation', group: 'Academy U19', time: '10:00 AM', location: 'Main Stadium', tag: 'Tomorrow', tagColor: 'text-yellow-600 bg-yellow-50', status: 'tomorrow' },
    { id: '4', title: 'Goalkeeping Clinic', group: 'All Teams', time: '3:00 PM', location: 'Training Ground A', tag: 'Feb 11', tagColor: 'text-blue-600 bg-blue-50', status: 'upcoming' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col h-full overflow-hidden">
      <div className="p-6 border-b border-slate-50 flex items-center justify-between">
        <h4 className="font-bold text-slate-800">Upcoming Training</h4>
        <Calendar className="text-green-500" size={18} />
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
        {sessions.map((session) => (
          <div key={session.id} className="p-4 rounded-xl border border-slate-100 hover:border-green-200 hover:shadow-sm transition-all relative">
            {session.tag && (
              <span className={`absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full ${session.tagColor}`}>
                {session.tag}
              </span>
            )}
            <div className="space-y-3">
              <div>
                <h5 className="font-bold text-slate-900">{session.title}</h5>
                <p className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <Users size={12} /> {session.group}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock size={12} /> {session.time}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin size={12} /> {session.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingTraining;
