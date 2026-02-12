
import React from 'react';
import { Wallet, DollarSign, TrendingUp, TrendingDown, ArrowUpRight, Search, CheckCircle2, Clock } from 'lucide-react';

const FinanceView: React.FC = () => {
  const transactions = [
    { id: 'TX-1024', type: 'Fee', player: 'Ahmed Hassan', amount: 500.00, status: 'Paid', date: 'Feb 10' },
    { id: 'TX-1025', type: 'Kit', player: 'Zaid Malik', amount: 85.00, status: 'Pending', date: 'Feb 09' },
    { id: 'TX-1026', type: 'Fee', player: 'Mohamed Ali', amount: 500.00, status: 'Overdue', date: 'Jan 31' },
    { id: 'TX-1027', type: 'Fee', player: 'Ali Khan', amount: 500.00, status: 'Paid', date: 'Feb 05' },
  ];

  return (
    <div className="space-y-8 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Finance & Fees</h1>
          <p className="text-slate-500">Manage revenue, expenses, and player scholarship funds.</p>
        </div>
        <button className="bg-green-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-green-700 transition-all flex items-center gap-2">
          <DollarSign size={18} /> New Transaction
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-3xl text-white space-y-4">
          <p className="text-slate-400 text-sm font-medium">Total Balance</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-4xl font-black">$142,500</h3>
            <span className="text-green-400 text-xs font-bold">+12%</span>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <button className="flex-1 py-2 bg-white/10 rounded-xl text-xs font-bold hover:bg-white/20">Withdraw</button>
            <button className="flex-1 py-2 bg-green-500 rounded-xl text-xs font-bold hover:bg-green-600">Transfer</button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
              <TrendingUp size={20} />
            </div>
            <ArrowUpRight size={20} className="text-slate-300" />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium mt-4">Monthly Income</p>
            <h3 className="text-2xl font-black text-slate-900">$24,800</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
              <TrendingDown size={20} />
            </div>
            <ArrowUpRight size={20} className="text-slate-300" />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium mt-4">Monthly Expenses</p>
            <h3 className="text-2xl font-black text-slate-900">$12,450</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800">Recent Transactions</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
              <tr>
                <th className="px-8 py-4">Transaction ID</th>
                <th className="px-8 py-4">Player / Description</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50 transition-colors cursor-pointer">
                  <td className="px-8 py-4 text-xs font-bold text-slate-400">{tx.id}</td>
                  <td className="px-8 py-4">
                    <p className="text-sm font-bold text-slate-900">{tx.player}</p>
                    <p className="text-[10px] text-slate-400">{tx.type}</p>
                  </td>
                  <td className="px-8 py-4 text-sm font-black text-slate-900">${tx.amount.toFixed(2)}</td>
                  <td className="px-8 py-4">
                    <span className={`text-[10px] font-black uppercase tracking-tighter flex items-center gap-1.5 ${
                      tx.status === 'Paid' ? 'text-green-600' :
                      tx.status === 'Pending' ? 'text-amber-600' : 'text-rose-600'
                    }`}>
                      {tx.status === 'Paid' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-xs font-bold text-slate-500">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FinanceView;
