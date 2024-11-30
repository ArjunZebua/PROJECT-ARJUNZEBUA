import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault(); // Mencegah form untuk reload halaman

    // Validasi: pastikan username dan password tidak kosong
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    // Ambil data pengguna yang ada dari localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Cari pengguna berdasarkan username
    const user = users.find(user => user.username === username);

    // Cek apakah username ada dan password cocok
    if (user && user.password === password) {
      // Jika login berhasil
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful!");
      navigate("/"); // Arahkan ke halaman home setelah login berhasil
    } else {
      // Jika login gagal
      alert("Username or password is incorrect.");
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleLogin} className="form">
        <h1 className="title-login">Welcome Back</h1>
        <p className="subtitle">Login to access your account</p>

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

        <button type="submit" className="submit-button">
          Login
        </button>

        <p className="footer-text" onClick={() => navigate("/signup")}>
          Dont have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
}
