import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { type LoginInput, loginSchema } from "@/auth/schemas";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
export function Login() {
	const { login, isLoading, error, clearError } = useAuth();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
	} = useForm<LoginInput>({
		resolver: zodResolver(loginSchema),
		mode: "onChange",
	});

	const onSubmit = async (data: LoginInput) => {
		const result = await login(data);
		console.log(result);
		if (result.success) {
			navigate("/dashboard");
			reset();
			clearErrors();
			clearError();
		}
	};

	return (
		<div>
			{error && (
				<Alert variant="destructive" className="mb-4">
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}
			<div className="space-y-4">
				{/* Email */}
				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						placeholder="seu@email.com"
						{...register("email")}
						className={errors.email ? "border-red-500" : ""}
					/>
					{errors.email && (
						<p className="text-sm text-red-600">{errors.email.message}</p>
					)}
				</div>

				{/* Senha */}
				<div className="space-y-2">
					<Label htmlFor="password">Senha</Label>
					<Input
						id="password"
						type="password"
						placeholder="••••••••"
						{...register("password")}
						className={errors.password ? "border-red-500" : ""}
					/>
					{errors.password && (
						<p className="text-sm text-red-600">{errors.password.message}</p>
					)}
				</div>

				<Button
					onClick={handleSubmit(onSubmit)}
					disabled={isLoading}
					className="w-full"
				>
					{isLoading ? (
						<>
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							Entrando...
						</>
					) : (
						"Entrar"
					)}
				</Button>
			</div>
		</div>
	);
}
