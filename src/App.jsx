/* eslint-disable react-refresh/only-export-components */
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

import { createContext } from "react";
export const CartContext = createContext();

export default function App() {
  
  const [keranjang, setKeranjang] = useState([]);

  return (
    <CartContext.Provider value={{ keranjang, setKeranjang }}>
      <Header />
      <Outlet />
      <Footer />
    </CartContext.Provider>
  );

}
