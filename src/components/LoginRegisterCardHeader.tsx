import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ModeLoginProps {
	isLogin: boolean;
}

export function LoginRegisterCardHeader({ isLogin }: ModeLoginProps) {
	return (
		<CardHeader className="text-center">
			<CardTitle className="text-2xl font-bold">BarberApp</CardTitle>
			<CardDescription>
				{isLogin ? "Entre na sua conta" : "Crie sua conta"}
			</CardDescription>
		</CardHeader>
	);
}
