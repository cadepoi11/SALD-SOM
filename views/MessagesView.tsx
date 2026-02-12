
import React from 'react';
import { Search, Edit, Send, Paperclip, MoreVertical, CheckCheck } from 'lucide-react';

const MessagesView: React.FC = () => {
  const threads = [
    { name: 'Marcus Sterling', lastMsg: 'The tactical review is ready...', time: '10:45 AM', active: true, online: true },
    { name: 'Parent: Ahmed Hassan', lastMsg: 'Thank you for the update on...', time: 'Yesterday', active: false, online: false },
    { name: 'Academy Staff Group', lastMsg: 'Sarah: Don’t forget the meeting at...', time: 'Yesterday', active: false, online: true },
    { name: 'Medical Team', lastMsg: 'Physio: Omar is cleared for light...', time: 'Feb 08', active: false, online: false },
  ];

  const chat = [
    { sender: 'Marcus', text: 'Hi Admin, have you seen the new training proposal for next week?', time: '10:30 AM', own: false },
    { sender: 'You', text: 'Just looking at it now. The tactical sessions look well-balanced.', time: '10:35 AM', own: true },
    { sender: 'Marcus', text: 'Great. The tactical review is ready for your final approval.', time: '10:45 AM', own: false },
  ];

  return (
    <div className="h-[calc(100vh-160px)] flex bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 border-r border-slate-50 flex flex-col bg-slate-50/50">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900">Messages</h2>
          <button className="p-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
            <Edit size={18} />
          </button>
        </div>
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input type="text" placeholder="Search chats..." className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {threads.map((thread, i) => (
            <div key={i} className={`p-4 flex items-center gap-4 cursor-pointer hover:bg-white transition-all ${thread.active ? 'bg-white border-r-4 border-green-500' : ''}`}>
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-slate-200 overflow-hidden">
                  <img src={`https://picsum.photos/seed/chat${i}/48/48`} alt="" />
                </div>
                {thread.online && <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-sm font-bold text-slate-900 truncate">{thread.name}</p>
                  <span className="text-[10px] text-slate-400 font-bold">{thread.time}</span>
                </div>
                <p className="text-xs text-slate-400 truncate leading-tight">{thread.lastMsg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Pane */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="p-6 border-b border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-100 overflow-hidden">
              <img src="https://picsum.photos/seed/chat0/40/40" alt="" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Marcus Sterling</p>
              <p className="text-[10px] font-bold text-green-500 uppercase">Active Now</p>
            </div>
          </div>
          <button className="text-slate-300 hover:text-slate-600">
            <MoreVertical size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-6">
          <div className="text-center">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full">Today, Feb 10</span>
          </div>
          {chat.map((msg, i) => (
            <div key={i} className={`flex ${msg.own ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] ${msg.own ? 'order-2' : ''}`}>
                <div className={`p-4 rounded-2xl text-sm ${
                  msg.own ? 'bg-slate-900 text-white rounded-tr-none' : 'bg-slate-50 text-slate-800 rounded-tl-none border border-slate-100 shadow-sm'
                }`}>
                  <p className="leading-relaxed">{msg.text}</p>
                </div>
                <div className={`mt-1 flex items-center gap-1.5 ${msg.own ? 'justify-end' : 'justify-start'}`}>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">{msg.time}</span>
                  {msg.own && <CheckCheck size={12} className="text-green-500" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-6 bg-slate-50/50 border-t border-slate-50">
          <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
            <button className="p-2 text-slate-400 hover:text-slate-600">
              <Paperclip size={20} />
            </button>
            <input 
              type="text" 
              placeholder="Write a message..." 
              className="flex-1 text-sm bg-transparent outline-none py-2 px-2"
            />
            <button className="p-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-green-100">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesView;
