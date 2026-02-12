
import React from 'react';
// Added Clock to the lucide-react imports to fix "Cannot find name 'Clock'" error.
import { Stethoscope, Activity, Heart, AlertCircle, Calendar, Plus, ChevronRight, Clock } from 'lucide-react';

const MedicalView: React.FC = () => {
  const cases = [
    { player: 'Omar Ibrahim', injury: 'Grade 2 Hamstring Tear', date: 'Feb 01', recovery: '2-3 weeks', status: 'Rehab Phase', severity: 'Medium', color: 'bg-amber-500' },
    { player: 'Sam Wilson', injury: 'ACL Reconstruction', date: 'Nov 15', recovery: '6 months', status: 'Post-Op', severity: 'High', color: 'bg-rose-500' },
    { player: 'Leo Costa', injury: 'Ankle Sprain', date: 'Feb 08', recovery: '5 days', status: 'Light Training', severity: 'Low', color: 'bg-green-500' },
  ];

  return (
    <div className="space-y-8 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Medical Center</h1>
          <p className="text-slate-500">Injury tracking, physio reports, and medical clearance.</p>
        </div>
        <button className="bg-rose-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-rose-700 transition-all flex items-center gap-2 shadow-lg shadow-rose-200">
          <Plus size={20} /> New Medical Case
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-32">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Available Players</p>
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-black text-slate-900">148</h3>
            <Activity className="text-green-500" size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-32">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">In Rehab</p>
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-black text-slate-900">8</h3>
            <Heart className="text-amber-500" size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-32">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Severe Injuries</p>
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-black text-slate-900">2</h3>
            <AlertCircle className="text-rose-500" size={24} />
          </div>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl text-white flex flex-col justify-between h-32">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Clearance Needed</p>
          <h3 className="text-3xl font-black text-green-400">5</h3>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Stethoscope className="text-green-500" size={20} /> Active Medical Cases
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 opacity-5 ${item.color} rounded-full transition-all group-hover:scale-110`} />
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.player}</h3>
                  <p className="text-xs font-semibold text-rose-600 uppercase tracking-wider">{item.injury}</p>
                </div>
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1"><Calendar size={12} /> Date Injured</span>
                  <span className="font-bold text-slate-700">{item.date}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1"><Clock size={12} /> Recovery ETR</span>
                  <span className="font-bold text-slate-700">{item.recovery}</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-slate-400 bg-slate-50 px-2 py-0.5 rounded">{item.status}</span>
                <button className="text-sm font-bold text-green-600 flex items-center gap-1 group">
                  Full Report <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalView;
