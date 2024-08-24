import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaTachometerAlt, FaUsers, FaFlask, FaListAlt, FaBox, FaCalendarAlt, FaFileAlt, FaBell, FaCog, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
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
              <div>Admin</div>
              <div>Panel</div>
            </h1>
          </div>

          <ul className="space-y-6 flex-grow">
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/amdin-dashboard")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaTachometerAlt className="text-xl" />
              <Link to="/admin-dashboard">Dashboard Overview</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/user-management")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaUsers className="text-xl" />
              <Link to="/user-management">User Management</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/lab-management")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaFlask className="text-xl" />
              <Link to="/lab-management">Laboratory Management</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/test-management")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaListAlt className="text-xl" />
              <Link to="/test-management">Test Management</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/inventory-management")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaBox className="text-xl" />
              <Link to="/inventory-management">Inventory Management</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/appointments")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaCalendarAlt className="text-xl" />
              <Link to="/appointments">Appointment Management</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/reports")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaFileAlt className="text-xl" />
              <Link to="/reports">Reports & Analytics</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/billing")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaBox className="text-xl" />
              <Link to="/billing">Billing & Invoices</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/notifications")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaBell className="text-xl" />
              <Link to="/notifications">Notifications & Alerts</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/settings")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaCog className="text-xl" />
              <Link to="/settings">Settings</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/support")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaQuestionCircle className="text-xl" />
              <Link to="/support">Support & Help</Link>
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

export default Sidebar;
