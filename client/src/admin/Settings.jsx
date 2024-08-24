import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from '../admin/AdminSidebar';

const Settings = () => {
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
              <span className="block">Settings</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* General Settings */}
            <Link to="/general-settings">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-cogs text-blue-600 text-4xl mr-4"></i> {/* Cogs Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    General Settings
                  </h2>
                </div>
                <p className="text-gray-600">Configure general application settings.</p>
              </div>
            </Link>

            {/* Profile Settings */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-user-cog text-green-600 text-4xl mr-4"></i> {/* User Cog Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Profile Settings
                  </h2>
                </div>
                <p className="text-gray-600">Manage and update user profile settings.</p>
              </div>
            </Link>

            {/* Notification Settings */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-bell text-yellow-600 text-4xl mr-4"></i> {/* Bell Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Notification Settings
                  </h2>
                </div>
                <p className="text-gray-600">Customize notification preferences.</p>
              </div>
            </Link>

            {/* Security Settings */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-lock text-red-600 text-4xl mr-4"></i> {/* Lock Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Security Settings
                  </h2>
                </div>
                <p className="text-gray-600">Manage security and privacy settings.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
