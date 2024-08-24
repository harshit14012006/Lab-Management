import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from '../admin/AdminSidebar';

const ReportsAnalytics = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div>
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="p-6 w-full bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl text-center font-bold text-black">
              <span className="block">Reports</span>
              <span className="block">and Analytics</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Test Reports */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-file-alt text-blue-600 text-4xl mr-4"></i> {/* File Alt Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Test Reports
                  </h2>
                </div>
                <p className="text-gray-600">Generate and view test reports.</p>
              </div>
            </Link>

            {/* Financial Reports */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-chart-line text-green-600 text-4xl mr-4"></i> {/* Chart Line Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Financial Reports
                  </h2>
                </div>
                <p className="text-gray-600">View and analyze financial data.</p>
              </div>
            </Link>

            {/* Usage Statistics */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-chart-pie text-orange-600 text-4xl mr-4"></i> {/* Chart Pie Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Usage Statistics
                  </h2>
                </div>
                <p className="text-gray-600">Analyze usage patterns and trends.</p>
              </div>
            </Link>

            {/* Custom Reports */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-file-csv text-purple-600 text-4xl mr-4"></i> {/* File CSV Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Custom Reports
                  </h2>
                </div>
                <p className="text-gray-600">Create and manage custom reports.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;
