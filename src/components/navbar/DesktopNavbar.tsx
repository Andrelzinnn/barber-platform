import { Calendar, Home, LogOut, User } from "lucide-react";

export function DesktopNavbar({
  hidden,
  onHomeClick,
  onAgendaClick,
  onLogoutClick,
  onPerfilClick,
}: {
  hidden: boolean;
  onHomeClick: () => void;
  onAgendaClick: () => void;
  onLogoutClick: () => void;
  onPerfilClick: () => void;
}) {
  return (
    <nav
      className={`hidden md:block w-full bg-white shadow-md fixed top-0 left-0 z-30 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-gray-800 font-bold text-xl">BarberApp</h1>
        <ul className="flex space-x-8">
          <li
            onClick={onHomeClick}
            className="text-gray-600 flex items-center space-x-2 hover:text-blue-600 cursor-pointer transition-colors duration-200"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </li>
          <li
            onClick={onAgendaClick}
            className="text-gray-600 flex items-center space-x-2 hover:text-blue-600 cursor-pointer transition-colors duration-200"
          >
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Agenda</span>
          </li>
          <li
            onClick={onLogoutClick}
            className="text-gray-600 flex items-center space-x-2 hover:text-blue-600 cursor-pointer transition-colors duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </li>
          <li
            onClick={onPerfilClick}
            className="text-gray-600 flex items-center space-x-2 hover:text-blue-600 cursor-pointer transition-colors duration-200"
          >
            <User className="w-5 h-5" />
            <span className="font-medium">Perfil</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
