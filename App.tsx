
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './views/DashboardView';
import PlayersView from './views/PlayersView';
import ReportsView from './views/ReportsView';
import TeamsView from './views/TeamsView';
import CoachesView from './views/CoachesView';
import TrainingView from './views/TrainingView';
import MatchesView from './views/MatchesView';
import PerformanceView from './views/PerformanceView';
import FinanceView from './views/FinanceView';
import MedicalView from './views/MedicalView';
import MessagesView from './views/MessagesView';
import MatchDayRequestView from './views/MatchDayRequestView';
import EntertainmentCupView from './views/EntertainmentCupView';
import StadiumView from './views/StadiumView';
import DataCenterView from './views/DataCenterView';
import { AdminRole } from './types';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userRole, setUserRole] = useState<AdminRole>('System Admin');

  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-slate-50">
        <Sidebar 
          isOpen={isSidebarOpen} 
          toggle={() => setIsSidebarOpen(!isSidebarOpen)} 
          role={userRole}
        />
        
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <Header currentRole={userRole} onRoleChange={setUserRole} />
          
          <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
            <Routes>
              <Route path="/" element={<DashboardView role={userRole} />} />
              <Route path="/players" element={<PlayersView />} />
              <Route path="/teams" element={<TeamsView />} />
              <Route path="/coaches" element={<CoachesView />} />
              <Route path="/training" element={<TrainingView />} />
              <Route path="/matches" element={<MatchesView />} />
              <Route path="/match-day" element={<MatchDayRequestView />} />
              <Route path="/entertainment-cup" element={<EntertainmentCupView />} />
              <Route path="/stadium" element={<StadiumView />} />
              <Route path="/performance" element={<PerformanceView />} />
              <Route path="/finance" element={<FinanceView />} />
              <Route path="/medical" element={<MedicalView />} />
              <Route path="/messages" element={<MessagesView />} />
              <Route path="/reports" element={<ReportsView />} />
              <Route path="/data-center" element={<DataCenterView />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
