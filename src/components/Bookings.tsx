import type { Appointment } from "@/lib/types/Appointment";
import { BookingCard } from "./BookingCard";

export function Bookings({ bookings }: { bookings: Appointment[] }) {
	const pending = bookings.filter((b) => b.status === 0);
	const finished = bookings.filter((b) => b.status === 1);
	const canceled = bookings.filter((b) => b.status === 2);

	return (
		<div className="space-y-6">
			<h1 className="text-2xl text-zinc-800/90">Agendamentos</h1>
			{pending.length > 0 && (
				<div className="space-y-2">
					<h2 className="text-lg font-semibold text-zinc-600">Pendentes</h2>
					{pending.map((b) => (
						<BookingCard booking={b} />
					))}
				</div>
			)}

			{finished.length > 0 && (
				<div className="space-y-2">
					<h2 className="text-lg font-semibold text-zinc-600">Finalizados</h2>
					{finished.map((b) => (
						<BookingCard booking={b} />
					))}
				</div>
			)}
			{canceled.length > 0 && (
				<div className="space-y-2">
					<h2 className="text-lg font-semibold text-zinc-600">Cancelados</h2>
					{canceled.map((b) => (
						<BookingCard booking={b} />
					))}
				</div>
			)}
		</div>
	);
}
