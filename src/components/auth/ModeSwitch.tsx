import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface ModeSwitchProps {
	isLogin: boolean;
	onToggle: () => void;
}

export function ModeSwitch({ isLogin, onToggle }: ModeSwitchProps) {
	return (
		<div className="flex items-center justify-center space-x-4 mb-6">
			<Label className={!isLogin ? "font-semibold" : ""}>Cadastro</Label>
			<Switch checked={isLogin} onCheckedChange={onToggle} />
			<Label className={isLogin ? "font-semibold" : ""}>Login</Label>
		</div>
	);
}
