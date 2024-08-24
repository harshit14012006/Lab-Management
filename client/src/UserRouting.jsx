import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import UserSidebar from './admin/UserSidebar';
import Footer from './components/Footer';
import UserDashboard from './user/UserDashboard';
import BookTest from './user/BookTest'
import TestResults from './user/TestResults'
import Appointments from './user/Appointments'
import BillingsPayments from './user/BillingsPayments'
import Profile from './user/Profile'
import Notifications from './user/Notifications'
import SupportHelp from './user/SupportHelp'
// Import other components as needed

const AdminRouting = () => {
  return (
    <div>
    <div >
      {/* Sidebar
      <UserSidebar /> */}
        <Routes>
        <Route path='/user-dashboard' element={<UserDashboard />} />
        <Route path='/book-a-test' element={<BookTest />} />
        <Route path='/test-results' element={<TestResults />} />
        <Route path='/user-appointments' element={<Appointments />} />
        <Route path='/user-billing-payments' element={<BillingsPayments />} />
        <Route path='/user-profile' element={<Profile />} />
        <Route path='/user-notifications' element={<Notifications />} />
        <Route path='/user-supporthelp' element={<SupportHelp />} />
          {/* Add other routes as needed */}
        </Routes>
      


    </div>
    <Footer />
    </div>
  );
};

export default AdminRouting;
