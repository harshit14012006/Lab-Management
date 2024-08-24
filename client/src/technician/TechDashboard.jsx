import React from 'react';
import TechnicianSidebar from './TechnicianSidebar';
import { FaCheckCircle, FaFlask, FaFileAlt, FaTasks, FaBell } from 'react-icons/fa';

const LabTechnicianDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <div>
        <TechnicianSidebar />
      </div>

      {/* Main Content */}
      <div className="p-6 w-full">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl text-center font-bold text-gray-800">
              Lab Technician Dashboard
            </h1>
          </header>

          {/* Dashboard Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Quick Summary */}
            <div className="bg-white shadow-lg border rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaTasks className="text-blue-600 mr-2" />
                Quick Summary
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Total Tests Conducted</span>
                  <span className="text-gray-600">120</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Tests Pending</span>
                  <span className="text-gray-600">15</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Reports Generated</span>
                  <span className="text-gray-600">105</span>
                </li>
              </ul>
            </div>

            {/* Pending Tests */}
            <div className="bg-white shadow-lg border rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaFlask className="text-blue-600 mr-2" />
                Pending Tests
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Blood Test - John Doe</span>
                  <span className="text-gray-600">10:00 AM - Today</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">X-Ray - Jane Smith</span>
                  <span className="text-gray-600">1:00 PM - Today</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">MRI - Bob Johnson</span>
                  <span className="text-gray-600">3:00 PM - Today</span>
                </li>
              </ul>
            </div>

            {/* Recent Activities */}
            <div className="bg-white shadow-lg border rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaCheckCircle className="text-green-600 mr-2" />
                Recent Activities
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-600 text-xl mr-3" />
                  <p className="text-gray-700">Completed blood test for John Doe.</p>
                </li>
                <li className="flex items-center">
                  <FaFlask className="text-blue-600 text-xl mr-3" />
                  <p className="text-gray-700">Initiated X-Ray for Jane Smith.</p>
                </li>
                <li className="flex items-center">
                  <FaFileAlt className="text-yellow-600 text-xl mr-3" />
                  <p className="text-gray-700">Generated report for MRI test of Bob Johnson.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Task Management */}
            <div className="bg-white shadow-lg border rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaTasks className="text-blue-600 mr-2" />
                Task Management
              </h2>
              <p className="text-gray-600">Organize and prioritize your daily tasks.</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Manage Tasks
              </button>
            </div>

            {/* Notifications */}
            <div className="bg-white shadow-lg border rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaBell className="text-blue-600 mr-2" />
                Notifications
              </h2>
              <p className="text-gray-600">Stay updated with test alerts, report generation, and system updates.</p>
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

export default LabTechnicianDashboard;
