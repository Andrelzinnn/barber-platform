import { Bolt, BookCopy, LogOut, UserRoundCog, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export function Sidebar({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) {
	const navigate = useNavigate();
	const onClickMyServices = () => {
		navigate("/admin/services");
		onClose();
	};
	return (
		<div
			className={`fixed top-0 right-0 h-full w-80 bg-zinc-100 shadow-lg transform transition-transform duration-300 ease-in-out z-50
      ${open ? "translate-x-0" : "translate-x-full"}`}
		>
			<div className="flex items-center justify-between p-4 border-b border-zinc-900/20">
				<h2 className="font-bold text-lg">Menu</h2>
				<button onClick={onClose}>
					<X className="w-5 h-5 text-gray-600" />
				</button>
			</div>

			<div className="p-4 flex flex-col gap-4">
				<Button
					variant={"ghost"}
					className="text-left justify-baseline p-2 rounded hover:bg-gray-100"
				>
					<UserRoundCog /> Minha Conta
				</Button>
				<Button
					variant={"ghost"}
					className="text-left justify-baseline p-2 rounded hover:bg-gray-100"
				>
					<Bolt /> Configurações
				</Button>
				<Button
					onClick={onClickMyServices}
					variant={"ghost"}
					className="text-left justify-baseline p-2 rounded hover:bg-gray-100"
				>
					<BookCopy /> Meu Serviços
				</Button>
				<Button
					onClick={onClickMyServices}
					variant={"ghost"}
					className="text-left justify-baseline p-2 rounded hover:bg-gray-100 text-red-500"
				>
					<LogOut /> Sair
				</Button>
			</div>
		</div>
	);
}
