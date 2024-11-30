/* eslint-disable no-unused-vars */
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
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
  };

  const validateForm = (data) => {
    const newErrors = {};
    Object.keys(data).forEach((key) => {
      if (!data[key] && key !== "profilePicture") {
        newErrors[key] = `${key} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveChanges = () => {
    if (validateForm(formData)) {
      setUser(formData);
      localStorage.setItem("user", JSON.stringify(formData));
      setIsEditing(false);
    } else {
      alert("Please correct the errors in the form.");
    }
  };

  const handleResetForm = () => {
    setFormData({ ...user });
    setErrors({});
  };

  const handleDeleteProfile = () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      setUser({
        Name: "",
        email: "",
        profilePicture: "/gambar/foto1.jpg",
        address: "",
        age: "",
        city: "",
        university: "",
        job: "",
        birthPlace: "",
        birthDate: "",
      });
      localStorage.removeItem("user");
    }
  };

  return (
    <div className={`profile-container ${darkMode ? "dark" : ""}`}>
      <div className="profile-header">
        <h1>Welcome, {user.Name || "User"}</h1>
        <button className="toggle-theme-btn" onClick={toggleDarkMode}>
          {darkMode ? <Moon /> : <Sun />}
        </button>
      </div>
      <div className="profile-content">
        <div className="profile-picture">
          <img
            src={user.profilePicture}
            alt="Profile"
            onError={(e) => (e.target.src = "/gambar/default.jpg")}
          />
        </div>
        <div className="profile-info">
          <h2>Profile Information</h2>
          {isEditing ? (
            <form>
              {Object.keys(formData).map((key) => (
                key !== "profilePicture" && (
                  <label key={key}>
                    <strong>{key}:</strong>
                    <input
                      type={key === "birthDate" ? "date" : "text"}
                      name={key}
                      value={formData[key]}
                      onChange={handleInputChange}
                    />
                    {errors[key] && <span className="error">{errors[key]}</span>}
                  </label>
                )
              ))}
              <div className="buttons">
                <button type="button" className="save-btn" onClick={handleSaveChanges}>
                  Save Changes
                </button>
                <button type="button" className="cancel-btn" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              {Object.keys(user).map((key) => (
                key !== "profilePicture" && (
                  <p key={key}>
                    <strong>{key}:</strong> {user[key] || "Not Provided"}
                  </p>
                )
              ))}
              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                Edit Profile
              </button>
              <button className="delete-btn" onClick={handleDeleteProfile}>
                Delete Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
