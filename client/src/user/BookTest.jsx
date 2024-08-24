import React from "react";
import { Link } from "react-router-dom";
import UserSidebar from './UserSidebar'

const BookTest = () => {
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
              <span className="block">Test Booking</span>
              <span className="block">Management</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Browse Available Tests */}
            <Link to="/browse-tests">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-vials text-blue-600 text-4xl mr-4"></i> {/* Vials Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Browse Available Tests
                  </h2>
                </div>
                <p className="text-gray-600">Explore and select from a range of available tests.</p>
              </div>
            </Link>

            {/* Schedule a Test */}
            <Link to="/schedule-test">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-calendar-plus text-green-600 text-4xl mr-4"></i> {/* Calendar Plus Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Schedule a Test
                  </h2>
                </div>
                <p className="text-gray-600">Schedule a new test at your convenience.</p>
              </div>
            </Link>

            {/* Test Booking History */}
            <Link to="/test-booking-history">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-history text-purple-600 text-4xl mr-4"></i> {/* History Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Test Booking History
                  </h2>
                </div>
                <p className="text-gray-600">View the history of your past test bookings.</p>
              </div>
            </Link>

            {/* Manage Test Bookings */}
            <Link to="/manage-test-bookings">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-calendar-check text-orange-600 text-4xl mr-4"></i> {/* Calendar Edit Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Manage Test Bookings
                  </h2>
                </div>
                <p className="text-gray-600">Edit and manage your existing test bookings.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTest;
