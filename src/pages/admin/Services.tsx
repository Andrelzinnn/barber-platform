import { useEffect, useState } from "react";
import { getAllServices } from "@/auth/api";
import { Greetings } from "@/components/Greetings";
import { ServiceSearch } from "@/components/ServicesSearch";
import { ServicePageGrid } from "@/components/servicesPage/ServicesPageGrid";
import type { Service } from "@/lib/types/Service";
import { ServiceDetail } from "./ServiceDetails";

export function ServicesPage() {
	const [services, setServices] = useState<Service[]>([]);
	const [serviceId, setServiceId] = useState("");
	const [showServiceEditor, setShowServiceEditor] = useState(false);
	useEffect(() => {
		async function fetchServices() {
			try {
				const services = await getAllServices();
				if (!services) {
					alert("nenhum serviço encontrado");
				}
				setServices(services);
			} catch (err) {
				console.log("Erro: ", err);
			}
		}
		fetchServices();
	}, []);
	function onServiceClick(id: string) {
		setServiceId(id);
		setShowServiceEditor(true);
	}
	return (
		<div className="min-h-screen flex justify-center bg-zinc-10">
			<div className="w-[350px] flex my-6 flex-col gap-6">
				<Greetings />
				<ServiceSearch />
				<div className="my-5">
					<h1 className="text-zinc-950 text-xl mb-8">Meus Serviços</h1>
					<ServicePageGrid
						services={services}
						onSelectService={(service) => onServiceClick(service.id)}
					/>
					{serviceId && showServiceEditor && (
						<ServiceDetail
							onClose={() => setShowServiceEditor(false)}
							serviceId={serviceId}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
