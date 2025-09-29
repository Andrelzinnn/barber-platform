import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createClient } from "@/auth/api";
import { type RegisterInput, registerSchema } from "@/auth/schemas";
import { PhoneInput } from "@/components/PhoneInput";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";

export function Register() {
	const { registerUser, isLoading, error, clearError } = useAuth();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
	} = useForm<RegisterInput>({
		resolver: zodResolver(registerSchema),
		mode: "onChange",
	});

	const onSubmit = async (data: RegisterInput) => {
		const { success } = await registerUser(data);
		console.log(data);
		await createClient(data);
		if (success) {
			navigate("/dashboard");
			alert("Cadastro realizado com sucesso!");
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
				<div className="space-y-2">
					<Label htmlFor="name">Nome</Label>
					<Input
						id="name"
						type="text"
						placeholder="Seu nome"
						{...register("name")}
						className={errors.name ? "border-red-500" : ""}
					/>
					{errors.name && (
						<p className="text-sm text-red-600">{errors.name.message}</p>
					)}
				</div>

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

				{/* Campo Telefone com Controller */}
				<div className="space-y-2">
					<Label htmlFor="phone">Telefone (opcional)</Label>
					<PhoneInput
						id="phone"
						{...register("phone")}
						placeholder="(11) 99999-9999"
					/>
				</div>

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

				<div className="space-y-2">
					<Label htmlFor="confirm-password">Confirmar senha</Label>
					<Input
						id="confirm-password"
						type="password"
						placeholder="••••••••"
						{...register("confirmPassword")}
						className={errors.confirmPassword ? "border-red-500" : ""}
					/>
					{errors.confirmPassword && (
						<p className="text-sm text-red-600">
							{errors.confirmPassword.message}
						</p>
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
							Criando conta...
						</>
					) : (
						"Criar conta"
					)}
				</Button>
			</div>
		</div>
	);
}
