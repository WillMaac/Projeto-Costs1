import React from 'react';
import { FaChartPie, FaWallet, FaCalendarAlt, FaExchangeAlt, FaChartBar, FaCog, FaEnvelope, FaBell, FaMoon, FaSignOutAlt } from 'react-icons/fa';

export const Sidebar = () =>{
    return(
        <div className="h-screen w-64 bg-white shadow-md p-5 flex flex-col justify-between">
            <div>
                <div className="flex items-center mb-8">
          <img
            src="https://i.pravatar.cc/40"
            alt="Avatar"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h4 className="font-semibold">Rix Methil</h4>
            <p className="text-sm text-gray-500">rix123@email.com</p>
          </div>
        </div>

        {/* Menus */}
        <div>
          <p className="text-gray-400 text-xs mb-2">MANAGE</p>
          <ul className="space-y-4 mb-6">
            
            <li className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer">
              <FaWallet className="mr-3" /> My Wallet
            </li>
            <li className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer">
              <FaCalendarAlt className="mr-3" /> Adicionar renda
            </li>
            <li className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer">
              <FaExchangeAlt className="mr-3" /> Adicionar despesas
            </li>
            <li className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer">
              <FaChartBar className="mr-3" /> Statistics
            </li>
          </ul>

          <p className="text-gray-400 text-xs mb-2">SETTINGS</p>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer">
              <FaCog className="mr-3" /> Settings
            </li>
            <li className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer">
              <FaEnvelope className="mr-3" /> My Messages
            </li>
            <li className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer">
              <FaBell className="mr-3" /> Notifications
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="space-y-4">
        <div className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer">
          <FaMoon className="mr-3" /> Theme
        </div>
        <div className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer">
          <FaSignOutAlt className="mr-3" /> Log Out
        </div>
      </div>
    </div>
  );
}