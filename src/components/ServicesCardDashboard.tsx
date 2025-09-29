import type { Service } from "@/lib/types/Service";
import { ServiceCardGrid } from "./ServiceCardGrid";

export function ServicesCardDashboard({
	services,
	onSelectService,
}: {
	services: Service[];
	onSelectService: (s: Service) => void;
}) {
	return (
		<ServiceCardGrid services={services} onSelectService={onSelectService} />
	);
}
