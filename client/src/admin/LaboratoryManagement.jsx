import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from '../admin/AdminSidebar';

const LaboratoryManagement = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div>
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl text-center font-bold text-gray-800">
              <span className="block">Laboratory</span>
              <span className="block">Management</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                <i className="fas fa-vials text-blue-600 text-4xl mr-4"></i>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Manage Lab Details
                  </h2>
                </div>
                <p className="text-gray-600">Add, edit, or remove lab details.</p>
              </div>
            </Link>

            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-tools text-red-600 text-4xl mr-4"></i>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Equipment Management
                  </h2>
                </div>
                <p className="text-gray-600">
                  Manage laboratory equipment and inventory.
                </p>
              </div>
            </Link>

            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-flask text-green-600 text-4xl mr-4"></i>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Test Categories
                  </h2>
                </div>
                <p className="text-gray-600">
                  Define and manage different test categories.
                </p>
              </div>
            </Link>

            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-vial text-purple-600 text-4xl mr-4"></i>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Sample Management
                  </h2>
                </div>
                <p className="text-gray-600">
                  Track and manage lab samples efficiently.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaboratoryManagement;
