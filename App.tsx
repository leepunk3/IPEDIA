import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { MainPage } from './components/MainPage';
import { ActivitiesPage } from './components/ActivitiesPage';
// import { IpStrategyProgramPage } from './components/IpStrategyProgramPage/App';
import { IpExtensionProgramPage } from './components/IpExtensionProgramPage';
import { IPexitprogramPage } from './components/IPexitprogram';
import { TipsIpStrategyPage } from './components/TipsIpStrategyPage/App';
import { AttorneyPage } from './components/AttorneyPage';
import { WorkPortfolioPage } from './components/WorkPortfolioPage/App';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        {/* <Route path="/ip-strategy-program" element={<IpStrategyProgramPage />} /> */}
        <Route path="/ip-extension-program" element={<IpExtensionProgramPage />} />
        <Route path="/ip-exit-program" element={<IPexitprogramPage />} />
        <Route path="/tips-ip-strategy" element={<TipsIpStrategyPage />} />
        <Route path="/attorney" element={<AttorneyPage />} />
        <Route path="/work-portfolio" element={<WorkPortfolioPage />} />
      </Routes>
    </Router>
  );
};

export default App;