import React from "react";
import { Link } from "react-router-dom";
import TechnicianSidebar from '../technician/TechnicianSidebar';

const TechTestManagement = () => {
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
              <span className="block">Test</span>
              <span className="block">Management</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* View Assigned Tests */}
            <Link to="/view-assigned-tests">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-tasks text-blue-600 text-4xl mr-4"></i> {/* Tasks Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    View Assigned Tests
                  </h2>
                </div>
                <p className="text-gray-600">View all tests that are assigned to you.</p>
              </div>
            </Link>

            {/* Process Tests */}
            <Link to="/process-tests">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-flask text-green-600 text-4xl mr-4"></i> {/* Flask Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Process Tests
                  </h2>
                </div>
                <p className="text-gray-600">Start processing the tests assigned to you.</p>
              </div>
            </Link>

            {/* Update Test Status */}
            <Link to="/update-test-status">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-sync-alt text-yellow-600 text-4xl mr-4"></i> {/* Sync Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Update Test Status
                  </h2>
                </div>
                <p className="text-gray-600">Update the status of ongoing tests.</p>
              </div>
            </Link>

            {/* Test Result Entry */}
            <Link to="/test-result-entry">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-clipboard-check text-purple-600 text-4xl mr-4"></i> {/* Clipboard Check Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Test Result Entry
                  </h2>
                </div>
                <p className="text-gray-600">Enter and verify the results of processed tests.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechTestManagement;
