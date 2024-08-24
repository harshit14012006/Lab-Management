import React from "react";
import AdminSidebar from './AdminSidebar';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex">
      <div >
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="p-6 w-full bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl text-center font-bold text-black">
              <span className="block">Dashboard</span>
              <span className="block">Overview</span>
            </h1>
          </header>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Metric Card 1 */}
            <div className="bg-white shadow-lg border rounded-lg p-6 flex items-center">
              <i className="fas fa-calendar-day text-blue-600 text-4xl mr-4"></i> {/* Calendar Icon */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Today's Appointments</h2>
                <p className="text-gray-600 text-xl">123</p>
              </div>
            </div>

            {/* Metric Card 2 */}
            <div className="bg-white shadow-lg border rounded-lg p-6 flex items-center">
              <i className="fas fa-procedures text-green-600 text-4xl mr-4"></i> {/* Procedures Icon */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Active Tests</h2>
                <p className="text-gray-600 text-xl">56</p>
              </div>
            </div>

            {/* Metric Card 3 */}
            <div className="bg-white shadow-lg border rounded-lg p-6 flex items-center">
              <i className="fas fa-vials text-orange-600 text-4xl mr-4"></i> {/* Vials Icon */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Sample Count</h2>
                <p className="text-gray-600 text-xl">78</p>
              </div>
            </div>
          </div>

          {/* Lab Statistics */}
          <div className="bg-white shadow-lg border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lab Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Statistics Card 1 */}
              <div className="bg-gray-50 border rounded-lg p-4">
                <h3 className="text-xl font-semibold text-gray-700">Total Tests Conducted</h3>
                <p className="text-gray-600 text-xl">1,234</p>
              </div>

              {/* Statistics Card 2 */}
              <div className="bg-gray-50 border rounded-lg p-4">
                <h3 className="text-xl font-semibold text-gray-700">Total Equipment</h3>
                <p className="text-gray-600 text-xl">45</p>
              </div>

              {/* Statistics Card 3 */}
              <div className="bg-gray-50 border rounded-lg p-4">
                <h3 className="text-xl font-semibold text-gray-700">Pending Requests</h3>
                <p className="text-gray-600 text-xl">12</p>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white shadow-lg border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
            <ul className="space-y-4">
              {/* Activity 1 */}
              <li className="flex items-center">
                <i className="fas fa-user-plus text-blue-600 text-xl mr-3"></i>
                <p className="text-gray-700">New patient John Doe added.</p>
              </li>

              {/* Activity 2 */}
              <li className="flex items-center">
                <i className="fas fa-file-pdf text-green-600 text-xl mr-3"></i>
                <p className="text-gray-700">Test for Jane Smith completed.</p>
              </li>

              {/* Activity 3 */}
              <li className="flex items-center">
                <i className="fas fa-tools text-orange-600 text-xl mr-3"></i>
                <p className="text-gray-700">Lab equipment maintenance scheduled.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
