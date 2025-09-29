import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { createAppointment } from "@/auth/api";

export const appointmentSchema = z.object({
	serviceId: z.string(),
	date: z.date({ error: "Selecione uma data" }),
	time: z.string().min(1, "Selecione um horário"),
});

export type AppointmentForm = z.infer<typeof appointmentSchema>;

export function AppointmentRegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AppointmentForm>({
		resolver: zodResolver(appointmentSchema),
	});

	const onSubmit = async (data: AppointmentForm) => {
		console.log(data);
		const resp = await createAppointment(data);
		console.log(resp);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="date" {...register("date")} />
			{errors.date && <span>{errors.date.message}</span>}

			<input type="text" {...register("time")} />
			{errors.time && <span>{errors.time.message}</span>}

			<button type="submit">Confirmar</button>
		</form>
	);
}
