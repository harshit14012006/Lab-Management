import React from "react";
import UserSidebar from './UserSidebar';
import { Link } from "react-router-dom";

const BillingPayments = () => {
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
              <span className="block">Billing &</span>
              <span className="block">Payments</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* View Billing History */}
            <Link to="/view-billing-history">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-file-invoice-dollar text-blue-600 text-4xl mr-4"></i> {/* Invoice Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    View Billing History
                  </h2>
                </div>
                <p className="text-gray-600">Review your billing and payment history.</p>
              </div>
            </Link>

            {/* Make Payments */}
            <Link to="/make-payments">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-credit-card text-green-600 text-4xl mr-4"></i> {/* Credit Card Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Make Payments
                  </h2>
                </div>
                <p className="text-gray-600">Pay your outstanding bills.</p>
              </div>
            </Link>

            {/* Payment Receipts */}
            <Link to="/payment-receipts">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-receipt text-orange-600 text-4xl mr-4"></i> {/* Receipt Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Payment Receipts
                  </h2>
                </div>
                <p className="text-gray-600">Download your payment receipts.</p>
              </div>
            </Link>

            {/* Manage Billing Information */}
            <Link to="/manage-billing-info">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-user-cog text-purple-600 text-4xl mr-4"></i> {/* User Settings Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Manage Billing Information
                  </h2>
                </div>
                <p className="text-gray-600">Update your billing details.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPayments;
