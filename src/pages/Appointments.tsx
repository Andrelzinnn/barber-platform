import "@/App.css";
import { Pen } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAppointByClientId } from "@/auth/api";
import { Bookings } from "@/components/Bookings";
import { Button } from "@/components/ui/button";
import type { Appointment } from "@/lib/types/Appointment";

export function Appointments() {
	const [bookings, setBookings] = useState<Appointment[]>([]);
	const navigate = useNavigate();
	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getAppointByClientId();
				setBookings(data);
				console.log(data);
			} catch (err) {
				console.error("Erro ao buscar serviços:", err);
			}
		}
		fetchData();
	}, []);

	return (
		<main className="min-h-screen flex justify-center bg-zinc-100">
			<div className="flex flex-col p-4 gap-6 my-6">
				<div className="flex flex-col gap-6">
					<Bookings bookings={bookings} />
				</div>
				<div className="w-full flex justify-center">
					<Button
						onClick={() => navigate("/appointment")}
						variant={"outline"}
						size={"sm"}
					>
						{" "}
						Nova Reserva
						<Pen />
					</Button>
				</div>
			</div>
		</main>
	);
}

/*import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "react-day-picker/locale"
import { Input } from "@/components/ui/input";

export function Appointments() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-10">
      <div className="w-[350px] flex flex-col gap-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg w-full shadow"
          locale={ptBR}
        />
        <Input 
          type="text"
          placeholder="detalhes da reserva"
        />
      </div>
    </div>
  );
}
*/
