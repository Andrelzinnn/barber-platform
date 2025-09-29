import type { Status } from "@/components/Tags";
import type { Client } from "./Client";
import type { Service } from "./Service";

export type Appointment = {
	client: Client;
	client_id: string;
	created_at: string;
	service: Service;
	date: string;
	id: string;
	status: Status;
	time: string;
};
