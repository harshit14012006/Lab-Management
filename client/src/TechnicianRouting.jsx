import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import TechDashboard from './technician/TechDashboard';
import TechTestManagement from './technician/TechTestManagement';
import SampleTracking from './technician/SampleTracking';
import EquipmentManagement from './technician/EquipmentManagement';
import TechInventoryManagement from './technician/TechInventoryManagement';
import TechAppointments from './technician/TechAppointments';
import ReportsLogs from './technician/ReportsLogs';
import TechNotifications from './technician/TechNotifications';
import TechProfile from './technician/TechProfile';
import TechHelpSupport from './technician/TechHelpSupport';
// Import other components as needed

const TechnicianRouting = () => {
  return (
    <div>
    <div >
        <Routes>
        <Route path='/technician-dashboard' element={<TechDashboard />} />
        <Route path='/technician-test-management' element={<TechTestManagement />} />
        <Route path='/sample-tracking' element={<SampleTracking />} />
        <Route path='/equipment-management' element={<EquipmentManagement />} />
        <Route path='/technician-inventory-management' element={<TechInventoryManagement />} />
        <Route path='/technician-appointments' element={<TechAppointments />} />
        <Route path='/reports-logs' element={<ReportsLogs />} />
        <Route path='/technician-notifications' element={<TechNotifications />} />
        <Route path='/technician-profile' element={<TechProfile />} />
        <Route path='/help-support' element={<TechHelpSupport />} />
          {/* Add other routes as needed */}
        </Routes>
    </div>
    <Footer />
    </div>
  );
};

export default TechnicianRouting;
