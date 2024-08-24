import React, { useState } from "react";
import {
  FaMicroscope,
  FaUserShield,
  FaTools,
  FaFileInvoiceDollar,
  FaLock,
  FaQuestionCircle,
  FaTimes,
} from "react-icons/fa";
import AdminSidebar from "../admin/AdminSidebar";

const SupportHelp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const handleCardClick = (title, content) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-gray-100 to-gray-200">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-8">
        {/* Help & Support Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Lab Management Help Center</h2>
          <p className="text-gray-700 mb-8">
            Explore our articles and guides to assist you with managing your lab operations. Browse through the categories below or search for specific help topics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleCardClick("Lab Setup", "Learn how to set up and organize your lab equipment and supplies effectively.")}
            >
              <FaMicroscope className="text-blue-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Lab Setup</h3>
              <p className="text-gray-600">
                Learn how to set up and organize your lab equipment and supplies effectively.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleCardClick("Account Management", "Manage user accounts, roles, and access permissions within the lab.")}
            >
              <FaUserShield className="text-green-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Account Management</h3>
              <p className="text-gray-600">
                Manage user accounts, roles, and access permissions within the lab.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleCardClick("Equipment Maintenance", "Find tips on maintaining lab equipment and troubleshooting common issues.")}
            >
              <FaTools className="text-red-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Equipment Maintenance</h3>
              <p className="text-gray-600">
                Find tips on maintaining lab equipment and troubleshooting common issues.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleCardClick("Inventory Management", "Get assistance with managing lab inventory, ordering supplies, and tracking usage.")}
            >
              <FaFileInvoiceDollar className="text-yellow-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Inventory Management</h3>
              <p className="text-gray-600">
                Get assistance with managing lab inventory, ordering supplies, and tracking usage.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleCardClick("Safety & Compliance", "Learn how to ensure lab safety and comply with regulatory standards.")}
            >
              <FaLock className="text-purple-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety & Compliance</h3>
              <p className="text-gray-600">
                Learn how to ensure lab safety and comply with regulatory standards.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleCardClick("FAQs", "Browse frequently asked questions for quick answers and solutions.")}
            >
              <FaQuestionCircle className="text-indigo-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">FAQs</h3>
              <p className="text-gray-600">
                Browse frequently asked questions for quick answers and solutions.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{modalContent.title}</h2>
              <button onClick={closeModal} className="text-gray-600 hover:text-gray-900">
                <FaTimes className="text-2xl" />
              </button>
            </div>
            <div className="text-gray-700">{modalContent.content}</div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportHelp;
