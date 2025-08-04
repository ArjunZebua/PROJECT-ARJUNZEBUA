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

    const users = JSON.parse(localStorage.getItem("users")) || [];

    
    const user = users.find(user => user.username === username);

    // Cek apakah username ada dan password cocok
    if (user && user.password === password) {
      // Jika login berhasil
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful!");
      navigate("/"); // Arahkan ke halaman home setelah login berhasil
    } else {
      // Jika login gagal
      alert("Nama pengguna atau kata sandi salah.");
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

// // Import `useNavigate` dari react-router-dom untuk navigasi halaman
// import { useNavigate } from "react-router-dom";
// // Import `useState` untuk mengatur state lokal komponen
// import { useState } from "react";
// // Import ikon Font Awesome untuk digunakan di input
// import { FaUser, FaLock } from "react-icons/fa";

// // Komponen Login
// export default function Login() {
//   // `navigate` adalah fungsi untuk berpindah halaman / navigasi tanpa link
//   const navigate = useNavigate();

//   // State untuk menyimpan username dan password yang dimasukkan pengguna
//   const [username, setUsername] = useState(""); // menanangi data yang dinamis usestate
//   const [password, setPassword] = useState("");

//   // Fungsi yang dijalankan saat tombol login ditekan
//   function handleLogin(e) {
//     e.preventDefault(); // Mencegah form melakukan reload halaman secara default

//     // Validasi: Cek jika username atau password kosong
//     if (!username || !password) {
//       alert("Silakan masukkan nama pengguna dan kata sandi.");
//       return; // Menghentikan eksekusi jika validasi gagal
//     }

//     // Ambil data pengguna dari localStorage (berupa string JSON) dan parsing menjadi array
//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     // Gunakan `.find()` untuk mencari pengguna berdasarkan username
//     // Cari pengguna berdasarkan username maksud nya mencari akun dengan username yang sudah terdaftar atau blom,
//     //.find() akan memeriksa setiap elemen di array users satu per satu
//     const user = users.find(user => user.username === username);

//     // Cek apakah pengguna ditemukan dan password cocok
//     if (user && user.password === password) {
//       // Simpan status login di localStorage
//       localStorage.setItem("isLoggedIn", "true");

//       // Tampilkan pesan berhasil login
//       alert("Login successful!");

//       // Arahkan ke halaman beranda setelah login
//       navigate("/");
//     } else {
//       // Jika pengguna tidak ditemukan atau password salah
//       alert("Username or password is incorrect.");
//     }
//   }

//   return (
//     <div className="form-container">
//       {/* Form untuk login */}
//       <form onSubmit={handleLogin} className="form">
//         {/* Judul halaman login */}
//         <h1 className="title-login">Welcome Back</h1>
//         <p className="subtitle">Login to access your account</p>

//         {/* Input untuk username */}
//         <div className="input-group">
//           <label>
//             {/* Ikon pengguna */}
//             <FaUser className="input-icon" />
//             <input
//               className="form-input"
//               type="text"
//               placeholder="Username" // Placeholder yang terlihat saat input kosong
//               value={username} // Nilai input terkait dengan state `username`
//               onChange={(e) => setUsername(e.target.value)} // Perbarui state saat pengguna mengetik
//             />
//           </label>
//         </div>

//         {/* Input untuk password */}
//         <div className="input-group">
//           <label>
//             {/* Ikon gembok */}
//             <FaLock className="input-icon" />
//             <input
//               className="form-input"
//               type="password"
//               placeholder="Password" // Placeholder yang terlihat saat input kosong
//               value={password} // Nilai input terkait dengan state `password`
//               onChange={(e) => setPassword(e.target.value)} // Perbarui state saat pengguna mengetik
//             />
//           </label>
//         </div>

//         {/* Tombol submit untuk login */}
//         <button type="submit" className="submit-button">
//           Login
//         </button>

//         {/* Teks untuk mendaftarkan akun jika belum memiliki */}
//         <p className="footer-text" onClick={() => navigate("/signup")}>
//           Dont have an account? <a href="/signup">Sign up</a>
//         </p>
//       </form>
//     </div>
//   );
// }
