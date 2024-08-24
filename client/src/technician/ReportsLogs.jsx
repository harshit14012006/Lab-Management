import React from "react";
import { Link } from "react-router-dom";
import TechnicianSidebar from '../technician/TechnicianSidebar';

const ReportsLogs = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div>
        <TechnicianSidebar />
      </div>

      {/* Main Content */}
      <div className="p-6 w-full bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl text-center font-bold text-black">
              <span className="block">Reports & Logs</span>
              <span className="block">Management</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Daily Test Reports */}
            <Link to="/daily-test-reports">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300 h-40">
                <div className="flex items-center mb-4">
                  <i className="fas fa-calendar-day text-orange-600 text-4xl mr-4"></i> {/* Calendar Day Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Daily Test Reports
                  </h2>
                </div>
                <p className="text-gray-600">View and analyze daily reports of test activities.</p>
              </div>
            </Link>

            {/* Equipment Usage Logs */}
            <Link to="/equipment-usage-logs">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300 h-40">
                <div className="flex items-center mb-4">
                  <i className="fas fa-tools text-blue-600 text-4xl mr-4"></i> {/* Tools Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Equipment Usage Logs
                  </h2>
                </div>
                <p className="text-gray-600">Review logs of equipment usage for maintenance and performance tracking.</p>
              </div>
            </Link>

            {/* Sample Processing Logs */}
            <Link to="/sample-processing-logs">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300  col-span-2 sm:col-span-1">
                <div className="flex items-center mb-4">
                  <i className="fas fa-clipboard-list text-teal-600 text-4xl mr-4"></i> {/* Clipboard List Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Sample Processing Logs
                  </h2>
                </div>
                <p className="text-gray-600">Track and review logs related to sample processing activities.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsLogs;
