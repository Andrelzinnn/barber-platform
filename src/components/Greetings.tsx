import { useAuth } from "@/hooks/useAuth";
import { formatDate } from "@/lib/utils";

export function Greetings() {
	const { user } = useAuth();
	const date = new Date();

	return (
		<div>
			<h1 className="text-2xl">Olá, {user?.name}</h1>
			<p>{formatDate(date)}</p>
		</div>
	);
}
