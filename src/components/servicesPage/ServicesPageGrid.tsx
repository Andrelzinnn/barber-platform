import { ServiceCardPage } from "@/components/servicesPage/ServicesCardPage";
import type { Service } from "@/lib/types/Service";

export function ServicePageGrid({
	services,
	onSelectService,
}: {
	services: Service[];
	onSelectService: (s: Service) => void;
}) {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
			{services.map((service) => (
				<ServiceCardPage
					key={service.id}
					service={service}
					onClick={onSelectService}
				/>
			))}
		</div>
	);
}
