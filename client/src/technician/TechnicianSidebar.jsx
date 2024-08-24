import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaFlask,
  FaVial,
  FaMicroscope,
  FaBoxes,
  FaUserCheck,
  FaFileAlt,
  FaBell,
  FaUserCircle,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const TechnicianSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      {/* Hamburger Button for Mobile Menu */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-full shadow-lg"
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 h-full p-4 shadow-lg fixed top-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="relative mb-6">
            <h1 className="text-2xl font-bold text-center">
              <div>Technician</div>
              <div>Panel</div>
            </h1>
          </div>

          <ul className="space-y-6 flex-grow">
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/technician-dashboard")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaTachometerAlt className="text-xl" />
              <Link to="/technician-dashboard">Dashboard Overview</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/technician-test-management")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaFlask className="text-xl" />
              <Link to="/technician-test-management">Test Management</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/sample-tracking")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaVial className="text-xl" />
              <Link to="/sample-tracking">Sample Tracking</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/equipment-management")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaMicroscope className="text-xl" />
              <Link to="/equipment-management">Equipment Management</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/technician-inventory-management")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaBoxes className="text-xl" />
              <Link to="/technician-inventory-management">Inventory Management</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/technician-appointments")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaUserCheck className="text-xl" />
              <Link to="/technician-appointments">Appointments</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/reports-logs")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaFileAlt className="text-xl" />
              <Link to="/reports-logs">Reports & Logs</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/technician-notifications")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaBell className="text-xl" />
              <Link to="/technician-notifications">Notifications</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/technician-profile")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaUserCircle className="text-xl" />
              <Link to="/technician-profile">Profile</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/help-support")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaQuestionCircle className="text-xl" />
              <Link to="/help-support">Help & Support</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/logout")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaSignOutAlt className="text-xl" />
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default TechnicianSidebar;
