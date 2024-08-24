import React from "react";
import UserSidebar from './UserSidebar';
import { Link } from "react-router-dom";

const Profile = () => {
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
              <span className="block">Profile</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* View Profile Details */}
            <Link to="/view-profile-details">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-user text-blue-600 text-4xl mr-4"></i> {/* User Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    View Profile Details
                  </h2>
                </div>
                <p className="text-gray-600">Review your personal profile details.</p>
              </div>
            </Link>

            {/* Update Personal Information */}
            <Link to="/update-personal-info">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-edit text-green-600 text-4xl mr-4"></i> {/* Edit Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Update Personal Information
                  </h2>
                </div>
                <p className="text-gray-600">Edit and update your personal information.</p>
              </div>
            </Link>

            {/* Change Password */}
            <Link to="/change-password">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-key text-orange-600 text-4xl mr-4"></i> {/* Key Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Change Password
                  </h2>
                </div>
                <p className="text-gray-600">Change your account password.</p>
              </div>
            </Link>

            {/* Medical History */}
            <Link to="/medical-history">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-notes-medical text-purple-600 text-4xl mr-4"></i> {/* Medical Notes Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Medical History
                  </h2>
                </div>
                <p className="text-gray-600">View your medical history.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
