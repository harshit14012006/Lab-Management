import React from "react";
import UserSidebar from './UserSidebar';
import { Link } from "react-router-dom";

const TestResults = () => {
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
              <span className="block">Test Results</span>
              <span className="block">Management</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* View Recent Results */}
            <Link to="/view-recent-results">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-file-medical text-blue-600 text-4xl mr-4"></i> {/* Medical File Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    View Recent Results
                  </h2>
                </div>
                <p className="text-gray-600">Check your most recent test results.</p>
              </div>
            </Link>

            {/* Download Reports */}
            <Link to="/download-reports">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-download text-green-600 text-4xl mr-4"></i> {/* Download Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Download Reports
                  </h2>
                </div>
                <p className="text-gray-600">Download your test reports.</p>
              </div>
            </Link>

            {/* Request Reprints */}
            <Link to="/request-reprints">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-print text-orange-600 text-4xl mr-4"></i> {/* Print Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Request Reprints
                  </h2>
                </div>
                <p className="text-gray-600">Request a reprint of your test results.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResults;
