import { useEffect, useState } from "react";
import { getServiceById } from "@/auth/api";
import type { Service } from "@/lib/types/Service";

export function useService(serviceId: string) {
	const [service, setService] = useState<Service | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let mounted = true;
		async function fetch() {
			try {
				const data = await getServiceById(serviceId);
				if (mounted) setService(data);
			} catch (err) {
				console.error(err);
			} finally {
				if (mounted) setLoading(false);
			}
		}
		fetch();
		return () => {
			mounted = false;
		};
	}, [serviceId]);

	return { service, loading };
}
