import React from "react";
import UserSidebar from './UserSidebar';
import { Link } from "react-router-dom";

const Appointments = () => {
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
              <span className="block">Appointments</span>
              <span className="block">Management</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Schedule New Appointment */}
            <Link to="/schedule-appointment">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-calendar-plus text-green-600 text-4xl mr-4"></i> {/* Calendar Plus Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Schedule New Appointment
                  </h2>
                </div>
                <p className="text-gray-600">Book a new appointment.</p>
              </div>
            </Link>

            {/* View Upcoming Appointments */}
            <Link to="/view-upcoming-appointments">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-calendar-day text-blue-600 text-4xl mr-4"></i> {/* Calendar Day Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    View Upcoming Appointments
                  </h2>
                </div>
                <p className="text-gray-600">See all your upcoming appointments.</p>
              </div>
            </Link>

            {/* Manage Existing Appointments */}
            <Link to="/manage-appointments">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-calendar-check text-orange-600 text-4xl mr-4"></i> {/* Calendar Check Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Manage Existing Appointments
                  </h2>
                </div>
                <p className="text-gray-600">Modify or cancel your existing appointments.</p>
              </div>
            </Link>

            {/* Appointment History */}
            <Link to="/appointment-history">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-history text-purple-600 text-4xl mr-4"></i> {/* History Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Appointment History
                  </h2>
                </div>
                <p className="text-gray-600">Review your past appointments.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
