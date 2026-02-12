
import React, { useState } from 'react';
// Import TrendingUp from lucide-react to fix the "Cannot find name 'TrendingUp'" error.
import { Sparkles, Loader2, FileText, CheckCircle2, TrendingUp } from 'lucide-react';
import { generatePerformanceReport } from '../services/gemini';

const ReportsView: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<any>(null);
  const [selectedPlayer, setSelectedPlayer] = useState('Ahmed Hassan');

  const handleGenerate = async () => {
    setLoading(true);
    // Simulated stats for the demo
    const stats = {
      goals: 15,
      assists: 8,
      matches: 22,
      stamina: 'High',
      vision: 'Excellent',
      discipline: 'Good'
    };
    
    const result = await generatePerformanceReport(selectedPlayer, stats);
    setReport(result);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">AI Performance Reports</h1>
        <p className="text-slate-500">Harness Gemini to generate detailed scouting reports and development plans.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Select Player</label>
            <select 
              value={selectedPlayer}
              onChange={(e) => setSelectedPlayer(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
            >
              <option>Ahmed Hassan</option>
              <option>Mohamed Ali</option>
              <option>Omar Ibrahim</option>
              <option>Yusuf Ahmed</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Report Type</label>
            <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500/20 transition-all">
              <option>Full Scouting Report</option>
              <option>Progress Assessment</option>
              <option>Technical Breakdown</option>
            </select>
          </div>
        </div>

        <button 
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Sparkles className="text-yellow-400" />}
          {loading ? 'Analyzing Performance Data...' : 'Generate AI Report'}
        </button>
      </div>

      {report && (
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl space-y-8 animate-in slide-in-from-bottom duration-700">
          <div className="flex items-center justify-between border-b border-slate-50 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center text-white">
                <FileText size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{selectedPlayer}</h2>
                <p className="text-slate-500">Performance Report • {new Date().toLocaleDateString()}</p>
              </div>
            </div>
            <div className="text-center px-6 py-2 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Scout Rating</p>
              <p className="text-3xl font-black text-green-600">{report.scoutRating}/10</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" /> Key Strengths
              </h3>
              <ul className="space-y-3">
                {report.strengths.map((s: string, i: number) => (
                  <li key={i} className="flex gap-3 text-slate-600 bg-slate-50 p-4 rounded-xl border-l-4 border-green-500">
                    <span className="text-sm leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp size={18} className="text-orange-500" /> Focus Areas
              </h3>
              <ul className="space-y-3">
                {report.improvements.map((im: string, i: number) => (
                  <li key={i} className="flex gap-3 text-slate-600 bg-slate-50 p-4 rounded-xl border-l-4 border-orange-500">
                    <span className="text-sm leading-relaxed">{im}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-2xl space-y-3">
            <h3 className="font-bold text-green-400 flex items-center gap-2">
              <Sparkles size={16} /> Technical Summary
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm italic">
              "{report.summary}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsView;