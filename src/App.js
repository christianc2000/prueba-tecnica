import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicationForm from './components/views/ApplicationForm';
import AppHolder from './components/layout/AppHolder';
import RequestedCards from './components/views/RequestedCards';
import ApprovedCards from './components/views/ApprovedCards';


function App() {
  const [applications, setApplications] = useState([]);
  const [approvedCards, setApprovedCards] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppHolder />}>
          <Route path="/solicitud" element={<ApplicationForm setApplications={setApplications} />} />
          <Route path="/tarjetas-solicitadas" element={<RequestedCards applications={applications} setApplications={setApplications} setApprovedCards={setApprovedCards} />} />
          <Route path="/tarjetas-aprobadas" element={<ApprovedCards approvedCards={approvedCards} setApprovedCards={setApprovedCards} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;