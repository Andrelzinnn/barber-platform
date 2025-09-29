import { useState } from "react";
import { Button } from "./ui/button";

type TimesButtonProps = {
	times: string[];
	bookedTimes?: string[];
	onSelect?: (time: string) => void;
};

export function TimesButton({
	times,
	bookedTimes = [],
	onSelect,
}: TimesButtonProps) {
	const [selectedTime, setSelectedTime] = useState<string | null>(null);

	const handleClick = (time: string) => {
		setSelectedTime(time);
		onSelect?.(time);
	};

	return (
		<div className="flex flex-wrap gap-2">
			{times.map((time) => (
				<Button
					key={time}
					value={selectedTime ? selectedTime : ""}
					variant={"ghost"}
					type="button"
					onClick={() => handleClick(time)}
					disabled={bookedTimes.includes(time)}
					className={`px-4 py-2 ${selectedTime === time ? "" : ""}`}
				>
					{time}
				</Button>
			))}
		</div>
	);
}
