import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Product from './components/Product.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import ProfilPage from './pages/Profil.jsx';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Register />
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/", // Home path
        element: <Home />
      },
      {
        path: "/profil", // Profil path
        element: <ProfilPage />
      },
      {
        path: "/about", // About path
        element: <About />
      },
      {
        path: "/product", // Product path
        element: <Product />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
