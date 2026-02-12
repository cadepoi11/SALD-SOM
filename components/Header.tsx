
import React, { useState } from 'react';
import { Search, Bell, ChevronDown, User, Shield, Wallet, Check } from 'lucide-react';
import { AdminRole } from '../types';

interface HeaderProps {
  currentRole: AdminRole;
  onRoleChange: (role: AdminRole) => void;
}

const Header: React.FC<HeaderProps> = ({ currentRole, onRoleChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const roles: { name: AdminRole; icon: any; color: string }[] = [
    { name: 'System Admin', icon: Shield, color: 'text-indigo-500' },
    { name: 'Head Coach', icon: User, color: 'text-emerald-500' },
    { name: 'Finance Manager', icon: Wallet, color: 'text-amber-500' },
  ];

  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0 z-40">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search players, teams, matches..." 
          className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <button className="text-slate-500 hover:text-slate-800 transition-colors p-2 rounded-full hover:bg-slate-100 relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
              3
            </span>
          </button>
        </div>

        <div className="relative flex items-center gap-3 pl-6 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-900 leading-none">Admin User</p>
            <p className="text-[10px] font-bold text-amber-500 mt-1.5 uppercase tracking-wider">{currentRole}</p>
          </div>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white overflow-hidden border-2 border-transparent group-hover:border-amber-500 transition-all">
              <img 
                src="https://picsum.photos/seed/admin/40/40" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <ChevronDown 
              size={14} 
              className={`text-slate-400 group-hover:text-slate-600 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
            />
          </button>

          {/* Role Selector Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-slate-100 rounded-2xl shadow-2xl py-2 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
              <div className="px-4 py-2 border-b border-slate-50 mb-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Switch Role</p>
              </div>
              {roles.map((role) => (
                <button
                  key={role.name}
                  onClick={() => {
                    onRoleChange(role.name);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-all ${
                    currentRole === role.name ? 'bg-amber-50/50' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <role.icon size={16} className={role.color} />
                    <span className={`text-xs font-bold ${currentRole === role.name ? 'text-amber-600' : 'text-slate-700'}`}>
                      {role.name}
                    </span>
                  </div>
                  {currentRole === role.name && <Check size={14} className="text-amber-600" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
