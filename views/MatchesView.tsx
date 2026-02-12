
import React from 'react';
import { Trophy, Calendar, MapPin, Search, ChevronRight } from 'lucide-react';

const MatchesView: React.FC = () => {
  const upcoming = [
    { team: 'Academy U19', opponent: 'City FC U19', date: 'Feb 12', time: '14:00', venue: 'Main Stadium', type: 'League' },
    { team: 'Academy U17', opponent: 'United Youth', date: 'Feb 14', time: '11:00', venue: 'Pitch A', type: 'Cup' },
  ];

  const results = [
    { team: 'Academy U15', opponent: 'Metro FC', score: '3-1', date: 'Feb 08', result: 'W', color: 'bg-green-500' },
    { team: 'Academy U19', opponent: 'Rangers Youth', score: '1-1', date: 'Feb 05', result: 'D', color: 'bg-amber-500' },
    { team: 'Academy U17', opponent: 'Elite Pro', score: '0-2', date: 'Feb 03', result: 'L', color: 'bg-rose-500' },
  ];

  return (
    <div className="space-y-8 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Matches</h1>
          <p className="text-slate-500">Fixtures, results, and team standings.</p>
        </div>
        <button className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold hover:bg-slate-800 transition-all">
          New Fixture
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Fixtures */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Calendar className="text-green-500" size={20} /> Upcoming Fixtures
            </h2>
          </div>
          <div className="space-y-4">
            {upcoming.map((match, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{match.type}</span>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{match.date} • {match.time}</span>
                </div>
                <div className="flex items-center justify-center gap-8 text-center">
                  <div className="flex-1 space-y-2">
                    <div className="w-16 h-16 bg-slate-50 rounded-full mx-auto flex items-center justify-center border-2 border-slate-100">
                      <Trophy size={24} className="text-slate-300" />
                    </div>
                    <p className="text-sm font-bold text-slate-900">{match.team}</p>
                  </div>
                  <div className="text-2xl font-black text-slate-300">VS</div>
                  <div className="flex-1 space-y-2">
                    <div className="w-16 h-16 bg-slate-50 rounded-full mx-auto flex items-center justify-center border-2 border-slate-100">
                      <Trophy size={24} className="text-slate-300" />
                    </div>
                    <p className="text-sm font-bold text-slate-900">{match.opponent}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {match.venue}</span>
                  <button className="text-green-600 font-bold hover:underline">Match Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Results */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Trophy className="text-amber-500" size={20} /> Recent Results
          </h2>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-50">
            {results.map((match, i) => (
              <div key={i} className="p-6 flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl ${match.color} flex items-center justify-center text-white font-black text-sm`}>
                    {match.result}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{match.team} vs {match.opponent}</p>
                    <p className="text-xs text-slate-400">{match.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xl font-black text-slate-900 tracking-widest">{match.score}</span>
                  <ChevronRight size={20} className="text-slate-300 group-hover:text-slate-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
            View All Results
          </button>
        </section>
      </div>
    </div>
  );
};

export default MatchesView;
