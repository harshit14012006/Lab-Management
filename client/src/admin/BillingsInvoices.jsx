import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from '../admin/AdminSidebar';

const BillingInvoices = () => {
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
              <span className="block">Billing</span>
              <span className="block">and Invoices</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Manage Payments */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-credit-card text-blue-600 text-4xl mr-4"></i> {/* Credit Card Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Manage Payments
                  </h2>
                </div>
                <p className="text-gray-600">Oversee and process payments.</p>
              </div>
            </Link>

            {/* Generate Invoices */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-file-invoice text-green-600 text-4xl mr-4"></i> {/* File Invoice Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Generate Invoices
                  </h2>
                </div>
                <p className="text-gray-600">Create and issue invoices to clients.</p>
              </div>
            </Link>

            {/* Billing History */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-history text-orange-600 text-4xl mr-4"></i> {/* History Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Billing History
                  </h2>
                </div>
                <p className="text-gray-600">View past billing activities and transactions.</p>
              </div>
            </Link>

            {/* Refunds & Disputes */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-exchange-alt text-red-600 text-4xl mr-4"></i> {/* Exchange Alt Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Refunds & Disputes
                  </h2>
                </div>
                <p className="text-gray-600">Handle refunds and manage disputes.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingInvoices;
