import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeManagement from './components/EmployeeManagement';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EmployeeManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
