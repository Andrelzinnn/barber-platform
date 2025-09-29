import { api, getSession } from "@/auth/auth";
import type { AppointmentForm } from "@/hooks/useAppointment";
import type { Appointment } from "@/lib/types/Appointment";
import type { Service, UpdateServiceSchema } from "@/lib/types/Service";
import { formatDateForApi } from "@/lib/utils";
import type { RegisterInput } from "./schemas";

export async function getAllServices(): Promise<Service[]> {
	const resp = await api.get("/services");
	const services = resp.data.data;
	console.log(services);
	return services;
}

export async function getUserId() {
	const email = (await getSession()).data?.user.email;
	const id = (await api.get(`/clients/email/${email}`)).data;
	return id.data.id;
}

export async function createAppointment(data: AppointmentForm) {
	const clientId = await getUserId();
	const refinedData = {
		client_id: clientId,
		service_id: data.serviceId,
		date: formatDateForApi(data.date),
		time: data.time,
	};

	const req = await api.post("/appointments", refinedData);
	return req;
}

export async function createClient(data: RegisterInput) {
	const req = await api.post("/clients", data);
	console.log(req.data);
}

export async function updateAppoitmentStatus(
	status: number,
	appointment_id: string,
) {
	const obj = {
		status: status,
	};
	const req = await api.put(`/appointments/${appointment_id}`, obj);
	console.log(req.data.data);
}

export async function getAllAppointments(): Promise<Appointment[]> {
	const appointments = await api.get("/appointments");
	return appointments.data.data;
}

export async function getServiceById(id: string) {
	const service = await api.get(`/services/${id}`);
	return service.data.data;
}

export async function updateService(id: string, data: UpdateServiceSchema) {
	const service = await api.put(`/services/${id}`, data);
	return service.data;
}

export async function getAppointByClientId() {
	const client_id = await getUserId();
	const req = await api.get(`/appointments/client/${client_id}`);
	return req.data.data;
}
