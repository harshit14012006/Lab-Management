import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AdminSidebar from '../admin/AdminSidebar'; 

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [reportsPerPage] = useState(5);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formMode, setFormMode] = useState('add'); // 'add' or 'edit'
  const [currentReport, setCurrentReport] = useState(null); // The report being edited or null for adding a new one

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const reports = [
    { id: 1, title: 'Lab Report 1', date: '2024-08-01', status: 'Completed', description: 'Report on chemical reactions.' },
    { id: 2, title: 'Lab Report 2', date: '2024-08-02', status: 'Pending', description: 'Report on material strength.' },
    { id: 3, title: 'Lab Report 3', date: '2024-08-03', status: 'Completed', description: 'Analysis of chemical composition.' },
    { id: 4, title: 'Lab Report 4', date: '2024-08-04', status: 'Pending', description: 'Test results of material samples.' },
    { id: 5, title: 'Lab Report 5', date: '2024-08-05', status: 'Completed', description: 'Study of material properties.' },
    { id: 6, title: 'Lab Report 6', date: '2024-08-06', status: 'Pending', description: 'Experimental results of new materials.' },
  ];

  // Pagination
  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);
  const totalPages = Math.ceil(reports.length / reportsPerPage);

  // Handle opening the form for adding a new report
  const handleAddNewReport = () => {
    setFormMode('add');
    setCurrentReport(null);
    setIsFormOpen(true);
  };

  // Handle opening the form for editing a report
  const handleEditReport = (report) => {
    setFormMode('edit');
    setCurrentReport(report);
    setIsFormOpen(true);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formMode === 'add') {
      // Add a new report
      console.log('Adding new report:', currentReport);
    } else if (formMode === 'edit') {
      // Update the existing report
      console.log('Updating report:', currentReport);
    }
    setIsFormOpen(false);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentReport((prevReport) => ({
      ...prevReport,
      [name]: value,
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar className="lg:w-64 w-full bg-gray-800 text-white flex-shrink-0" />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 transition-all duration-300 overflow-y-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Reports</h1>
          <p className="text-base md:text-lg text-gray-600">View and manage lab reports, track statuses, and analyze data.</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row items-center mb-6 gap-4">
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <input
              type="text"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <FaSearch className="absolute right-4 top-3 text-gray-500" />
          </div>
          <button 
            onClick={handleAddNewReport}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 text-sm font-medium"
          >
            <FaPlus className="mr-2" /> Add New Report
          </button>
        </div>

        {/* Reports Table/List */}
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Title</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentReports.filter(report => report.title.toLowerCase().includes(searchTerm.toLowerCase())).map((report) => (
                <tr key={report.id} className="hover:bg-gray-100">
                  <td className="px-4 py-4 text-sm font-medium text-gray-800">{report.title}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{report.date}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{report.status}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{report.description}</td>
                  <td className="px-4 py-4 text-sm flex space-x-2">
                    <button 
                      className="text-blue-600 hover:text-blue-800" 
                      title="Edit Report"
                      onClick={() => handleEditReport(report)}
                    >
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800" title="Delete Report">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button
            className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <FaArrowLeft className="mr-2" /> Previous
          </button>
          <span className="text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Add/Edit Form */}
        {isFormOpen && (
          <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">
              {formMode === 'add' ? 'Add New Report' : 'Edit Report'}
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={currentReport?.title || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Date</label>
                <input
                  type="date"
                  name="date"
                  value={currentReport?.date || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Status</label>
                <select
                  name="status"
                  value={currentReport?.status || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                >
                  <option value="">Select status</option>
                  <option value="Completed">Completed</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={currentReport?.description || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  rows="4"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 text-sm font-medium"
                >
                  {formMode === 'add' ? 'Add Report' : 'Update Report'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
