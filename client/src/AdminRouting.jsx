import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Settings from './admin/Settings';
import Reports from './admin/Reports';
import UserManagement from './admin/UserManagement.jsx';
import LaboratoryManagement from './admin/LaboratoryManagement';
import TestManagement from './admin/TestManagement';
import InventoryManagement from './admin/InventoryManagement'
import AppointmentManagement from './admin/AppointmentManagement'
import ReportsAnalytics from './admin/ReportsAnalytics'
import BillingInvoices from './admin/BillingsInvoices'
import Notifications from './admin/Notifications'
import SupportHelp from './admin/SupportHelp'
import AdminDashboard from './admin/AdminDashboard';
import AppSettings from './settings/AppSettings.jsx';
// Import other components as needed

const AdminRouting = () => {
  return (
    <div>
    <div >
      {/* Sidebar
      <AdminSidebar /> */}

     
    
        <Routes>
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/user-management' element={<UserManagement />} />
        <Route path='/lab-management' element={<LaboratoryManagement />} />
        <Route path='/test-management' element={<TestManagement />} />
        <Route path='/inventory-management' element={<InventoryManagement />} />
        <Route path='/appointments' element={<AppointmentManagement />} />
        <Route path='/reports' element={<ReportsAnalytics />} />
        <Route path='/billing' element={<BillingInvoices />} />
        <Route path='/reports' element={<ReportsAnalytics />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/support' element={<SupportHelp />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/general-settings' element={<AppSettings />} />
          {/* Add other routes as needed */}
        </Routes>
      


    </div>
    <Footer />
    </div>
  );
};

export default AdminRouting;
