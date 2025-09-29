import axios from "axios";
import { createAuthClient } from "better-auth/react";
import type { LoginInput, RegisterInput } from "@/auth/schemas";

export const authClient = createAuthClient({
	baseURL: import.meta.env.VITE_API_URL,
});

export const { signIn, signUp, useSession, signOut, getSession } = authClient;

export const api = axios.create({
	baseURL: `${import.meta.env.VITE_API_URL}/api`,
	withCredentials: true,
});

export async function registerUser(client: RegisterInput) {
	try {
		const { data } = await authClient.signUp.email({
			name: client.name,
			email: client.email,
			password: client.password,
			callbackURL: "/dashboard",
		});

		await api.post("/users", {
			name: client.name,
			phone: client.phone,
			email: client.email,
		});

		return { success: true, data };
	} catch (err) {
		if (err instanceof Error) {
			return { success: false, error: err.message };
		}
		return { success: false, error: "An unknown error occurred" };
	}
}
export async function signInUser(client: LoginInput) {
	alert("Signuser do auth.ts");
	try {
		const { error } = await authClient.signIn.email({
			email: client.email,
			password: client.password,
			callbackURL: "/dashboard",
		});

		if (!error) {
			// Faça um fetch separado para a sessão
			const session = await authClient.getSession({});
			return { success: true, user: session.data?.user };
		}

		return { success: false, error };
	} catch (err) {
		if (err instanceof Error) {
			return { success: false, error: err.message };
		}
		return { success: false, error: "An unknown error occurred" };
	}
}

export async function signOutUser() {
	await authClient.signOut({
		fetchOptions: {
			onSuccess: () => {
				window.location.href = "/login";
			},
		},
	});
}
