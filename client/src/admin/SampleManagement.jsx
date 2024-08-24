import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import AdminSidebar from '../admin/AdminSidebar';

const SampleManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [samples, setSamples] = useState([
    {
      id: 1,
      name: 'Sample A',
      status: 'Pending',
      date: '2024-08-01',
      assignedTo: 'John Doe',
      priority: 'High',
      category: 'Research',
      lastUpdated: '2024-08-15',
    },
    {
      id: 2,
      name: 'Sample B',
      status: 'Completed',
      date: '2024-08-02',
      assignedTo: 'Jane Smith',
      priority: 'Medium',
      category: 'Analysis',
      lastUpdated: '2024-08-14',
    },
  ]);
  const [selectedSample, setSelectedSample] = useState(null);
  const [newSample, setNewSample] = useState({
    name: '',
    status: '',
    date: '',
    assignedTo: '',
    priority: '',
    category: '',
    lastUpdated: '',
    description: '',
  });

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredSamples = samples.filter(sample =>
    sample.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddSample = () => {
    setSamples([...samples, { ...newSample, id: samples.length + 1 }]);
    setNewSample({
      name: '',
      status: '',
      date: '',
      assignedTo: '',
      priority: '',
      category: '',
      lastUpdated: '',
      description: '',
    });
  };

  const handleSampleClick = (sample) => {
    setSelectedSample(sample);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      
      <AdminSidebar className="lg:w-64 w-full lg:min-h-screen bg-gray-800 text-white" />

      <div className="flex-1 p-6">
        <div className="rounded-lg shadow-lg p-6 mb-6 bg-white">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sample Management</h1>
          <p className="text-gray-600 mb-4">
            Oversee and organize the samples within the laboratory. This section allows you to manage sample details, track their status, and update or remove samples as necessary. Ensure all samples are accurately recorded and monitored for efficient laboratory operations.
          </p>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search samples..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500" />
          </div>
          <div className="flex flex-wrap space-x-2 mt-4 sm:mt-0">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
              All
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
              Completed
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600">
              Pending
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Sample Name</th>
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
              {filteredSamples.map((sample) => (
                <tr
                  key={sample.id}
                  onClick={() => handleSampleClick(sample)}
                  className="cursor-pointer hover:bg-gray-100 transition duration-150"
                >
                  <td className="px-4 py-4 text-sm">{sample.name}</td>
                  <td className="px-4 py-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      sample.status === 'Pending' ? 'bg-yellow-500 text-white' :
                      sample.status === 'Completed' ? 'bg-green-500 text-white' : ''
                    }`}>
                      {sample.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm">{sample.date}</td>
                  <td className="px-4 py-4 text-sm">{sample.assignedTo}</td>
                  <td className="px-4 py-4 text-sm">{sample.priority}</td>
                  <td className="px-4 py-4 text-sm">{sample.category}</td>
                  <td className="px-4 py-4 text-sm">{sample.lastUpdated}</td>
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

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add New Sample</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Sample Name"
              value={newSample.name}
              onChange={(e) => setNewSample({ ...newSample, name: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Status"
              value={newSample.status}
              onChange={(e) => setNewSample({ ...newSample, status: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={newSample.date}
              onChange={(e) => setNewSample({ ...newSample, date: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Assigned To"
              value={newSample.assignedTo}
              onChange={(e) => setNewSample({ ...newSample, assignedTo: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Priority"
              value={newSample.priority}
              onChange={(e) => setNewSample({ ...newSample, priority: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Category"
              value={newSample.category}
              onChange={(e) => setNewSample({ ...newSample, category: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={newSample.lastUpdated}
              onChange={(e) => setNewSample({ ...newSample, lastUpdated: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Description"
              value={newSample.description}
              onChange={(e) => setNewSample({ ...newSample, description: e.target.value })}
              className="col-span-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleAddSample}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
          >
            Add Sample
          </button>
        </div>
      </div>
    </div>
  );
};

export default SampleManagement;
