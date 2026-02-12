
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Shield, 
  UserRound, 
  ClipboardList, 
  Trophy, 
  Activity, 
  Wallet, 
  Stethoscope, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  FileCheck,
  Music,
  Building2,
  Moon,
  Flame,
  Database
} from 'lucide-react';
import { AdminRole } from '../types';

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
  role: AdminRole;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle, role }) => {
  const allNavItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/', roles: ['System Admin', 'Head Coach', 'Finance Manager'] },
    { name: 'Players', icon: Users, path: '/players', roles: ['System Admin', 'Head Coach'] },
    { name: 'Teams', icon: Shield, path: '/teams', roles: ['System Admin', 'Head Coach'] },
    { name: 'Coaches', icon: UserRound, path: '/coaches', roles: ['System Admin'] },
    { name: 'Training', icon: ClipboardList, path: '/training', roles: ['System Admin', 'Head Coach'] },
    { name: 'Matches', icon: Trophy, path: '/matches', roles: ['System Admin', 'Head Coach'] },
    { name: 'Match Day', icon: FileCheck, path: '/match-day', roles: ['System Admin', 'Head Coach'] },
    { name: 'Cups', icon: Moon, path: '/entertainment-cup', roles: ['System Admin', 'Head Coach'] },
    { name: 'Stadiums', icon: Building2, path: '/stadium', roles: ['System Admin', 'Head Coach', 'Finance Manager'] },
    { name: 'Performance', icon: Activity, path: '/performance', roles: ['System Admin', 'Head Coach'] },
    { name: 'Finance', icon: Wallet, path: '/finance', roles: ['System Admin', 'Finance Manager'] },
    { name: 'Medical', icon: Stethoscope, path: '/medical', roles: ['System Admin', 'Head Coach'] },
    { name: 'Messages', icon: MessageSquare, path: '/messages', roles: ['System Admin', 'Head Coach', 'Finance Manager'] },
    { name: 'Reports', icon: BarChart3, path: '/reports', roles: ['System Admin', 'Finance Manager'] },
    { name: 'Data Center', icon: Database, path: '/data-center', roles: ['System Admin', 'Finance Manager'] },
  ];

  const filteredNavItems = allNavItems.filter(item => item.roles.includes(role));

  return (
    <aside 
      className={`bg-[#00244d] text-slate-400 flex flex-col transition-all duration-300 relative ${
        isOpen ? 'w-64' : 'w-20'
      } shrink-0 shadow-2xl`}
    >
      <button 
        onClick={toggle}
        className="absolute -right-3 top-24 bg-amber-500 text-white rounded-full p-1 border-2 border-slate-50 hover:bg-amber-600 transition-colors z-10"
      >
        {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      <div className="p-6 flex items-center gap-3">
        <div className="bg-amber-500 p-2 rounded-full shrink-0 flex items-center justify-center relative">
          <Flame className="text-[#00244d]" size={24} />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
            <Shield className="text-[#00244d]" size={10} />
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col">
            <span className="text-white font-black text-lg leading-tight tracking-tighter">JOTA ACADEMY</span>
            <span className="text-[10px] text-amber-400 uppercase tracking-widest font-black">Elite Football</span>
          </div>
        )}
      </div>

      <nav className="flex-1 px-4 mt-6 space-y-1 custom-scrollbar overflow-y-auto">
        {filteredNavItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group
              ${isActive ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' : 'hover:bg-white/10 hover:text-white'}
            `}
          >
            <item.icon size={20} className={isOpen ? '' : 'mx-auto'} />
            {isOpen && <span className="font-bold text-sm">{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10 space-y-1">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full hover:bg-white/10 hover:text-white transition-all group">
          <Settings size={20} className={isOpen ? '' : 'mx-auto'} />
          {isOpen && <span className="font-bold text-sm">Settings</span>}
        </button>
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full hover:bg-rose-500/20 hover:text-rose-400 transition-all group">
          <LogOut size={20} className={isOpen ? '' : 'mx-auto'} />
          {isOpen && <span className="font-bold text-sm">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
