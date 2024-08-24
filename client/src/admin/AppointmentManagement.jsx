import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from '../admin/AdminSidebar';

const AppointmentManagement = () => {
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
              <span className="block">Appointment</span>
              <span className="block">Management</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* View Appointments */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-calendar-day text-blue-600 text-4xl mr-4"></i> {/* Calendar Day Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    View Appointments
                  </h2>
                </div>
                <p className="text-gray-600">View all scheduled appointments.</p>
              </div>
            </Link>

            {/* Schedule Appointments */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-calendar-plus text-green-600 text-4xl mr-4"></i> {/* Calendar Plus Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Schedule Appointments
                  </h2>
                </div>
                <p className="text-gray-600">Schedule new appointments.</p>
              </div>
            </Link>

            {/* Manage Bookings */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-calendar-check text-orange-600 text-4xl mr-4"></i> {/* Calendar Edit Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Manage Bookings
                  </h2>
                </div>
                <p className="text-gray-600">Edit and manage existing bookings.</p>
              </div>
            </Link>

            {/* Appointment History */}
            <Link to="/">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-history text-purple-600 text-4xl mr-4"></i> {/* History Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Appointment History
                  </h2>
                </div>
                <p className="text-gray-600">View history of past appointments.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentManagement;
