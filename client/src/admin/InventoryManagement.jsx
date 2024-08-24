import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from '../admin/AdminSidebar';

const InventoryManagement = () => {
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
              <span className="block">Inventory</span>
              <span className="block">Management</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Supplies Management */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-box-open text-teal-600 text-4xl mr-4"></i> {/* Box Open Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Supplies Management
                  </h2>
                </div>
                <p className="text-gray-600">Manage and track supplies inventory.</p>
              </div>
            </Link>

            {/* Equipment Inventory */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-tools text-orange-600 text-4xl mr-4"></i> {/* Tools Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Equipment Inventory
                  </h2>
                </div>
                <p className="text-gray-600">Track and manage equipment inventory.</p>
              </div>
            </Link>

            {/* Low Stock Alerts */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-exclamation-triangle text-red-600 text-4xl mr-4"></i> {/* Exclamation Triangle Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Low Stock Alerts
                  </h2>
                </div>
                <p className="text-gray-600">Get notified about low stock levels.</p>
              </div>
            </Link>

            {/* Purchase Orders */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-receipt text-blue-600 text-4xl mr-4"></i> {/* Receipt Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Purchase Orders
                  </h2>
                </div>
                <p className="text-gray-600">Manage and track purchase orders.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;
