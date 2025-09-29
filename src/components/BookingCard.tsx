import { EllipsisVerticalIcon } from "lucide-react";
import { useState } from "react";
import { Tags } from "@/components/Tags";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Appointment } from "@/lib/types/Appointment";
import { AppointmentTooltip } from "./AppointmentTooltip";

function formatDate(d: Date) {
	return new Intl.DateTimeFormat("pt-BR", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	})
		.format(d)
		.replaceAll(" de ", " ");
}

export function BookingCard({ booking }: { booking: Appointment }) {
	const [showTooltip, setShowTooltip] = useState(false);
	return (
		<Card
			key={booking.id}
			className="relative w-[370px] border border-zinc-600/20 shadow"
		>
			<CardHeader>
				<CardTitle>{booking.service.name}</CardTitle>
				<CardDescription className="absolute right-6 bottom-3">
					{formatDate(new Date(booking.date))} - {booking.time}
				</CardDescription>
				<CardAction className="absolute left-5 bottom-2">
					<Tags status={booking.status} />
				</CardAction>
			</CardHeader>

			<CardContent>{/*Details*/}</CardContent>

			<CardFooter className="absolute right-0 top-3">
				<div className="relative">
					<EllipsisVerticalIcon
						strokeWidth={2}
						className="cursor-pointer"
						onClick={() => setShowTooltip(!showTooltip)}
					/>
					{showTooltip && (
						<div className="absolute right-0 bottom-full mb-2 z-50">
							<AppointmentTooltip
								appointment_id={booking.id}
								onClose={() => setShowTooltip(!showTooltip)}
							/>
						</div>
					)}
				</div>
			</CardFooter>
		</Card>
	);
}
