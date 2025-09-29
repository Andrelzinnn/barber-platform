import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { updateService } from "@/auth/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useService } from "@/hooks/useService";
import {
	type UpdateServiceSchema,
	updateServiceSchema,
} from "@/lib/types/Service";

export function ServiceDetail({
	serviceId,
	onClose,
}: {
	serviceId: string;
	onClose: () => void;
}) {
	const { service, loading } = useService(serviceId);

	const defaultValues = service
		? { ...service, price: Number(service.price) || 0 }
		: { price: 0 };
	const { handleSubmit, reset, control } = useForm<UpdateServiceSchema>({
		resolver: zodResolver(updateServiceSchema),
		defaultValues: defaultValues,
	});

	useEffect(() => {
		if (service) reset({ ...service, price: Number(service.price) });
	}, [service]);

	const onSubmit = async (data: UpdateServiceSchema) => {
		console.log("Salvar dados:", data);
		await updateService(serviceId, data);
		onClose();
	};

	if (loading) return <p>Carregando...</p>;

	return (
		<div
			onClick={onClose}
			className="fixed w-full h-full inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
		>
			<div className="bg-white rounded-lg shadow-lg p-6 w-[360px]">
				<div className="flex justify-between mb-4">
					<h1>Editar Serviço</h1>
					<Button onClick={onClose} variant="ghost">
						<X />
					</Button>
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
					<Controller
						name="name"
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								type={"text"}
								placeholder={"Nome do serviço"}
								className="border p-2 rounded"
								onChange={(e) => {
									field.onChange(e.target.value);
								}}
							/>
						)}
					/>
					<Controller
						name="price"
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								placeholder={"Preço"}
								type={"number"}
								step={"0.01"}
								value={field.value ?? 0}
								className="border p-2 rounded"
								onChange={(e) => {
									const val = e.target.value;
									field.onChange(val === "" ? "" : Number(val));
								}}
							/>
						)}
					/>

					<Button type={"submit"}>Salvar</Button>
				</form>
			</div>
		</div>
	);
}
