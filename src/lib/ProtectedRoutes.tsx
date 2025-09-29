import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function ProtectedRoute() {
	const { user, isLoading } = useAuth();

	if (isLoading) {
		return <p>Carregando...</p>;
	}

	if (!user) {
		return <Navigate to="/login" replace />;
	}

	return <Outlet />;
}
