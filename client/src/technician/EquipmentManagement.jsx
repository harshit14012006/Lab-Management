import React from "react";
import { Link } from "react-router-dom";
import TechnicianSidebar from '../technician/TechnicianSidebar';

const EquipmentManagement = () => {
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
              <span className="block">Equipment</span>
              <span className="block">Management</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Equipment Usage Log */}
            <Link to="/equipment-usage-log">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-history text-blue-600 text-4xl mr-4"></i> {/* History Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Equipment Usage Log
                  </h2>
                </div>
                <p className="text-gray-600">View the log of equipment usage in the lab.</p>
              </div>
            </Link>

            {/* Maintenance Requests */}
            <Link to="/maintenance-requests">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-tools text-green-600 text-4xl mr-4"></i> {/* Tools Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Maintenance Requests
                  </h2>
                </div>
                <p className="text-gray-600">Submit or view maintenance requests for equipment.</p>
              </div>
            </Link>

            {/* Equipment Status */}
            <Link to="/equipment-status">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-info-circle text-red-600 text-4xl mr-4"></i> {/* Info Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Equipment Status
                  </h2>
                </div>
                <p className="text-gray-600">Check the current status of lab equipment.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentManagement;
