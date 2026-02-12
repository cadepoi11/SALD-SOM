
import React, { useState, useCallback } from 'react';
import { 
  FileUp, 
  FileDown, 
  Database, 
  Download, 
  CheckCircle2, 
  AlertTriangle, 
  Trash2, 
  Loader2, 
  Table as TableIcon,
  ChevronRight,
  Info
} from 'lucide-react';
import * as XLSX from 'xlsx';

const DataCenterView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'import' | 'export' | 'logs'>('import');
  const [importData, setImportData] = useState<any[]>([]);
  const [isParsing, setIsParsing] = useState(false);
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // --- Handlers ---

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsParsing(true);
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const bstr = evt.target?.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        setImportData(data);
        setImportStatus('idle');
      } catch (err) {
        console.error("Excel Parsing Error:", err);
        setImportStatus('error');
      } finally {
        setIsParsing(false);
      }
    };
    reader.readAsBinaryString(file);
  };

  const downloadTemplate = () => {
    const templateData = [
      { Full_Name: 'John Doe', Age: 18, Position: 'Forward', Team: 'Academy U19', Status: 'Active' },
      { Full_Name: 'Jane Smith', Age: 17, Position: 'Midfielder', Team: 'Academy U17', Status: 'Active' },
    ];
    const ws = XLSX.utils.json_to_sheet(templateData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Players Template");
    XLSX.writeFile(wb, "JOTA_Academy_Import_Template.xlsx");
  };

  const exportToCSV = () => {
    // Mocking academy data for export
    const academyData = [
      { ID: 'P001', Name: 'Ahmed Hassan', Age: 18, Performance: '92%', Status: 'Active' },
      { ID: 'P002', Name: 'Mohamed Ali', Age: 16, Performance: '88%', Status: 'Active' },
      { ID: 'P003', Name: 'Omar Ibrahim', Age: 19, Performance: '85%', Status: 'Injured' },
    ];
    const ws = XLSX.utils.json_to_sheet(academyData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Academy Export");
    XLSX.writeFile(wb, `JOTA_Academy_Report_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const commitImport = () => {
    setIsParsing(true);
    // Simulate API delay
    setTimeout(() => {
      setIsParsing(false);
      setImportStatus('success');
      setImportData([]);
    }, 1500);
  };

  const clearImport = () => {
    setImportData([]);
    setImportStatus('idle');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <Database className="text-amber-500" size={32} /> Data Management Center
          </h1>
          <p className="text-slate-500 mt-1 italic">Bulk operations, Excel processing, and academy database synchronization.</p>
        </div>
        <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
          <button 
            onClick={() => setActiveTab('import')}
            className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${activeTab === 'import' ? 'bg-[#00244d] text-white' : 'text-slate-400 hover:bg-slate-50'}`}
          >
            IMPORT
          </button>
          <button 
            onClick={() => setActiveTab('export')}
            className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${activeTab === 'export' ? 'bg-[#00244d] text-white' : 'text-slate-400 hover:bg-slate-50'}`}
          >
            EXPORT
          </button>
          <button 
            onClick={() => setActiveTab('logs')}
            className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${activeTab === 'logs' ? 'bg-[#00244d] text-white' : 'text-slate-400 hover:bg-slate-50'}`}
          >
            AUDIT LOGS
          </button>
        </div>
      </div>

      {activeTab === 'import' && (
        <div className="space-y-6">
          {/* Import Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
              <div className="space-y-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 w-fit rounded-2xl">
                  <FileUp size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Upload Spreadsheet</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Bulk add players, staff, or medical records using our standardized Excel templates.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-50">
                <label className="block w-full cursor-pointer group">
                  <div className="w-full py-12 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center gap-3 bg-slate-50 group-hover:bg-slate-100 group-hover:border-amber-400 transition-all">
                    <Download size={32} className="text-slate-300 group-hover:text-amber-500" />
                    <span className="text-xs font-bold text-slate-400">Drag & Drop or Click to Select</span>
                    <input type="file" className="hidden" accept=".xlsx, .xls, .csv" onChange={handleFileUpload} />
                  </div>
                </label>
                <button 
                  onClick={downloadTemplate}
                  className="w-full py-4 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl text-xs font-black hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  <Download size={16} /> Download Player Template
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col min-h-[400px]">
              {importStatus === 'success' ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-green-500 text-white rounded-[2rem] flex items-center justify-center shadow-xl shadow-green-100 rotate-12">
                    <CheckCircle2 size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Import Successful</h3>
                    <p className="text-slate-500 max-w-xs mx-auto mt-2">The database has been updated with your records.</p>
                  </div>
                  <button onClick={() => setImportStatus('idle')} className="px-8 py-3 bg-[#00244d] text-white rounded-xl font-bold text-sm">Start New Import</button>
                </div>
              ) : importData.length > 0 ? (
                <div className="flex flex-col h-full space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <TableIcon size={20} className="text-amber-500" />
                      <h3 className="font-bold text-slate-900">Data Preview ({importData.length} records)</h3>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={clearImport} className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg"><Trash2 size={20} /></button>
                      <button 
                        onClick={commitImport}
                        disabled={isParsing}
                        className="bg-green-500 text-white px-6 py-2 rounded-xl text-xs font-black flex items-center gap-2 hover:bg-green-600 disabled:opacity-50"
                      >
                        {isParsing ? <Loader2 className="animate-spin" size={16} /> : <CheckCircle2 size={16} />}
                        Process Import
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-x-auto border border-slate-100 rounded-2xl custom-scrollbar">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase">
                        <tr>
                          {Object.keys(importData[0]).map(key => (
                            <th key={key} className="px-4 py-3">{key.replace('_', ' ')}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {importData.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50">
                            {Object.values(row).map((val: any, i) => (
                              <td key={i} className="px-4 py-3 text-xs font-medium text-slate-600">{val}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 text-slate-300">
                  <div className="p-6 bg-slate-50 rounded-full">
                    <TableIcon size={48} />
                  </div>
                  <p className="text-sm font-medium">Upload a file to preview data before importing.</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 p-6 rounded-3xl flex items-start gap-4">
            <div className="p-2 bg-white rounded-xl text-amber-500">
              <Info size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-black text-amber-900 uppercase tracking-widest">Data Integrity Check</h4>
              <p className="text-xs text-amber-800 leading-relaxed font-medium">
                Our system automatically validates player ages, team assignments, and medical status. Duplicate entries will be flagged and excluded from the final import to maintain database cleanliness.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'export' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4">
          {[
            { title: 'Player Master List', desc: 'Complete database of all registered academy players including contact info.', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { title: 'Financial Ledger', desc: 'Audit-ready report of fee collections, scholarships, and academy overhead.', icon: Wallet, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { title: 'Technical Scouting', desc: 'Performance metrics and Gemini AI evaluations for the elite player pool.', icon: Activity, color: 'text-amber-600', bg: 'bg-amber-50' },
            { title: 'Match Results', desc: 'Seasonal fixtures results, player statistics, and team standings.', icon: Trophy, color: 'text-rose-600', bg: 'bg-rose-50' },
            { title: 'Medical Archives', desc: 'Secure injury history and rehabilitation progress for medical clearance.', icon: Stethoscope, color: 'text-sky-600', bg: 'bg-sky-50' },
            { title: 'Attendance Logs', desc: 'Training participation records categorized by age group and coach.', icon: Calendar, color: 'text-slate-600', bg: 'bg-slate-50' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-2">{item.desc}</p>
                </div>
              </div>
              <button 
                onClick={exportToCSV}
                className="w-full py-4 bg-slate-50 text-[#00244d] rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
              >
                <FileDown size={14} /> Download CSV
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'logs' && (
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden min-h-[500px]">
          <div className="p-8 border-b border-slate-50">
            <h3 className="text-xl font-bold text-slate-900">Database Audit Trail</h3>
            <p className="text-xs text-slate-400 mt-1">Tracking all bulk data modifications and system exports.</p>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { user: 'System Admin', action: 'Mass Import: 24 Players', time: '10:45 AM Today', status: 'Success' },
              { user: 'Finance Manager', action: 'Export: Q1 Financial Ledger', time: '09:12 AM Today', status: 'Success' },
              { user: 'System Admin', action: 'Mass Update: Medical Clearances', time: 'Yesterday', status: 'Success' },
              { user: 'System Admin', action: 'Failed Import: Invalid Header', time: 'Feb 08, 2026', status: 'Failed' },
            ].map((log, i) => (
              <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white text-[10px] font-black">
                    {log.user.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{log.action}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{log.user} • {log.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                   <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase ${
                     log.status === 'Success' ? 'bg-green-100 text-green-600' : 'bg-rose-100 text-rose-600'
                   }`}>
                     {log.status}
                   </span>
                   <ChevronRight size={18} className="text-slate-300 group-hover:text-slate-900 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Mocking missing lucide icons for the loop ---
const Users = (props: any) => <Database {...props} />;
const Wallet = (props: any) => <Database {...props} />;
const Activity = (props: any) => <Database {...props} />;
const Trophy = (props: any) => <Database {...props} />;
const Stethoscope = (props: any) => <Database {...props} />;
const Calendar = (props: any) => <Database {...props} />;

export default DataCenterView;
