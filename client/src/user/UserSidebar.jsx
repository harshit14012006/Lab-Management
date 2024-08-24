import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaTachometerAlt, FaFlask, FaCalendarAlt, FaMoneyBillWave, FaUser, FaBell, FaCog, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

const UserSidebar = () => {
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
              <div>Patient</div>
              <div>Panel</div>
            </h1>
          </div>

          <ul className="space-y-6 flex-grow">
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/user-dashboard")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaTachometerAlt className="text-xl" />
              <Link to="/user-dashboard">Dashboard Overview</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/book-a-test")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaFlask className="text-xl" />
              <Link to="/book-a-test">Book a Test</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/test-results")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaCalendarAlt className="text-xl" />
              <Link to="/test-results">Test Results</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/user-appointments")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaCalendarAlt className="text-xl" />
              <Link to="/user-appointments">Appointments</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/user-billing-payments")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaMoneyBillWave className="text-xl" />
              <Link to="/user-billing-payments">Billing & Payments</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/user-profile")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaUser className="text-xl" />
              <Link to="/user-profile">Profile</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/user-notifications")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaBell className="text-xl" />
              <Link to="/user-notifications">Notifications</Link>
            </li>
            <li
              className={`flex items-center space-x-2 hover:bg-gray-700 p-3 rounded ${
                isActive("/user-supporthelp")
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-300"
              } font-semibold shadow-lg`}
            >
              <FaQuestionCircle className="text-xl" />
              <Link to="/user-supporthelp">Support & Help</Link>
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

export default UserSidebar;
