import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function ServiceSearch() {
	const [searchContent, setSearchContent] = useState("");
	return (
		<div className="flex w-full max-w-sm items-center gap-2">
			<Input
				type="text"
				placeholder="Buscar"
				value={searchContent}
				onChange={(e) => setSearchContent(e.target.value)}
				className="h-[40px]"
			/>
			<Button
				type="submit"
				variant="secondary"
				size={"icon"}
				className="bg-zinc-950 shadow border border-zinc-800/30 h-[40px] w-[40px] hover:bg-zinc-950/90"
			>
				<Search className="text-white" />
			</Button>
		</div>
	);
}
