import { Check, Trash } from "lucide-react";
import { updateAppoitmentStatus } from "@/auth/api";
import { Button } from "./ui/button";

export function AppointmentTooltip({
	onClose,
	appointment_id,
}: {
	onClose: () => void;
	appointment_id: string;
}) {
	const handleFinish = async (status: number) => {
		console.log(`ID: ${appointment_id}\nStatus_Code: ${status}`);
		await updateAppoitmentStatus(status, appointment_id);
		onClose();
	};
	return (
		<div className="bg-white flex flex-col gap-2 w-48 rounded-lg shadow p-2 z-50">
			<Button
				onClick={() => handleFinish(1)}
				variant={"ghost"}
				className="hover:bg-zinc-950 hover:text-white bg-zinc-100/30"
			>
				<Check /> Finalizar
			</Button>
			<Button
				onClick={() => handleFinish(2)}
				variant={"ghost"}
				className="hover:bg-zinc-950 hover:text-white bg-zinc-100/30"
			>
				<Trash /> Cancelar
			</Button>
		</div>
	);
}
