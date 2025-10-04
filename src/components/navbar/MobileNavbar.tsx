import { Calendar, Home, LogOut, User } from "lucide-react";

export function MobileNavbar({
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
      className={`md:hidden fixed left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-30
  transition-all duration-300 ease-in-out
  ${hidden ? "-bottom-24" : "bottom-0"}`}
    >
      <div className="flex justify-around items-center">
        <button
          onClick={onHomeClick}
          className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <Home className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600 font-medium">inicio</span>
        </button>

        <button className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <Calendar onClick={onAgendaClick} className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600 font-medium">Agenda</span>
        </button>

        <button
          onClick={onLogoutClick}
          className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <LogOut className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600 font-medium">Sair</span>
        </button>
        <button
          onClick={onPerfilClick}
          className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <User className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600 font-medium">Perfil</span>
        </button>
      </div>
    </nav>
  );
}
