import React from "react";
import { Link } from "react-router-dom";
import TechnicianSidebar from '../technician/TechnicianSidebar';

const TechInventoryManagement = () => {
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
              <span className="block">Inventory</span>
              <span className="block">Management</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* View Supplies */}
            <Link to="/view-supplies">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-box-open text-blue-600 text-4xl mr-4"></i> {/* Box Open Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    View Supplies
                  </h2>
                </div>
                <p className="text-gray-600">Check the current inventory of lab supplies.</p>
              </div>
            </Link>

            {/* Update Inventory Levels */}
            <Link to="/update-inventory-levels">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-edit text-green-600 text-4xl mr-4"></i> {/* Edit Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Update Inventory Levels
                  </h2>
                </div>
                <p className="text-gray-600">Adjust the quantities of lab supplies in inventory.</p>
              </div>
            </Link>

            {/* Low Stock Alerts */}
            <Link to="/low-stock-alerts">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-exclamation-triangle text-red-600 text-4xl mr-4"></i> {/* Exclamation Triangle Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Low Stock Alerts
                  </h2>
                </div>
                <p className="text-gray-600">View alerts for supplies that are running low.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechInventoryManagement;
