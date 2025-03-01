import AppRoutes from "./routes/AppRoutes.jsx";
import Header from "./layouts/Header/Header.jsx";
import Footer from "./layouts/Footer.jsx";

function App() {
	return (
		<div>
			<Header />
			<main className="w-full h-screen bg-slate-100">
				<AppRoutes />
			</main>
			<Footer />
		</div>
	);
}

export default App;
