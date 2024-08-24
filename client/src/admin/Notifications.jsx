import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from '../admin/AdminSidebar';

const Notifications = () => {
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
              <span className="block">Notifications</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* System Notifications */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-bell text-blue-600 text-4xl mr-4"></i> {/* Bell Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    System Notifications
                  </h2>
                </div>
                <p className="text-gray-600">Manage and review system notifications.</p>
              </div>
            </Link>

            {/* Task Alerts */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-tasks text-green-600 text-4xl mr-4"></i> {/* Tasks Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Task Alerts
                  </h2>
                </div>
                <p className="text-gray-600">View and manage alerts for tasks.</p>
              </div>
            </Link>

            {/* Maintenance Alerts */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-tools text-orange-600 text-4xl mr-4"></i> {/* Tools Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Maintenance Alerts
                  </h2>
                </div>
                <p className="text-gray-600">Receive and manage maintenance-related alerts.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
