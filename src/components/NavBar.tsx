import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavbar } from "@/components/navbar/MobileNavbar";
import { Sidebar } from "@/components/Sidebar";
import { useAuth } from "@/hooks/useAuth";
import { DesktopNavbar } from "./navbar/DesktopNavbar";

export function Navbar() {
	const { logout } = useAuth();
	const navigate = useNavigate();
	const [hidden, setHidden] = useState(false);
	const [showSidebar, setShowSidebar] = useState(false);
	const lastScrollY = useRef(0);

	useEffect(() => {
		let ticking = false;
		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const currentScrollY = window.scrollY;
					setHidden(currentScrollY > lastScrollY.current);
					lastScrollY.current = currentScrollY;
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const onHomeClick = () => {
		navigate("/dashboard");
	};

	const onAgendaClick = () => {
		navigate("/appointments");
	};

	const onLogoutClick = async () => {
		await logout();
		navigate("/login");
	};
	const onPerfilClick = async () => {
		setShowSidebar(true);
	};

	return (
		<>
			{showSidebar && (
				<div
					className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
					onClick={() => setShowSidebar(false)}
				/>
			)}
			<Sidebar open={showSidebar} onClose={() => setShowSidebar(false)} />
			<DesktopNavbar
				hidden={hidden}
				onAgendaClick={onAgendaClick}
				onHomeClick={onHomeClick}
				onLogoutClick={onLogoutClick}
			/>

			<MobileNavbar
				hidden={hidden}
				onAgendaClick={onAgendaClick}
				onHomeClick={onHomeClick}
				onLogoutClick={onLogoutClick}
				onPerfilClick={onPerfilClick}
			/>
		</>
	);
}

export default Navbar;
