import type { Service } from "@/lib/types/Service";
import { formatCurrency } from "@/lib/utils";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function ServiceCard({
	service,
	onClick,
}: {
	service: Service;
	onClick: (s: Service) => void;
}) {
	return (
		<Card className="relative w-[168px] h-[250px] bg-zinc-800 flex flex-col items-center p-3 gap-2">
			<h3 className="text-white font-bold text-sm text-center">
				{service.name}
			</h3>
			<p className="text-zinc-300 text-xs">
				{formatCurrency(parseFloat(service.price))}
			</p>
			<Button
				onClick={() => onClick(service)}
				variant={"outline"}
				className="relative top-33 right-0 left-0"
			>
				Reserve Já
			</Button>
		</Card>
	);
}
