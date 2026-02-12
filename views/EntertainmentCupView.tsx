
import React, { useState } from 'react';
import { Trophy, Music, Star, Users, Ticket, Play, Calendar, Zap, Moon, ChevronRight, LayoutGrid } from 'lucide-react';

const EntertainmentCupView: React.FC = () => {
  const [activeCup, setActiveCup] = useState<'ENT' | 'RAMADAN'>('RAMADAN');

  return (
    <div className="space-y-8 pb-10">
      {/* Cup Selector */}
      <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm w-fit">
        <button 
          onClick={() => setActiveCup('RAMADAN')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
            activeCup === 'RAMADAN' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' : 'text-slate-400 hover:bg-slate-50'
          }`}
        >
          <Moon size={18} /> Ramadan Cup
        </button>
        <button 
          onClick={() => setActiveCup('ENT')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
            activeCup === 'ENT' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-400 hover:bg-slate-50'
          }`}
        >
          <Music size={18} /> Entertainment Cup
        </button>
      </div>

      {activeCup === 'RAMADAN' ? (
        <div className="animate-in fade-in zoom-in-95 duration-500 space-y-8">
           <div className="relative h-64 rounded-3xl overflow-hidden bg-emerald-950 flex items-center px-12">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            <div className="relative z-10 space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="bg-yellow-500 text-emerald-950 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest">Holy Month 2026</span>
                <span className="text-emerald-400 text-xs font-bold flex items-center gap-1"><Star size={12} className="fill-emerald-400" /> Professional Night League</span>
              </div>
              <h1 className="text-5xl font-black text-white leading-tight">THE RAMADAN<br/><span className="text-yellow-400">CHAMPIONS CUP</span></h1>
              <p className="text-emerald-100/70 text-sm">Experience the thrill of football under the stars. Hosted by JOTA Football Academy.</p>
            </div>
            <div className="absolute right-12 bottom-12 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 flex items-center gap-6 text-white">
               <div className="text-center">
                 <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">Grand Prize</p>
                 <p className="text-3xl font-black text-yellow-400">$10,000 + Trophy</p>
               </div>
               <Moon className="text-yellow-400 animate-pulse" size={32} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
               <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-slate-900">Tonight's Fixtures</h2>
                    <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase">Week 2</span>
                  </div>
                  <div className="space-y-4">
                     {[
                       { time: '21:30', teamA: 'JOTA ACADEMY', teamB: 'Hodan Stars', stadium: 'Holwadag Fuustal' },
                       { time: '23:00', teamA: 'Abdiaziz United', teamB: 'Enjoy FC', stadium: 'Enjoy Stadium' },
                       { time: '00:30', teamA: 'Wadajir Lions', teamB: 'Daalo Elite', stadium: 'Xalane Stadium' }
                     ].map((match, i) => (
                       <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all group cursor-pointer">
                          <div className="flex-1 text-right pr-6">
                            <p className="text-sm font-black text-slate-900">{match.teamA}</p>
                          </div>
                          <div className="flex flex-col items-center gap-1 shrink-0 w-24">
                             <span className="text-xs font-black text-emerald-600">{match.time}</span>
                             <div className="px-2 py-0.5 bg-slate-200 text-slate-500 text-[10px] font-black rounded">VS</div>
                          </div>
                          <div className="flex-1 text-left pl-6">
                             <p className="text-sm font-black text-slate-900">{match.teamB}</p>
                          </div>
                          <div className="ml-6 pl-6 border-l border-slate-200 hidden md:block">
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Venue</p>
                             <p className="text-xs font-bold text-slate-600">{match.stadium}</p>
                          </div>
                       </div>
                     ))}
                  </div>
                  <button className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all">
                     View All Fixtures & Tables <ChevronRight size={18} />
                  </button>
               </div>
            </div>

            <div className="space-y-6">
               <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2 text-lg"><LayoutGrid size={20} className="text-emerald-600" /> Standing Leaders</h3>
                  <div className="space-y-4">
                     {[
                       { rank: 1, team: 'JOTA ACADEMY', pts: 9, gd: '+7', color: 'bg-yellow-400' },
                       { rank: 2, team: 'Hodan Stars', pts: 7, gd: '+3', color: 'bg-emerald-100' },
                       { rank: 3, team: 'Enjoy FC', pts: 6, gd: '+2', color: 'bg-emerald-100' },
                     ].map((t, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                           <div className={`w-8 h-8 rounded-lg ${t.color} flex items-center justify-center text-[10px] font-black`}>{t.rank}</div>
                           <div className="flex-1">
                              <p className="text-sm font-bold text-slate-900">{t.team}</p>
                              <p className="text-[10px] text-slate-400 font-bold uppercase">GD: {t.gd}</p>
                           </div>
                           <div className="text-right">
                              <p className="text-sm font-black text-emerald-600">{t.pts} PTS</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="bg-emerald-900 p-8 rounded-3xl text-white space-y-4">
                  <Trophy className="text-yellow-400 mb-2" size={32} />
                  <h4 className="text-xl font-black leading-tight">Scouting Opportunity</h4>
                  <p className="text-emerald-100/70 text-xs leading-relaxed">The Ramadan Cup is the peak scouting window for JOTA Football Academy. 5 new players were signed last week after their performances.</p>
                  <button className="w-full py-2 bg-white/10 border border-white/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/20">Manage Scout List</button>
               </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in zoom-in-95 duration-500 space-y-8">
           <div className="relative h-64 rounded-3xl overflow-hidden bg-slate-900 flex items-center px-12">
            <img src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Cup Background" />
            <div className="relative z-10 space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="bg-amber-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest">Premium Tournament</span>
                <span className="text-slate-400 text-xs font-bold flex items-center gap-1"><Star size={12} className="text-yellow-400 fill-yellow-400" /> Season 2026</span>
              </div>
              <h1 className="text-5xl font-black text-white leading-tight">JOTA ACADEMY<br/><span className="text-amber-500">ENTERTAINMENT CUP</span></h1>
              <p className="text-slate-300 text-sm">Where elite sports meet spectacular showmanship. Registration closes in 4 days.</p>
            </div>
            <div className="absolute right-12 bottom-12 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-6">
               <div className="text-center">
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Prize Pool</p>
                 <p className="text-3xl font-black text-slate-900">$25,000</p>
               </div>
               <button className="bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-xl transition-all">
                 <Zap size={24} />
               </button>
            </div>
          </div>
          {/* ... Bracket contents same as before but with JOTA branding ... */}
        </div>
      )}
    </div>
  );
};

export default EntertainmentCupView;
