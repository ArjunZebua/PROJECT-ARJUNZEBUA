import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (username === "user" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Username atau password salah");
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
        <p className="footer-text"> dont have an account? <a href="/signup">Sign up</a></p>
      </form>
    </div>
  );
}
