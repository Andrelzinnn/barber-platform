import { useState } from "react";
import { Login } from "@/components/auth/Login";
import { ModeSwitch } from "@/components/auth/ModeSwitch";
import { Register } from "@/components/auth/Register";
import { LoginRegisterCardHeader } from "@/components/LoginRegisterCardHeader";
import { Card, CardContent } from "@/components/ui/card";

export function LoginPage() {
	const [isLogin, setIsLogin] = useState(true);
	const toggleMode = () => setIsLogin(!isLogin);
	return (
		<div className="min-h-screen pt-20 pb-20 md:pb-4 flex items-center justify-center p-4">
			<div className="w-full max-w-md flex flex-col gap-6">
				<Card>
					{isLogin ? (
						<CardContent key="login" className="space-y-4">
							<LoginRegisterCardHeader isLogin={true} />
							<ModeSwitch isLogin={true} onToggle={toggleMode} />
							<Login />
						</CardContent>
					) : (
						<CardContent key="register" className="space-y-4">
							<LoginRegisterCardHeader isLogin={false} />
							<ModeSwitch isLogin={false} onToggle={toggleMode} />
							<Register />
						</CardContent>
					)}
				</Card>
			</div>
		</div>
	);
}
