import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from '../admin/AdminSidebar';

const TestManagement = () => {
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
              <span className="block">Test</span>
              <span className="block">Management</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Add New Tests */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-plus-circle text-blue-600 text-4xl mr-4"></i> {/* Plus Circle Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Add New Tests
                  </h2>
                </div>
                <p className="text-gray-600">Add new tests to the system.</p>
              </div>
            </Link>

            {/* Manage Existing Tests */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-list text-green-600 text-4xl mr-4"></i> {/* List Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Manage Existing Tests
                  </h2>
                </div>
                <p className="text-gray-600">View and update tests already in the system.</p>
              </div>
            </Link>

            {/* Test Processing Status */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-tachometer-alt text-yellow-600 text-4xl mr-4"></i> {/* Tachometer Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Test Processing Status
                  </h2>
                </div>
                <p className="text-gray-600">Monitor the status of test processing.</p>
              </div>
            </Link>

            {/* Test Result Verification */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-check-circle text-purple-600 text-4xl mr-4"></i> {/* Check Circle Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Test Result Verification
                  </h2>
                </div>
                <p className="text-gray-600">Verify the results of completed tests.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestManagement;
