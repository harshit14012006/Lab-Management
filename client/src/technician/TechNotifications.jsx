import React from "react";
import { Link } from "react-router-dom";
import TechnicianSidebar from '../technician/TechnicianSidebar';

const Notifications = () => {
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
              <span className="block">Notifications</span>
              <span className="block">Center</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Alerts & Reminders */}
            <Link to="/alerts-reminders">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <i className="fas fa-bell text-red-600 text-4xl mr-4"></i> {/* Bell Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Alerts & Reminders
                  </h2>
                </div>
                <p className="text-gray-600">View and manage alerts and reminders for important events and deadlines.</p>
              </div>
            </Link>

            {/* Task Assignments */}
            <Link to="/task-assignments">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <i className="fas fa-tasks text-blue-600 text-4xl mr-4"></i> {/* Tasks Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Task Assignments
                  </h2>
                </div>
                <p className="text-gray-600">Track and manage assigned tasks, including due dates and progress.</p>
              </div>
            </Link>

            {/* System Notifications */}
            <Link to="/system-notifications">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between col-span-2 sm:col-span-1">
                <div className="flex items-center mb-4">
                  <i className="fas fa-cogs text-teal-600 text-4xl mr-4"></i> {/* Cogs Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    System Notifications
                  </h2>
                </div>
                <p className="text-gray-600">Stay updated with system notifications, including updates and alerts.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
