import { useEffect, useState } from "react";
import { getSession, signIn, signOut, signUp } from "@/auth/auth";
import type { LoginInput, RegisterInput } from "@/auth/schemas";
import type { User } from "@/lib/types/User";

export const useAuth = () => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchSession = async () => {
			try {
				const session = await getSession({});
				if (session.data?.user) {
					setUser(session.data.user);
				}
			} catch (err) {
				console.error("Erro ao buscar sessão:", err);
			} finally {
				setIsLoading(false);
			}
		};
		fetchSession();
	}, []);

	const registerUser = async (data: RegisterInput) => {
		setIsLoading(true);
		setError("");

		try {
			const { data: registerData, error } = await signUp.email({
				name: data.name,
				email: data.email,
				password: data.password,
				callbackURL: "/dashboard",
			});

			return { success: !error, registerData };
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message || "Erro no cadastro");
			}
			return { success: false };
		} finally {
			setIsLoading(false);
		}
	};

	const login = async (data: LoginInput) => {
		setIsLoading(true);
		setError("");
		try {
			const { error } = await signIn.email({
				email: data.email,
				password: data.password,
				rememberMe: true,
			});
			return { success: !error };
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message || "Erro no login");
			}
			return { success: false };
		} finally {
			setIsLoading(false);
		}
	};

	const logout = async () => {
		try {
			await signOut();
			setUser(null);
		} catch (err) {
			console.error(err);
		}
	};

	return {
		user,
		isLoading,
		error,
		login,
		logout,
		registerUser,
		clearError: () => setError(""),
	};
};
