import { useEffect, useState } from "react";
import { getAllServices } from "@/auth/api";
import { CardAppointment } from "@/components/CardAppointment";
import { Greetings } from "@/components/Greetings";
import { ServicesCardDashboard } from "@/components/ServicesCardDashboard";
import { ServiceSearch } from "@/components/ServicesSearch";
import type { Service } from "@/lib/types/Service";
import { AppointmentRegister } from "./AppointmentRegister";

export function Dashboard() {
	const [services, setServices] = useState<Service[]>([]);
	const [showAppointment, setShowAppointment] = useState(false);
	const [selectedService, setSelectedService] = useState<Service | null>(null);

	useEffect(() => {
		async function fetchServices() {
			try {
				const result = await getAllServices();
				setServices(result);
			} catch (err) {
				console.error("Erro ao buscar serviços:", err);
			}
		}
		fetchServices();
	}, []);

	return (
		<div className="min-h-screen flex justify-center bg-zinc-10">
			<div className="w-[350px] flex my-6 flex-col gap-6">
				<Greetings />
				<ServiceSearch />
				<CardAppointment />
				<ServicesCardDashboard
					services={services}
					onSelectService={(service) => {
						setSelectedService(service);
						setShowAppointment(true);
					}}
				/>
				{showAppointment && selectedService && (
					<AppointmentRegister
						service={selectedService}
						onClose={() => setShowAppointment(false)}
					/>
				)}
			</div>
		</div>
	);
}
