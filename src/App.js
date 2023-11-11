import './App.css';
import InsertPumpPage from './pages/InsertPumpPage';
import WarningPage from './pages/WarningPage';
import IssuesPage from './pages/IssuesPage';
import ChargingPage from './pages/ChargingPage';
import "@fontsource/inter"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<InsertPumpPage />} />
                <Route path="/warning" element={<WarningPage />} />
                <Route path="/help" element={<IssuesPage />} />
                <Route path="/charging" element={<ChargingPage />} />
                <Route path="*" element={<IssuesPage />} />
                <Route path="/gastronomy" element={<IssuesPage />} />
                <Route path="/discover" element={<IssuesPage />} />
                <Route path="/shops" element={<IssuesPage />} />
                <Route path="/activities" element={<IssuesPage />} />
            </Routes>
        </Router>
    );
}


export default AppRouter;
