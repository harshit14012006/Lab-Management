import React from "react";
import { Link } from "react-router-dom";
import TechnicianSidebar from '../technician/TechnicianSidebar';

const Profile = () => {
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
              <span className="block">Profile</span>
              <span className="block">Management</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* View Profile */}
            <Link to="/view-profile">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300 ">
                <div className="flex items-center mb-4">
                  <i className="fas fa-user text-blue-600 text-4xl mr-4"></i> {/* User Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    View Profile
                  </h2>
                </div>
                <p className="text-gray-600">View your profile details and update your personal information if necessary.</p>
              </div>
            </Link>

            {/* Update Personal Information */}
            <Link to="/update-personal-information">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300 ">
                <div className="flex items-center mb-4">
                  <i className="fas fa-edit text-green-600 text-4xl mr-4"></i> {/* Edit Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Update Personal Information
                  </h2>
                </div>
                <p className="text-gray-600">Update your personal details, including contact information and address.</p>
              </div>
            </Link>

            {/* Change Password */}
            <Link to="/change-password">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300  col-span-2 sm:col-span-1">
                <div className="flex items-center mb-4">
                  <i className="fas fa-lock text-red-600 text-4xl mr-4"></i> {/* Lock Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Change Password
                  </h2>
                </div>
                <p className="text-gray-600">Change your current password to enhance account security.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
