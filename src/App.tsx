import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/NavBar";
import { ProtectedRoute } from "@/lib/ProtectedRoutes";
import { Appointments } from "@/pages/Appointments";
import { ServicesPage } from "@/pages/admin/Services";
import { Dashboard } from "@/pages/Dashboard";
import { LoginPage } from "@/pages/LoginPage";
import { Profile } from "@/pages/Profile";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />

				<Routes>
					<Route path="/login" element={<LoginPage />} />

					<Route path="/" element={<ProtectedRoute />}>
						<Route index element={<Dashboard />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/appointments" element={<Appointments />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/admin/services" element={<ServicesPage />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
