import React from "react";
import { Link } from "react-router-dom";
import TechnicianSidebar from '../technician/TechnicianSidebar';

const TechAppointments = () => {
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
              <span className="block">Appointments</span>
              <span className="block">Management</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Upcoming Appointments */}
            <Link to="/upcoming-appointments">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300 ">
                <div className="flex items-center mb-4">
                  <i className="fas fa-calendar-alt text-blue-600 text-4xl mr-4"></i> {/* Calendar Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Upcoming Appointments
                  </h2>
                </div>
                <p className="text-gray-600">View and manage all upcoming patient appointments.</p>
              </div>
            </Link>

            {/* Manage Patient Check-ins */}
            <Link to="/manage-patient-checkins">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300 ">
                <div className="flex items-center mb-4">
                  <i className="fas fa-user-check text-green-600 text-4xl mr-4"></i> {/* User Check Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Manage Patient Check-ins
                  </h2>
                </div>
                <p className="text-gray-600">Handle the check-in process for patients upon arrival.</p>
              </div>
            </Link>

            {/* Appointment History */}
            <Link to="/appointment-history">
              <div className="bg-white shadow-lg border rounded-lg p-6 hover:shadow-xl transition duration-300  col-span-2 sm:col-span-1">
                <div className="flex items-center mb-4">
                  <i className="fas fa-history text-red-600 text-4xl mr-4"></i> {/* History Icon */}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Appointment History
                  </h2>
                </div>
                <p className="text-gray-600">Review the history of all past appointments.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechAppointments;
