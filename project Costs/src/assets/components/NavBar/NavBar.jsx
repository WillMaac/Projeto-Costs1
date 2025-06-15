import React from "react";
import Logo from "../Img/Logo.png"
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="font-bold text-lg">
         FinTrack</span>
      </div>

      {/* Menu */}
      <div className="flex space-x-6 text-sm text-gray-700">
        <a href="#" className="hover:text-blue-600">Visão geral</a>
        <a href="#" className="hover:text-blue-600">Transações</a>
        <a href="#" className="hover:text-blue-600">Orçamentos</a>
        <a href="#" className="hover:text-blue-600">Metas</a>
      </div>

      {/* Notificação e Avatar */}
      <div className="flex items-center space-x-4">
        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
          🔔
        </button>
        <img
          src="https://via.placeholder.com/32"
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
}
