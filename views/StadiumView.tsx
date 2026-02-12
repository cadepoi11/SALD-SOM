
import React, { useState } from 'react';
import { 
  Building2, 
  Settings2, 
  Calendar, 
  MapPin, 
  Search, 
  CheckCircle, 
  Clock, 
  Timer, 
  X, 
  ChevronRight, 
  Check, 
  Info
} from 'lucide-react';

interface Stadium {
  name: string;
  location: string;
  capacity: string;
  type: string;
  ramadanCup: boolean;
  status: string;
  health: number;
}

const StadiumView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStadium, setSelectedStadium] = useState<Stadium | null>(null);
  const [bookingStep, setBookingStep] = useState<'form' | 'success'>('form');
  const [bookingDate, setBookingDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState('60');

  const stadiums: Stadium[] = [
    { name: 'Holwadag Fuustal', location: 'Holwadag', capacity: '1,200', type: 'Futsal', ramadanCup: true, status: 'Online', health: 98 },
    { name: 'Enjoy Stadium', location: 'Hodan', capacity: '2,500', type: 'Premium Futsal', ramadanCup: true, status: 'Online', health: 95 },
    { name: 'Axmed Gurey Stadium', location: 'Hodan', capacity: '5,000', type: 'Full Pitch', ramadanCup: true, status: 'Maintenance', health: 82 },
    { name: 'Shiirkole Fuustal', location: 'Holwadag', capacity: '1,500', type: 'Futsal', ramadanCup: true, status: 'Online', health: 90 },
    { name: 'Xalane Stadium', location: 'Hodan', capacity: '3,000', type: 'Full Pitch', ramadanCup: true, status: 'Online', health: 94 },
    { name: 'Daalo Stadium', location: 'Holwadag', capacity: '2,000', type: 'Artificial Turf', ramadanCup: true, status: 'Online', health: 88 },
    { name: 'Kulmiye Stadium', location: 'Hodan', capacity: '1,800', type: 'Futsal', ramadanCup: true, status: 'Online', health: 91 },
    { name: 'Bugle Stadium', location: 'Holwadag', capacity: '1,000', type: 'Futsal', ramadanCup: false, status: 'Offline', health: 75 },
  ];

  const timeSlots = [
    '08:00 AM', '09:30 AM', '11:00 AM', '01:00 PM', 
    '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM',
    '08:30 PM', '10:00 PM', '11:30 PM'
  ];

  const filteredStadiums = stadiums.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleBookNow = (stadium: Stadium) => {
    setSelectedStadium(stadium);
    setBookingStep('form');
  };

  const confirmBooking = () => {
    if (!selectedTime) return;
    setBookingStep('success');
  };

  const closeModal = () => {
    setSelectedStadium(null);
    setBookingStep('form');
    setSelectedTime('');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Stadium Control Center</h1>
          <p className="text-slate-500">Facility monitoring and booking for all JOTA Football Academy affiliate venues.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search stadiums..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 w-64"
            />
          </div>
          <button className="p-2.5 bg-white border border-slate-200 text-slate-400 rounded-xl hover:text-slate-600 transition-colors">
            <Settings2 size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-[#00244d]/10 text-[#00244d] rounded-2xl"><CheckCircle size={24} /></div>
            <span className="text-[10px] font-black text-green-500 uppercase bg-green-50 px-2 py-1 rounded-full">Active</span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">Operational Venues</p>
            <h3 className="text-3xl font-black text-slate-900">7 / 8</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-amber-500/10 text-amber-500 rounded-2xl"><Calendar size={24} /></div>
            <span className="text-[10px] font-black text-amber-500 uppercase bg-amber-50 px-2 py-1 rounded-full">Busy</span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">Bookings Today</p>
            <h3 className="text-3xl font-black text-slate-900">42</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-2xl"><Clock size={24} /></div>
            <span className="text-[10px] font-black text-indigo-500 uppercase bg-indigo-50 px-2 py-1 rounded-full">Available</span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">Next Slot</p>
            <h3 className="text-3xl font-black text-slate-900">09:30 AM</h3>
          </div>
        </div>
        <div className="bg-slate-900 p-6 rounded-3xl text-white space-y-4">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-white/10 text-amber-400 rounded-2xl"><Building2 size={24} /></div>
            <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Premium</span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">Affiliate District</p>
            <h3 className="text-2xl font-black">Hodan & Holwadag</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {filteredStadiums.map((stadium, i) => (
          <div key={i} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg transition-all group">
             <div className="h-40 bg-slate-100 relative overflow-hidden">
                <img src={`https://picsum.photos/seed/stadium-${stadium.name.replace(/\s+/g, '-')}/400/250`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                   {stadium.ramadanCup && (
                     <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-1 rounded shadow-lg uppercase">Ramadan Venue</span>
                   )}
                   <span className={`px-2 py-1 rounded text-[10px] font-black uppercase shadow-lg ${
                     stadium.status === 'Online' ? 'bg-white text-green-600' : 
                     stadium.status === 'Offline' ? 'bg-rose-500 text-white' : 'bg-amber-500 text-white'
                   }`}>{stadium.status}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                   <span className="bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                      <Building2 size={10} /> {stadium.type}
                   </span>
                </div>
             </div>
             <div className="p-6 space-y-4">
                <div>
                   <h3 className="text-lg font-bold text-slate-900">{stadium.name}</h3>
                   <p className="text-xs font-medium text-slate-400 flex items-center gap-1.5 mt-1">
                      <MapPin size={12} /> {stadium.location}
                   </p>
                </div>
                <div className="flex items-center justify-between py-2 border-y border-slate-50">
                   <div className="text-center">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Capacity</p>
                      <p className="text-xs font-black text-slate-700">{stadium.capacity}</p>
                   </div>
                   <div className="w-px h-6 bg-slate-100"></div>
                   <div className="text-center">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Health</p>
                      <p className="text-xs font-black text-green-600">{stadium.health}%</p>
                   </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2.5 bg-slate-50 text-[#00244d] rounded-xl text-xs font-black hover:bg-slate-100 transition-all">Dashboard</button>
                  <button 
                    onClick={() => handleBookNow(stadium)}
                    disabled={stadium.status !== 'Online'}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-black transition-all ${
                      stadium.status === 'Online' 
                      ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-lg shadow-amber-100' 
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    Book Slot
                  </button>
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedStadium && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00244d]/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            {bookingStep === 'form' ? (
              <div className="flex flex-col md:flex-row h-full">
                {/* Modal Sidebar (Info) */}
                <div className="md:w-64 bg-[#00244d] p-8 text-white flex flex-col justify-between relative overflow-hidden shrink-0">
                  <div className="relative z-10 space-y-6">
                    <div className="p-3 bg-white/10 w-fit rounded-2xl">
                      <Building2 size={28} className="text-amber-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black leading-tight">{selectedStadium.name}</h2>
                      <p className="text-slate-400 text-xs font-bold flex items-center gap-1.5 mt-2">
                        <MapPin size={12} className="text-amber-500" /> {selectedStadium.location}
                      </p>
                    </div>
                    <div className="space-y-4 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-amber-500">
                          <CheckCircle size={16} />
                        </div>
                        <p className="text-xs font-medium text-slate-300">Lighting Included</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-amber-500">
                          <CheckCircle size={16} />
                        </div>
                        <p className="text-xs font-medium text-slate-300">Water Station</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-amber-500">
                          <CheckCircle size={16} />
                        </div>
                        <p className="text-xs font-medium text-slate-300">Dressing Rooms</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 p-4 bg-amber-500 rounded-2xl">
                    <p className="text-[10px] font-black text-[#00244d] uppercase tracking-widest">Pricing</p>
                    <p className="text-lg font-black text-[#00244d]">$25.00 <span className="text-xs font-bold text-[#00244d]/60">/ hour</span></p>
                  </div>
                  {/* Decorative background element */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
                </div>

                {/* Modal Main Content (Form) */}
                <div className="flex-1 p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-slate-900">Book Your Session</h3>
                    <button onClick={closeModal} className="p-2 text-slate-300 hover:text-slate-900 transition-colors">
                      <X size={20} />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Date Picker */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Calendar size={12} /> Select Date
                      </label>
                      <input 
                        type="date" 
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-amber-500/20 outline-none"
                      />
                    </div>

                    {/* Duration Picker */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Timer size={12} /> Duration
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {['60', '90', '120'].map((d) => (
                          <button 
                            key={d}
                            onClick={() => setDuration(d)}
                            className={`py-3 rounded-2xl text-xs font-bold border transition-all ${
                              duration === d 
                              ? 'bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-100' 
                              : 'bg-white border-slate-200 text-slate-600 hover:border-amber-500 hover:text-amber-500'
                            }`}
                          >
                            {d} Minutes
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Slot Picker */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Clock size={12} /> Available Slots
                      </label>
                      <div className="grid grid-cols-3 gap-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                        {timeSlots.map((time) => (
                          <button 
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2.5 rounded-xl text-[11px] font-bold border transition-all ${
                              selectedTime === time 
                              ? 'bg-[#00244d] border-[#00244d] text-white' 
                              : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      onClick={confirmBooking}
                      disabled={!selectedTime}
                      className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all ${
                        selectedTime 
                        ? 'bg-[#00244d] text-white hover:bg-[#003670] shadow-xl shadow-[#00244d]/20' 
                        : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                      }`}
                    >
                      Confirm Booking <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center space-y-8 animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-green-500 text-white rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl shadow-green-200 rotate-12">
                  <Check size={48} strokeWidth={3} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-slate-900">Booking Confirmed!</h3>
                  <p className="text-slate-500 max-w-sm mx-auto">
                    Your session at <span className="font-bold text-slate-900">{selectedStadium.name}</span> is scheduled for <span className="font-bold text-slate-900">{bookingDate}</span> at <span className="font-bold text-slate-900">{selectedTime}</span>.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4 text-left max-w-md mx-auto">
                  <div className="p-2 bg-white rounded-xl text-amber-500 shrink-0">
                    <Info size={20} />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Please arrive 15 minutes before your scheduled slot. Present this dashboard confirmation at the facility gate.
                  </p>
                </div>
                <button 
                  onClick={closeModal}
                  className="px-8 py-4 bg-[#00244d] text-white rounded-2xl font-black text-sm hover:bg-[#003670] transition-all shadow-xl shadow-[#00244d]/20"
                >
                  Return to Stadiums
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StadiumView;
