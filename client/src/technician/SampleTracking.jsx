import React from "react";
import { Link } from "react-router-dom";
import TechnicianSidebar from '../technician/TechnicianSidebar';

const SampleTracking = () => {
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
              <span className="block">Sample</span>
              <span className="block">Tracking</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* View Sample Status */}
            <Link to="/view-sample-status">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-eye text-blue-600 text-4xl mr-4"></i> {/* Eye Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    View Sample Status
                  </h2>
                </div>
                <p className="text-gray-600">Check the current status of all samples.</p>
              </div>
            </Link>

            {/* Update Sample Information */}
            <Link to="/update-sample-info">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-edit text-green-600 text-4xl mr-4"></i> {/* Edit Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Update Sample Information
                  </h2>
                </div>
                <p className="text-gray-600">Edit and update the information of samples.</p>
              </div>
            </Link>

            {/* Track Sample Locations */}
            <Link to="/track-sample-locations">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-map-marker-alt text-red-600 text-4xl mr-4"></i> {/* Location Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Track Sample Locations
                  </h2>
                </div>
                <p className="text-gray-600">Monitor the locations of samples in transit.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleTracking;
