const tagsDict = {
	0: {
		style:
			"text-sm font-medium rounded-2xl px-2 py-1 bg-yellow-300/80 text-yellow-800/70",
		statusName: "Pendente",
	},
	1: {
		style:
			"text-sm font-medium rounded-2xl px-2 py-1 bg-green-300/80 text-green-800/70",
		statusName: "Finalizado",
	},
	2: {
		style:
			"text-sm font-medium rounded-2xl px-2 py-1 bg-red-300/80 text-red-800/70",
		statusName: "Cancelado",
	},
};

export type Status = 0 | 1 | 2;

export function Tags({ status }: { status: Status }) {
	const tag = tagsDict[status];
	return (
		<>
			<p className={tag.style}>{tag.statusName}</p>
		</>
	);
}
