import { createAuthClient } from "better-auth/react";

const { useSession } = createAuthClient();
export function useUserSession() {
	const { data: session, isPending, error, refetch } = useSession();

	return {
		session,
		isPending,
		error,
		refetch,
	};
}
