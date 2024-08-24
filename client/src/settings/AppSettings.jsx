import React, { useState } from "react";
import { FaCog, FaUser, FaLanguage, FaMoon, FaSun, FaBell, FaLock } from "react-icons/fa";
import AdminSidebar from "../admin/AdminSidebar"; // Import your AdminSidebar component

const AppSettings = () => {
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("English");
    const [notifications, setNotifications] = useState(true);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        // Add logic to apply the theme to the application
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        // Add logic to change the application language
    };

    const handleNotificationsToggle = () => {
        setNotifications(!notifications);
        // Add logic to enable or disable notifications
    };

    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <AdminSidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 flex items-center space-x-3">
                        <FaCog className="text-3xl text-gray-600" />
                        <span>General Application Settings</span>
                    </h1>
                    <p className="text-gray-600 mt-2">Configure general application settings below.</p>
                </header>

                {/* Settings Form */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    {/* Theme */}
                    <div className="mb-8 border-b border-gray-200 pb-4">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Theme</h2>
                        <div className="flex space-x-4">
                            <button
                                onClick={() => handleThemeChange("light")}
                                className={`flex-1 p-5 rounded-lg shadow-md transition-colors ${theme === "light" ? "bg-yellow-100" : "bg-white"} hover:bg-yellow-200`}
                            >
                                <FaSun className={`text-yellow-500 text-4xl ${theme === "light" ? "text-5xl" : ""}`} />
                                <span className="block text-gray-700 mt-2 text-lg">Light</span>
                            </button>
                            <button
                                onClick={() => handleThemeChange("dark")}
                                className={`flex-1 p-5 rounded-lg shadow-md transition-colors ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"} hover:bg-gray-700`}
                            >
                                <FaMoon className={`text-gray-800 text-4xl ${theme === "dark" ? "text-5xl" : ""}`} />
                                <span className="block mt-2 text-lg">Dark</span>
                            </button>
                        </div>
                    </div>

                    {/* Language */}
                    <div className="mb-8 border-b border-gray-200 pb-4">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Language</h2>
                        <select
                            value={language}
                            onChange={handleLanguageChange}
                            className="w-full p-4 rounded-lg border border-gray-300 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                            <option value="German">German</option>
                            {/* Add more languages as needed */}
                        </select>
                    </div>

                    {/* Notifications */}
                    <div className="mb-8 border-b border-gray-200 pb-4">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Notifications</h2>
                        <div className="flex items-center space-x-4">
                            <input
                                type="checkbox"
                                checked={notifications}
                                onChange={handleNotificationsToggle}
                                className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <label className="text-gray-700 text-lg">Enable notifications</label>
                        </div>
                    </div>

                    {/* Account Settings */}
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Account Settings</h2>
                        <div className="space-y-4">
                            <button className="flex items-center p-5 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 transition-colors">
                                <FaUser className="text-gray-600 text-2xl mr-3" />
                                <span className="text-gray-800 text-lg">Manage Profile</span>
                            </button>
                            <button className="flex items-center p-5 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 transition-colors">
                                <FaLock className="text-gray-600 text-2xl mr-3" />
                                <span className="text-gray-800 text-lg">Change Password</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppSettings;
