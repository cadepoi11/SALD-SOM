
import React, { useState, useMemo, useRef } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  X, 
  Shield, 
  Target, 
  Activity, 
  Calendar, 
  Star, 
  Printer, 
  FileText,
  Flame,
  Award,
  Trophy,
  Camera,
  Edit2,
  Trash2,
  TrendingUp,
  Download
} from 'lucide-react';
import { Player } from '../types';

const INITIAL_PLAYERS: Player[] = [
  { id: '1', name: 'Ahmed Hassan', age: 18, position: 'Forward', team: 'Academy U19', performance: 92, status: 'Active', goals: 15 },
  { id: '2', name: 'Mohamed Ali', age: 16, position: 'Midfielder', team: 'Academy U17', performance: 88, status: 'Active', goals: 7 },
  { id: '3', name: 'Omar Ibrahim', age: 19, position: 'Defender', team: 'Academy U19', performance: 85, status: 'Injured', goals: 2 },
  { id: '4', name: 'Yusuf Ahmed', age: 14, position: 'Goalkeeper', team: 'Academy U15', performance: 83, status: 'Active', goals: 0 },
  { id: '5', name: 'Zaid Malik', age: 17, position: 'Midfielder', team: 'Academy U17', performance: 79, status: 'Active', goals: 4 },
  { id: '6', name: 'Ali Khan', age: 15, position: 'Forward', team: 'Academy U15', performance: 81, status: 'Away', goals: 9 },
];

const PlayersView: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>(INITIAL_PLAYERS);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);
  const [printMode, setPrintMode] = useState<'single' | 'list' | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredPlayers = useMemo(() => {
    return players.filter(player => 
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, players]);

  const handlePrintSingle = (player: Player) => {
    setSelectedPlayer(player);
    setPrintMode('single');
    setTimeout(() => {
      window.print();
      setPrintMode(null);
    }, 100);
  };

  const handlePrintList = () => {
    setPrintMode('list');
    setTimeout(() => {
      window.print();
      setPrintMode(null);
    }, 100);
  };

  const handleSavePlayer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const playerData: Partial<Player> = {
      name: formData.get('name') as string,
      age: parseInt(formData.get('age') as string),
      position: formData.get('position') as string,
      team: formData.get('team') as string,
      status: formData.get('status') as Player['status'],
      goals: parseInt(formData.get('goals') as string),
      performance: parseInt(formData.get('performance') as string),
    };

    if (editingPlayer) {
      setPlayers(prev => prev.map(p => p.id === editingPlayer.id ? { ...p, ...playerData } : p));
    } else {
      const newPlayer: Player = {
        ...playerData as Player,
        id: Math.random().toString(36).substr(2, 9),
      };
      setPlayers(prev => [...prev, newPlayer]);
    }
    
    setIsFormOpen(false);
    setEditingPlayer(null);
  };

  const handleDeletePlayer = (id: string) => {
    if (confirm('Are you sure you want to delete this player?')) {
      setPlayers(prev => prev.filter(p => p.id !== id));
      setSelectedPlayer(null);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editingPlayer) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingPlayer({ ...editingPlayer, photoUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Players</h1>
          <p className="text-slate-500 mt-1">Manage and track your academy's rising stars.</p>
        </div>
        <div className="flex gap-2 no-print">
          <button 
            onClick={handlePrintList}
            className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition-all hover:bg-slate-50"
          >
            <Printer size={18} />
            <span>Print List</span>
          </button>
          <button 
            onClick={() => { setEditingPlayer(null); setIsFormOpen(true); }}
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors shadow-sm"
          >
            <Plus size={20} />
            <span>Add New Player</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden no-print">
        <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search players by name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500/20 outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-2 transition-all">
              <Filter size={16} /> Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Photo</th>
                <th className="px-6 py-4">Player</th>
                <th className="px-6 py-4">Team</th>
                <th className="px-6 py-4">Position</th>
                <th className="px-6 py-4 text-center">Goals</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Performance</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredPlayers.map((player) => (
                <tr 
                  key={player.id} 
                  className="hover:bg-slate-50 transition-colors cursor-pointer group"
                  onClick={() => setSelectedPlayer(player)}
                >
                  <td className="px-6 py-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden border border-slate-200">
                      <img 
                        src={player.photoUrl || `https://picsum.photos/seed/player-${player.id}/100/100`} 
                        alt={player.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-bold text-slate-900">{player.name}</p>
                      <p className="text-xs text-slate-500">{player.age} years old</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{player.team}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{player.position}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-black text-amber-600">{player.goals}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter ${
                      player.status === 'Active' ? 'bg-green-100 text-green-700' :
                      player.status === 'Injured' ? 'bg-red-100 text-red-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {player.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-full max-w-[100px] flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-amber-500 rounded-full" 
                          style={{ width: `${player.performance}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-900">{player.performance}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={(e) => { e.stopPropagation(); setEditingPlayer(player); setIsFormOpen(true); }}
                        className="p-1.5 bg-slate-100 text-slate-500 rounded-lg hover:bg-amber-100 hover:text-amber-600 transition-colors"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleDeletePlayer(player.id); }}
                        className="p-1.5 bg-slate-100 text-slate-500 rounded-lg hover:bg-rose-100 hover:text-rose-600 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Player Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h2 className="text-xl font-black text-slate-900">{editingPlayer ? 'Edit Player' : 'Add New Player'}</h2>
              <button onClick={() => { setIsFormOpen(false); setEditingPlayer(null); }} className="text-slate-400 hover:text-slate-900">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSavePlayer} className="p-6 space-y-4">
              <div className="flex flex-col items-center mb-6">
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-24 h-24 bg-slate-100 rounded-3xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer hover:border-amber-500 group overflow-hidden relative"
                >
                  {editingPlayer?.photoUrl ? (
                    <img src={editingPlayer.photoUrl} className="w-full h-full object-cover" alt="" />
                  ) : (
                    <>
                      <Camera size={24} className="text-slate-300 group-hover:text-amber-500" />
                      <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase">Photo</span>
                    </>
                  )}
                  <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handlePhotoUpload} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input name="name" defaultValue={editingPlayer?.name} required className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-amber-500/20" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Age</label>
                  <input name="age" type="number" defaultValue={editingPlayer?.age} required className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-amber-500/20" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Goals</label>
                  <input name="goals" type="number" defaultValue={editingPlayer?.goals} required className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-amber-500/20" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Position</label>
                  <select name="position" defaultValue={editingPlayer?.position} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-amber-500/20">
                    <option>Forward</option>
                    <option>Midfielder</option>
                    <option>Defender</option>
                    <option>Goalkeeper</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Team</label>
                  <input name="team" defaultValue={editingPlayer?.team} required className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-amber-500/20" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Performance %</label>
                  <input name="performance" type="number" max="100" defaultValue={editingPlayer?.performance} required className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-amber-500/20" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</label>
                  <select name="status" defaultValue={editingPlayer?.status} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-amber-500/20">
                    <option>Active</option>
                    <option>Injured</option>
                    <option>Away</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full py-3.5 bg-[#00244d] text-white rounded-2xl font-black text-sm hover:bg-[#003670] transition-all shadow-xl shadow-[#00244d]/20 uppercase tracking-widest">
                  Save Player Data
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Player Detail Modal */}
      {selectedPlayer && !printMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300 no-print">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="relative h-48 bg-[#00244d] flex items-center justify-center shrink-0">
              <button 
                onClick={() => setSelectedPlayer(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all z-10"
              >
                <X size={20} />
              </button>
              <img 
                src={selectedPlayer.photoUrl || `https://picsum.photos/seed/player-${selectedPlayer.id}/400/200`} 
                alt={selectedPlayer.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10 flex flex-col items-center pt-8">
                <div className="w-24 h-24 rounded-3xl border-4 border-white bg-white overflow-hidden shadow-2xl mb-2 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src={selectedPlayer.photoUrl || `https://picsum.photos/seed/player-${selectedPlayer.id}/128/128`} 
                    alt={selectedPlayer.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-black text-white text-center">{selectedPlayer.name}</h2>
                <p className="text-amber-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                  {selectedPlayer.position} • {selectedPlayer.team}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar flex-1">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                  <Trophy size={16} className="text-amber-500 mb-1" />
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Goals</p>
                  <p className="text-lg font-black text-slate-900">{selectedPlayer.goals}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                  <Calendar size={16} className="text-blue-500 mb-1" />
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Player Age</p>
                  <p className="text-lg font-black text-slate-900">{selectedPlayer.age}Y</p>
                </div>
              </div>

              {/* Performance Visualization Chart */}
              <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-black text-slate-900 flex items-center gap-2 uppercase tracking-widest">
                    <TrendingUp size={14} className="text-amber-500" /> Season Growth
                  </h3>
                  <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+4.2%</span>
                </div>
                <div className="flex items-end justify-between h-24 gap-1 px-2">
                  {[45, 60, 55, 75, 82, 90, selectedPlayer.performance].map((val, i) => (
                    <div key={i} className="flex-1 group relative">
                       <div 
                        className={`w-full rounded-t-lg transition-all duration-500 ${i === 6 ? 'bg-amber-500' : 'bg-slate-200 group-hover:bg-slate-300'}`} 
                        style={{ height: `${val}%` }}
                       >
                         <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[8px] px-1 rounded font-black">
                           {val}%
                         </div>
                       </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[8px] font-black text-slate-300 uppercase px-1">
                  <span>SEP</span>
                  <span>OCT</span>
                  <span>NOV</span>
                  <span>DEC</span>
                  <span>JAN</span>
                  <span>FEB</span>
                  <span className="text-amber-500">CUR</span>
                </div>
              </div>

              <div className="space-y-3 bg-slate-900 p-5 rounded-3xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-white flex items-center gap-2">
                    <Star size={14} className="text-amber-500 fill-amber-500" /> Current Efficiency
                  </h3>
                  <span className="text-sm font-black text-amber-500">{selectedPlayer.performance}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-500 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(245,158,11,0.5)]" 
                    style={{ width: `${selectedPlayer.performance}%` }}
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <div className="flex gap-2">
                  <button 
                    onClick={() => { setEditingPlayer(selectedPlayer); setIsFormOpen(true); setSelectedPlayer(null); }}
                    className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                  >
                    <Edit2 size={12} /> Edit
                  </button>
                  <button 
                    onClick={() => handlePrintSingle(selectedPlayer)}
                    className="flex-1 py-3 bg-amber-500 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-amber-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                  >
                    <Printer size={12} /> Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HIDDEN PRINTABLE COMPONENTS */}
      
      {/* 1. Full Player List Printout */}
      {printMode === 'list' && (
        <div className="print-only printable-content bg-white">
          <div className="flex items-center justify-between border-b-2 border-slate-900 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <Flame size={24} className="text-slate-900" />
              </div>
              <div>
                <h1 className="text-xl font-black text-slate-900">JOTA FOOTBALL ACADEMY</h1>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Player Master Registry • {new Date().toLocaleDateString()}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-slate-900">Total Players: {players.length}</p>
            </div>
          </div>

          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-2 border border-slate-200">Name</th>
                <th className="p-2 border border-slate-200">Age</th>
                <th className="p-2 border border-slate-200">Position</th>
                <th className="p-2 border border-slate-200">Team</th>
                <th className="p-2 border border-slate-200">Goals</th>
                <th className="p-2 border border-slate-200">Eff.</th>
                <th className="p-2 border border-slate-200">Status</th>
              </tr>
            </thead>
            <tbody>
              {players.map(p => (
                <tr key={p.id}>
                  <td className="p-2 border border-slate-200 font-bold">{p.name}</td>
                  <td className="p-2 border border-slate-200">{p.age}</td>
                  <td className="p-2 border border-slate-200">{p.position}</td>
                  <td className="p-2 border border-slate-200">{p.team}</td>
                  <td className="p-2 border border-slate-200 font-black">{p.goals}</td>
                  <td className="p-2 border border-slate-200">{p.performance}%</td>
                  <td className="p-2 border border-slate-200 uppercase font-black text-[8px]">{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between opacity-50">
            <p className="text-[8px]">Scanned: {Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
            <p className="text-[8px]">JOTA Internal Confidential</p>
          </div>
        </div>
      )}

      {/* 2. Single Player Dossier Printout (Same as previous implementation) */}
      {printMode === 'single' && selectedPlayer && (
        <div className="print-only printable-content bg-white">
          {/* Reuse the existing single dossier structure */}
          <div className="border-b-4 border-slate-900 pb-8 flex justify-between items-end mb-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center">
                <Flame size={40} className="text-slate-900" />
              </div>
              <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tighter">JOTA FOOTBALL ACADEMY</h1>
                <p className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Official Scouting Dossier</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-black text-slate-400 uppercase mb-1">Issue Date</p>
              <p className="text-sm font-bold text-slate-900">{new Date().toLocaleDateString('en-GB')}</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-4 space-y-6">
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden border-8 border-slate-50 shadow-2xl">
                <img 
                  src={selectedPlayer.photoUrl || `https://picsum.photos/seed/player-${selectedPlayer.id}/600/800`} 
                  alt={selectedPlayer.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-slate-900 text-white p-8 rounded-[2rem] text-center space-y-2">
                <p className="text-amber-500 font-black text-[10px] uppercase tracking-widest">Efficiency Rating</p>
                <p className="text-6xl font-black">{selectedPlayer.performance}%</p>
                <p className="text-amber-500 font-black text-sm uppercase tracking-widest mt-2">{selectedPlayer.goals} Total Goals</p>
              </div>
            </div>

            <div className="col-span-8 space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award size={32} className="text-amber-500" />
                  <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">{selectedPlayer.name}</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-slate-100 text-slate-900 px-4 py-2 rounded-xl font-bold text-sm uppercase">Position: {selectedPlayer.position}</span>
                  <span className="bg-slate-100 text-slate-900 px-4 py-2 rounded-xl font-bold text-sm uppercase">Squad: {selectedPlayer.team}</span>
                  <span className="bg-slate-100 text-slate-900 px-4 py-2 rounded-xl font-bold text-sm uppercase">Status: {selectedPlayer.status}</span>
                </div>
              </div>
              {/* Other dossier fields... */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayersView;
