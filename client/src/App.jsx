import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="content flex-1">
        <Topbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
