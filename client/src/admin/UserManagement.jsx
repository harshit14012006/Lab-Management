import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from './AdminSidebar';

const UserManagement = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div>
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl text-center font-bold text-gray-800">
              <span className="block">User</span>
              <span className="block">Management</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-flask text-red-600 text-4xl mr-4"></i>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Manage Lab Staff
                  </h2>
                </div>
                <p className="text-gray-600">Add, edit, or remove lab staff.</p>
              </div>
            </Link>

            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-user-injured text-green-600 text-4xl mr-4"></i>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Manage Patients
                  </h2>
                </div>
                <p className="text-gray-600">
                  View, update, and manage patient information.
                </p>
              </div>
            </Link>

            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-tools text-yellow-600 text-4xl mr-4"></i>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Manage Technicians
                  </h2>
                </div>
                <p className="text-gray-600">
                  Assign tasks and manage technician schedules.
                </p>
              </div>
            </Link>

            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-user-md text-blue-600 text-4xl mr-4"></i>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Manage Doctors
                  </h2>
                </div>
                <p className="text-gray-600">
                  Assign roles and manage doctors' schedules.
                </p>
              </div>
            </Link>

            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-user-shield text-purple-600 text-4xl mr-4"></i>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Roles & Permissions
                  </h2>
                </div>
                <p className="text-gray-600">
                  Manage user roles and permissions within the system.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
