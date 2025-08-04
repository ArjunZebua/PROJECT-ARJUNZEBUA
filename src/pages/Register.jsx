import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

export default function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSignUp(e) {
    e.preventDefault();

    // Validasi: pastikan username dan password tidak kosong
    if (!username || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    // Validasi: pastikan password dan confirm password cocok
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Ambil data pengguna yang sudah ada dari localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Cek apakah username sudah ada
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      alert("Username already exists!");
      return;
    }

    // Tambahkan pengguna baru ke array
    users.push({ username, password });

    // Simpan kembali array pengguna ke localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    navigate("/login");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSignUp} className="form">
        <h1 className="title-login">Create Account</h1>
        <p className="subtitle">Sign up to get started</p>

        <div className="input-group">
          <label>
            <FaUser className="input-icon" />
            <input
              className="form-input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>

        <div className="input-group">
          <label>
            <FaLock className="input-icon" />
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <div className="input-group">
          <label>
            <FaLock className="input-icon" />
            <input
              className="form-input"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>

        <button type="submit" className="submit-button">
          Sign Up
        </button>
        <p className="footer-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}

