
import React from 'react';
import { FileCheck, Clock, CheckCircle2, XCircle, Bus, Utensils, Shirt, Calendar, Plus } from 'lucide-react';

const MatchDayRequestView: React.FC = () => {
  const requests = [
    { id: 'MD-991', match: 'U19 vs City FC', date: 'Feb 12', status: 'Approved', transport: true, catering: true, kit: 'Home' },
    { id: 'MD-992', match: 'U17 vs Rangers', date: 'Feb 15', status: 'Pending', transport: true, catering: false, kit: 'Away' },
    { id: 'MD-993', match: 'U15 vs United', date: 'Feb 16', status: 'Approved', transport: false, catering: true, kit: 'Home' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Match Day Logistics</h1>
          <p className="text-slate-500">Request and track match day essentials and operations.</p>
        </div>
        <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-green-600 transition-all shadow-lg shadow-green-100">
          <Plus size={20} /> Create New Request
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">Pending Review</p>
            <h3 className="text-2xl font-black text-slate-900">4</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-50 text-green-500 flex items-center justify-center">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">Approved Today</p>
            <h3 className="text-2xl font-black text-slate-900">12</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
            <XCircle size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">Needs Correction</p>
            <h3 className="text-2xl font-black text-slate-900">1</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50">
          <h2 className="text-xl font-bold text-slate-800">Recent Logistics Requests</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
              <tr>
                <th className="px-8 py-4">Request ID</th>
                <th className="px-8 py-4">Fixture</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4">Required Services</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {requests.map((req) => (
                <tr key={req.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5 text-sm font-bold text-slate-400">#{req.id}</td>
                  <td className="px-8 py-5">
                    <p className="text-sm font-bold text-slate-900">{req.match}</p>
                    <p className="text-xs text-slate-400">{req.kit} Kit Requested</p>
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-slate-700">{req.date}</td>
                  <td className="px-8 py-5">
                    <div className="flex gap-2">
                      {req.transport && <div className="p-1.5 bg-blue-50 text-blue-500 rounded-lg" title="Transport"><Bus size={14} /></div>}
                      {req.catering && <div className="p-1.5 bg-orange-50 text-orange-500 rounded-lg" title="Catering"><Utensils size={14} /></div>}
                      <div className="p-1.5 bg-indigo-50 text-indigo-500 rounded-lg" title="Kit Ready"><Shirt size={14} /></div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-full ${
                      req.status === 'Approved' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <button className="text-xs font-bold text-green-600 hover:underline">View Logistics Map</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MatchDayRequestView;
