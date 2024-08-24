import React from "react";
import { Link } from "react-router-dom";
import TechnicianSidebar from '../technician/TechnicianSidebar';

const HelpSupport = () => {
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
              <span className="block">Help & Support</span>
              <span className="block">Center</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Access Help Resources */}
            <Link to="/access-help-resources">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <i className="fas fa-book text-blue-600 text-4xl mr-4"></i> {/* Book Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Access Help Resources
                  </h2>
                </div>
                <p className="text-gray-600">Find and access various help resources and documentation.</p>
              </div>
            </Link>

            {/* Contact Support */}
            <Link to="/contact-support">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <i className="fas fa-phone-alt text-green-600 text-4xl mr-4"></i> {/* Phone Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Contact Support
                  </h2>
                </div>
                <p className="text-gray-600">Get in touch with support for any assistance or issues.</p>
              </div>
            </Link>

            {/* FAQs */}
            <Link to="/faqs">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between col-span-2 sm:col-span-1">
                <div className="flex items-center mb-4">
                  <i className="fas fa-question-circle text-teal-600 text-4xl mr-4"></i> {/* Question Circle Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    FAQs
                  </h2>
                </div>
                <p className="text-gray-600">Browse frequently asked questions to find quick answers.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
