import { X } from "lucide-react";
import { useState } from "react";
import { ptBR } from "react-day-picker/locale";
import { TimesButton } from "@/components/TimesButton";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatDateWithoutWeekday } from "@/lib/utils";

const times = ["11:30", "14:00", "14:30", "15:00"];

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, Form, FormProvider, useForm } from "react-hook-form";
import { createAppointment } from "@/auth/api";
import { CardConfirmed } from "@/components/CardConfirmed";
import {
	type AppointmentForm,
	appointmentSchema,
} from "@/hooks/useAppointment";
import type { Service } from "@/lib/types/Service";

export function AppointmentRegister({
	service,
	onClose,
}: {
	service: Service;
	onClose: () => void;
}) {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [time, setTime] = useState<string | null>(null);
	const [showSuccess, setShowSuccess] = useState(false);
	const methods = useForm<AppointmentForm>({
		resolver: zodResolver(appointmentSchema),
		defaultValues: {
			serviceId: service.id,
			date: date,
		},
	});

	const onSubmit = async (data: AppointmentForm) => {
		console.log("Enviando...", data);
		const resp = await createAppointment(data);
		console.log(resp.data.success);
		if (resp.data.success) {
			setShowSuccess(true);
		}
	};

	return (
		<>
			<FormProvider {...methods}>
				<Form>
					<div className="fixed w-full h-full inset-0 bg-black/50 flex justify-center items-center z-50">
						<div className="bg-white rounded-lg shadow-lg p-6 w-[480px] flex flex-col items-center">
							<div className="w-full flex justify-between">
								<h1 className="text-xl font-bold mb-4">Fazer Reserva</h1>
								<Button
									onClick={onClose}
									variant={"secondary"}
									size={"icon"}
									className="size-8"
								>
									<X />
								</Button>
							</div>

							<hr className="border-t border-zinc-800/20 w-full mb-4" />
							<Controller
								name="date"
								control={methods.control}
								render={({ field }) => (
									<Calendar
										mode="single"
										selected={field.value}
										onSelect={(d) => {
											field.onChange(d);
											setDate(d);
										}}
										className="rounded-lg w-full mb-4"
										locale={ptBR}
									/>
								)}
							/>

							<hr className="border-t border-zinc-800/20 w-full mb-4" />
							<Controller
								name="time"
								control={methods.control}
								render={({ field }) => (
									<TimesButton
										times={times}
										onSelect={(t) => {
											field.onChange(t);
											setTime(t);
										}}
									/>
								)}
							/>
							<hr className="border-t border-zinc-800/20 w-full mb-4 my-4" />
							<Card className="w-[350px] border border-zinc-950/30 bg-zinc-100/30 backdrop-blur-lg rounded-lg">
								<CardHeader>
									<CardTitle className="w-full flex justify-between">
										<p>{service.name}</p>
										<p>{formatCurrency(parseFloat(service.price))}</p>
									</CardTitle>
								</CardHeader>
								<CardContent className="w-full gap-2">
									<div className="w-full flex justify-between">
										<p>Data</p>
										<p>
											{date
												? formatDateWithoutWeekday(date)
												: "Selecione uma data"}
										</p>
									</div>
									<div className="flex justify-between">
										<p>Horario</p>
										<p>{time}</p>
									</div>
								</CardContent>
							</Card>
							<Button
								type="submit"
								onClick={methods.handleSubmit(onSubmit)}
								className="my-4"
							>
								Confirmar
							</Button>
						</div>
					</div>
				</Form>
			</FormProvider>
			{showSuccess && (
				<CardConfirmed message="Pedido Confirmado!" onClose={() => onClose()} />
			)}
		</>
	);
}
