import type * as React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { handlePhoneChange as formatPhoneNumber } from "@/lib/utils";

export function PhoneInput({
	onChange,
	...props
}: React.ComponentProps<"input">) {
	const [phone, setPhone] = useState("");

	const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formatted = formatPhoneNumber(e);
		setPhone(formatted);

		// chama o onChange passado via props, se houver
		if (onChange) {
			// aqui você pode enviar os números limpos se quiser
			const rawValue = e.target.value.replace(/\D/g, "");
			const syntheticEvent = {
				...e,
				target: { ...e.target, value: rawValue },
			} as React.ChangeEvent<HTMLInputElement>;

			onChange(syntheticEvent);
		}
	};

	return (
		<Input
			type="tel"
			placeholder="(11) 99999-9999"
			value={phone}
			onChange={handlePhoneInputChange}
			{...props}
		/>
	);
}
