import React, { useState } from 'react';
import { FaSearch, FaUserPlus, FaEdit, FaTrash } from 'react-icons/fa';
import AdminSidebar from '../admin/AdminSidebar';

const ExperimentTracking = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [experiments, setExperiments] = useState([
    { id: 1, name: 'Experiment 1', status: 'Ongoing', date: '2024-08-01', description: 'Analyzing chemical reactions.', assignedTo: 'Dr. Smith', priority: 'High', category: 'Chemistry', lastUpdated: '2024-08-15' },
    { id: 2, name: 'Experiment 2', status: 'Completed', date: '2024-08-02', description: 'Testing material strength.', assignedTo: 'Dr. Johnson', priority: 'Medium', category: 'Physics', lastUpdated: '2024-08-16' },
  ]);
  const [newExperiment, setNewExperiment] = useState({ name: '', status: '', date: '', description: '', assignedTo: '', priority: '', category: '', lastUpdated: '' });

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredExperiments = experiments.filter(experiment =>
    experiment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddExperiment = () => {
    if (Object.values(newExperiment).every(field => field.trim() !== '')) {
      setExperiments([...experiments, { ...newExperiment, id: experiments.length + 1 }]);
      setNewExperiment({ name: '', status: '', date: '', description: '', assignedTo: '', priority: '', category: '', lastUpdated: '' });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Ongoing':
        return <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">Ongoing</span>;
      case 'Completed':
        return <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Completed</span>;
      default:
        return <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs">{status}</span>;
    }
  };

  const handleExperimentClick = (experiment) => {
    console.log('Clicked experiment:', experiment);
    // Add logic to view details or edit the experiment here
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar className="hidden lg:block lg:w-64 bg-gray-800 text-white" />
      <div className="flex-1  overflow-y-auto transition-all duration-300 p-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Experiment Tracking</h1>
          <p className="text-base md:text-lg text-gray-600">Efficiently manage and track experiments, their statuses, and associated details. Use the search and filters to navigate through your data effortlessly.</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row items-center mb-6 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search experiments..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <FaSearch className="absolute right-4 top-3 text-gray-500" />
          </div>
          <button 
            onClick={handleAddExperiment} 
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 text-sm font-medium"
          >
            <FaUserPlus className="mr-2" /> Add New Experiment
          </button>
        </div>

        {/* Experiment Table/List */}
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Experiment Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Assigned To</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Priority</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Last Updated</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredExperiments.map((experiment) => (
                <tr key={experiment.id} onClick={() => handleExperimentClick(experiment)} className="cursor-pointer hover:bg-gray-100">
                  <td className="px-4 py-4 text-sm">{experiment.name}</td>
                  <td className="px-4 py-4 text-sm">{getStatusBadge(experiment.status)}</td>
                  <td className="px-4 py-4 text-sm">{experiment.date}</td>
                  <td className="px-4 py-4 text-sm">{experiment.assignedTo}</td>
                  <td className="px-4 py-4 text-sm">{experiment.priority}</td>
                  <td className="px-4 py-4 text-sm">{experiment.category}</td>
                  <td className="px-4 py-4 text-sm">{experiment.lastUpdated}</td>
                  <td className="px-4 py-4 text-sm flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add New Experiment Form */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Add New Experiment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Experiment Name"
              value={newExperiment.name}
              onChange={(e) => setNewExperiment({ ...newExperiment, name: e.target.value })}
              className="px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Status"
              value={newExperiment.status}
              onChange={(e) => setNewExperiment({ ...newExperiment, status: e.target.value })}
              className="px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={newExperiment.date}
              onChange={(e) => setNewExperiment({ ...newExperiment, date: e.target.value })}
              className="px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Description"
              value={newExperiment.description}
              onChange={(e) => setNewExperiment({ ...newExperiment, description: e.target.value })}
              className="px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Assigned To"
              value={newExperiment.assignedTo}
              onChange={(e) => setNewExperiment({ ...newExperiment, assignedTo: e.target.value })}
              className="px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Priority"
              value={newExperiment.priority}
              onChange={(e) => setNewExperiment({ ...newExperiment, priority: e.target.value })}
              className="px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Category"
              value={newExperiment.category}
              onChange={(e) => setNewExperiment({ ...newExperiment, category: e.target.value })}
              className="px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={newExperiment.lastUpdated}
              onChange={(e) => setNewExperiment({ ...newExperiment, lastUpdated: e.target.value })}
              className="px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleAddExperiment}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
          >
            Add Experiment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperimentTracking;
