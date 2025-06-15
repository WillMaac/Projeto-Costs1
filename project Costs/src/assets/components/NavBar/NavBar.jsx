
import Logo from "../../Img/Logo.png"
import Perfil from "../../Img/Perfil.png"
import Notification from "../../Img/Sino.png"


export default function Navbar ()  {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo FinTrack" className="w-8 h-8 object-cover" />
        <span className="font-bold text-lg font-poppins">
         FinTrack</span>
      </div>

      
      <div className="flex space-x-6 text-sm text-gray-700 font-poppins">
        <a href="#" className="hover:text-blue-600">Visão geral</a>
        <a href="#" className="hover:text-blue-600">Transações</a>
        <a href="#" className="hover:text-blue-600">Orçamentos</a>
        <a href="#" className="hover:text-blue-600">Metas</a>
      </div>

      
      <div className="flex items-center space-x-4">
        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
          <img
          src={Notification}
          alt="Sino de notificação"
          />
        </button>
        <img
          src={Perfil}
          alt="Foto de perfil"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
}
