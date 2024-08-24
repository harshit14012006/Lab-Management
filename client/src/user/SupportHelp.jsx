import React from "react";
import UserSidebar from './UserSidebar';
import { Link } from "react-router-dom";

const Support = () => {
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
              <span className="block">Support</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Contact Support */}
            <Link to="/contact-support">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-headset text-blue-600 text-4xl mr-4"></i> {/* Headset Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Contact Support
                  </h2>
                </div>
                <p className="text-gray-600">Get in touch with our support team for assistance.</p>
              </div>
            </Link>

            {/* Access Help Resources */}
            <Link to="/help-resources">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-book text-green-600 text-4xl mr-4"></i> {/* Book Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Access Help Resources
                  </h2>
                </div>
                <p className="text-gray-600">Explore articles, guides, and other resources to help you.</p>
              </div>
            </Link>

            {/* FAQs */}
            <Link to="/faqs">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-question-circle text-orange-600 text-4xl mr-4"></i> {/* Question Circle Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    FAQs
                  </h2>
                </div>
                <p className="text-gray-600">Find answers to frequently asked questions.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
