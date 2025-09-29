import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(d: Date) {
	const formatted = new Intl.DateTimeFormat("pt-BR", {
		weekday: "long",
		day: "numeric",
		month: "long",
	}).format(d);
	return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
export function formatDateWithoutWeekday(date: Date) {
	const formatted = new Intl.DateTimeFormat("pt-BR", {
		day: "2-digit",
		month: "long",
	}).format(date);
	return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export function formatCurrency(price: number) {
	const formatted = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(price);
	return formatted;
}

export const formatDateForApi = (date: Date) =>
	date.toISOString().split("T")[0];

export const handlePhoneChange = (
	e: React.ChangeEvent<HTMLInputElement>,
): string => {
	let value = e.target.value.replace(/\D/g, "");

	if (value.length > 11) value = value.slice(0, 11);

	// Formata
	if (value.length > 6) {
		value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
	} else if (value.length > 2) {
		value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
	} else if (value.length > 0) {
		value = `(${value}`;
	}

	return value;
};
