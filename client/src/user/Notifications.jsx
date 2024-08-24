import React from "react";
import UserSidebar from './UserSidebar';
import { Link } from "react-router-dom";

const Notifications = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div>
        <UserSidebar />
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
            {/* Appointment Reminders */}
            <Link to="/appointment-reminders">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-bell text-blue-600 text-4xl mr-4"></i> {/* Bell Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Appointment Reminders
                  </h2>
                </div>
                <p className="text-gray-600">Receive reminders for your upcoming appointments.</p>
              </div>
            </Link>

            {/* Test Result Notifications */}
            <Link to="/test-result-notifications">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-file-medical text-green-600 text-4xl mr-4"></i> {/* Medical File Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Test Result Notifications
                  </h2>
                </div>
                <p className="text-gray-600">Get notifications for your latest test results.</p>
              </div>
            </Link>

            {/* System Alerts */}
            <Link to="/system-alerts">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-exclamation-circle text-red-600 text-4xl mr-4"></i> {/* Exclamation Circle Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    System Alerts
                  </h2>
                </div>
                <p className="text-gray-600">Stay informed about important system updates and alerts.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
