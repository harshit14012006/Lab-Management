import React from 'react';
import UserSidebar from './UserSidebar';

const PatientDashboard = () => {
  return (
    <div className="min-h-screen flex">
      <div>
        <UserSidebar />
      </div>

      {/* Main Content */}
      <div className="p-6 w-full bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl text-center font-bold text-gray-800">
              Patient Dashboard
            </h1>
          </header>

          {/* Dashboard Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Upcoming Tests */}
            <div className="bg-white shadow-lg border rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming Tests</h2>
              <ul className="space-y-4">
                {/* Test Item */}
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Blood Test</span>
                  <span className="text-gray-600">10:00 AM - Tomorrow</span>
                </li>
                {/* Test Item */}
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">X-Ray</span>
                  <span className="text-gray-600">1:00 PM - In 2 Days</span>
                </li>
              </ul>
            </div>

            {/* Appointments */}
            <div className="bg-white shadow-lg border rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Appointments</h2>
              <ul className="space-y-4">
                {/* Appointment Item */}
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Dr. Smith</span>
                  <span className="text-gray-600">9:00 AM - Today</span>
                </li>
                {/* Appointment Item */}
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Dr. Johnson</span>
                  <span className="text-gray-600">11:00 AM - Tomorrow</span>
                </li>
              </ul>
            </div>

            {/* Recent Activities */}
            <div className="bg-white shadow-lg border rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
              <ul className="space-y-4">
                {/* Activity Item */}
                <li className="flex items-center">
                  <i className="fas fa-user-plus text-blue-600 text-xl mr-3"></i>
                  <p className="text-gray-700">New test booked for John Doe.</p>
                </li>
                {/* Activity Item */}
                <li className="flex items-center">
                  <i className="fas fa-calendar-check text-green-600 text-xl mr-3"></i>
                  <p className="text-gray-700">Appointment with Dr. Smith confirmed.</p>
                </li>
                {/* Activity Item */}
                <li className="flex items-center">
                  <i className="fas fa-calendar-times text-orange-600 text-xl mr-3"></i>
                  <p className="text-gray-700">Test for Jane Smith rescheduled.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Billing Information */}
            <div className="bg-white shadow-lg border rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Billing Information</h2>
              <p className="text-gray-600">View your billing history, manage payments, and update your billing details.</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Manage Billing
              </button>
            </div>

            {/* Notifications */}
            <div className="bg-white shadow-lg border rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notifications</h2>
              <p className="text-gray-600">Stay updated with appointment reminders, test result notifications, and system alerts.</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                View Notifications
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
