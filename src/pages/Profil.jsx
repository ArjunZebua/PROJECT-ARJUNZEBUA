/* eslint-disable no-unused-vars */
import { Sun, Moon, Edit3, Save, X, Trash2, User, MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function ProfilPage() {
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    ProfilePicture: "/gambar/foto1.jpg",
    Address: "",
    Age: "",
    City: "",
    University: "",
    Job: "",
    BirthPlace: "",
    BirthDate: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });
  const [errors, setErrors] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedTheme = localStorage.getItem("darkMode");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setFormData(parsedUser);
    }

    if (storedTheme) {
      setDarkMode(JSON.parse(storedTheme));
    }

    setIsLoading(false);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (data) => {
    const newErrors = {};
    const requiredFields = ['Name', 'Email'];
    
    requiredFields.forEach((field) => {
      if (!data[field]) {
        newErrors[field] = `${field} is required`;
      }
    });

    // Email validation
    if (data.Email && !/\S+@\S+\.\S+/.test(data.Email)) {
      newErrors.Email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveChanges = () => {
    if (validateForm(formData)) {
      setUser(formData);
      localStorage.setItem("user", JSON.stringify(formData));
      setIsEditing(false);
    }
  };

  const handleResetForm = () => {
    setFormData({ ...user });
    setErrors({});
  };

  const handleDeleteProfile = () => {
    if (window.confirm("Are you sure you want to delete your profile? This action cannot be undone.")) {
      const emptyUser = {
        Name: "",
        Email: "",
        ProfilePicture: "/gambar/foto1.jpg",
        Address: "",
        Age: "",
        City: "",
        University: "",
        Job: "",
        BirthPlace: "",
        BirthDate: "",
      };
      setUser(emptyUser);
      setFormData(emptyUser);
      localStorage.removeItem("user");
    }
  };

  const getFieldIcon = (fieldName) => {
    const icons = {
      Name: User,
      Email: User,
      Address: MapPin,
      City: MapPin,
      Age: Calendar,
      BirthDate: Calendar,
      BirthPlace: MapPin,
      University: GraduationCap,
      Job: Briefcase,
    };
    return icons[fieldName] || User;
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b shadow-sm`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Welcome, {user.Name || "Guest"}!
              </h1>
              <p className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Manage your profile information
              </p>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`p-3 rounded-xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } hover:scale-105`}
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Picture Card */}
          <div className="lg:col-span-1">
            <div className={`${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            } rounded-2xl shadow-lg border p-6 text-center`}>
              <div className="relative inline-block mb-6">
                <img
                  src={user.ProfilePicture}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg mx-auto"
                  onError={(e) => (e.target.src = "/gambar/default.jpg")}
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {user.Name || "Anonymous User"}
              </h2>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                {user.Job || "No job specified"}
              </p>
              
              <div className="flex gap-2 justify-center">
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                  >
                    <Edit3 className="w-4 h-4" />
                    Edit Profile
                  </button>
                )}
                <button
                  onClick={handleDeleteProfile}
                  className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-xl hover:bg-red-100 transition-colors duration-200 border border-red-200"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* Profile Information Card */}
          <div className="lg:col-span-2">
            <div className={`${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            } rounded-2xl shadow-lg border p-6`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Profile Information
                </h2>
                {isEditing && (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveChanges}
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-colors duration-200"
                    >
                      <Save className="w-4 h-4" />
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        handleResetForm();
                      }}
                      className="inline-flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-xl hover:bg-gray-600 transition-colors duration-200"
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {isEditing ? (
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.keys(formData).map((key) => {
                      if (key === "ProfilePicture") return null;
                      
                      const Icon = getFieldIcon(key);
                      const isRequired = ['Name', 'Email'].includes(key);
                      
                      return (
                        <div key={key} className="space-y-2">
                          <label className={`flex items-center gap-2 text-sm font-medium ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            <Icon className="w-4 h-4" />
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                            {isRequired && <span className="text-red-500">*</span>}
                          </label>
                          <input
                            type={key === "BirthDate" ? "date" : key === "Email" ? "email" : key === "Age" ? "number" : "text"}
                            name={key}
                            value={formData[key]}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                              errors[key]
                                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                : darkMode
                                  ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500'
                                  : 'border-gray-200 bg-white focus:ring-blue-500 focus:border-blue-500'
                            }`}
                            placeholder={`Enter your ${key.toLowerCase()}`}
                          />
                          {errors[key] && (
                            <p className="text-red-500 text-sm flex items-center gap-1">
                              <X className="w-3 h-3" />
                              {errors[key]}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </form>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.keys(user).map((key) => {
                    if (key === "ProfilePicture") return null;
                    
                    const Icon = getFieldIcon(key);
                    const value = user[key];
                    
                    return (
                      <div key={key} className={`p-4 rounded-xl ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-50'
                      } transition-all duration-200 hover:shadow-md`}>
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${
                            darkMode ? 'bg-gray-600' : 'bg-blue-100'
                          }`}>
                            <Icon className={`w-4 h-4 ${
                              darkMode ? 'text-blue-400' : 'text-blue-600'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <p className={`text-sm font-medium ${
                              darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </p>
                            <p className={`text-lg ${
                              darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                              {value || (
                                <span className={`italic ${
                                  darkMode ? 'text-gray-500' : 'text-gray-400'
                                }`}>
                                  Not provided
                                </span>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className={`${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } rounded-2xl shadow-lg border p-6 text-center`}>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {user.Name ? '1' : '0'}
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Profile Completed</p>
          </div>
          
          <div className={`${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } rounded-2xl shadow-lg border p-6 text-center`}>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {user.Age || 'N/A'}
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Years Old</p>
          </div>
          
          <div className={`${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } rounded-2xl shadow-lg border p-6 text-center`}>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {user.City || 'Unknown'}
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Current City</p>
          </div>
        </div>
      </div>
    </div>
  );
}