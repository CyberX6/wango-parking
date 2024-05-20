import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartParking from './components/StartParking';
import StopParking from './components/StopParking';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/start-parking" element={<StartParking />} />
                <Route path="/stop-parking" element={<StopParking />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
