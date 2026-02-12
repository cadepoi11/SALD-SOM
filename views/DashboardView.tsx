
import React from 'react';
import { 
  Users, 
  Shield, 
  Calendar, 
  TrendingUp, 
  Wallet, 
  AlertCircle,
  Plus,
  FileText,
  Mail,
  Flame,
  Activity,
  Trophy,
  PieChart
} from 'lucide-react';
import StatCard from '../components/StatCard';
import RecentMatches from '../components/RecentMatches';
import UpcomingTraining from '../components/UpcomingTraining';
import TopPerformers from '../components/TopPerformers';
import { StatItem, AdminRole } from '../types';

interface DashboardViewProps {
  role: AdminRole;
}

const DashboardView: React.FC<DashboardViewProps> = ({ role }) => {
  const getStats = (): StatItem[] => {
    const baseStats: StatItem[] = [
      { label: 'Total Players', value: '156', change: '+12 this month', changeType: 'increase', icon: Users, color: 'bg-[#00244d]', subtext: '' },
      { label: 'Active Teams', value: '8', icon: Shield, color: 'bg-amber-500', subtext: 'U15, U17, U19, Senior' },
    ];

    if (role === 'Head Coach') {
      return [
        ...baseStats,
        { label: 'Training Sessions', value: '24', icon: Calendar, color: 'bg-orange-500', subtext: 'This week' },
        { label: 'Win Rate', value: '72%', change: '+5% vs last season', changeType: 'increase', icon: TrendingUp, color: 'bg-emerald-500', subtext: '' },
        { label: 'Team Morale', value: '88%', icon: Activity, color: 'bg-indigo-600', subtext: 'Based on attendance' },
        { label: 'Pending Injuries', value: '3', change: '2 returning soon', changeType: 'decrease', icon: AlertCircle, color: 'bg-rose-500', subtext: '' },
      ];
    }

    if (role === 'Finance Manager') {
      return [
        ...baseStats,
        { label: 'Fee Collection', value: '$45,200', change: '92% collected', changeType: 'neutral', icon: Wallet, color: 'bg-emerald-500', subtext: '' },
        { label: 'Academy Revenue', value: '$124k', change: '+18% YoY', changeType: 'increase', icon: TrendingUp, color: 'bg-indigo-600', subtext: '' },
        { label: 'Outstanding Invoices', value: '14', icon: FileText, color: 'bg-rose-500', subtext: 'Needs follow-up' },
        { label: 'Operating Costs', value: '$32k', icon: PieChart, color: 'bg-orange-500', subtext: 'Current month' },
      ];
    }

    // Default System Admin Stats
    return [
      ...baseStats,
      { label: 'Training Sessions', value: '24', icon: Calendar, color: 'bg-orange-500', subtext: 'This week' },
      { label: 'Win Rate', value: '72%', change: '+5% vs last season', changeType: 'increase', icon: TrendingUp, color: 'bg-emerald-500', subtext: '' },
      { label: 'Fee Collection', value: '$45,200', change: '92% collected', changeType: 'neutral', icon: Wallet, color: 'bg-indigo-600', subtext: '' },
      { label: 'Pending Injuries', value: '3', change: '2 returning soon', changeType: 'decrease', icon: AlertCircle, color: 'bg-rose-500', subtext: '' },
    ];
  };

  const getQuickActions = () => {
    const actions = [
      { label: 'Send Message', icon: Mail, color: 'bg-teal-100 text-teal-600', roles: ['System Admin', 'Head Coach', 'Finance Manager'] },
      { label: 'Add Player', icon: Users, color: 'bg-[#00244d]/10 text-[#00244d]', roles: ['System Admin', 'Head Coach'] },
      { label: 'Schedule Training', icon: Calendar, color: 'bg-orange-100 text-orange-600', roles: ['System Admin', 'Head Coach'] },
      { label: 'New Match', icon: Plus, color: 'bg-indigo-100 text-indigo-600', roles: ['System Admin', 'Head Coach'] },
      { label: 'Generate Report', icon: FileText, color: 'bg-amber-100 text-amber-600', roles: ['System Admin', 'Finance Manager'] },
      { label: 'Process Payment', icon: Wallet, color: 'bg-emerald-100 text-emerald-600', roles: ['System Admin', 'Finance Manager'] },
    ];

    return actions.filter(action => action.roles.includes(role));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Heading */}
      <div className="flex items-center justify-between bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-black text-slate-900">JOTA Football Academy</h1>
          <p className="text-slate-500 mt-1">Academy Management Dashboard • Welcome, <span className="text-amber-500 font-bold">{role}</span></p>
        </div>
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Flame size={120} />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {getStats().map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* Quick Actions */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <Trophy size={18} className="text-amber-500" /> {role} Workspace
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {getQuickActions().map((action, i) => (
            <button 
              key={i} 
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-amber-300 hover:shadow-md transition-all group flex flex-col items-center gap-3 text-center"
            >
              <div className={`p-3 rounded-full ${action.color} group-hover:scale-110 transition-transform`}>
                <action.icon size={24} />
              </div>
              <span className="text-sm font-bold text-slate-700">{action.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {role !== 'Finance Manager' ? (
          <>
            <div className="lg:col-span-4 h-[400px]">
              <RecentMatches />
            </div>
            <div className="lg:col-span-4 h-[400px]">
              <UpcomingTraining />
            </div>
            <div className="lg:col-span-4 h-[400px]">
              <TopPerformers />
            </div>
          </>
        ) : (
          <div className="lg:col-span-12 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
             <div className="p-4 bg-amber-50 text-amber-500 rounded-full">
                <PieChart size={48} />
             </div>
             <div>
                <h3 className="text-2xl font-black text-slate-900">Financial Performance Overview</h3>
                <p className="text-slate-500 max-w-md mx-auto mt-2">Detailed financial charts and revenue forecasting are available in the dedicated Finance section.</p>
             </div>
             <button className="px-6 py-3 bg-[#00244d] text-white rounded-xl font-bold hover:bg-[#003670] transition-all">Go to Finance Module</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardView;
