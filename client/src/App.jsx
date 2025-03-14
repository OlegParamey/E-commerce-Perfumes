import AppRoutes from "./routes/AppRoutes.jsx";
import Header from "./layouts/Header/Header.jsx";
import Footer from "./layouts/Footer.jsx";

function App() {
	return (
		<div className="flex flex-col ">
			<Header />
			<main className="w-full min-h-screen bg-white z-10">
				<AppRoutes />
			</main>
			<Footer />
		</div>
	);
}

export default App;
