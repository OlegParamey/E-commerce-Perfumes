import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Contacts from "./pages/Contacts";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout";

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="products" element={<Products />} />
				<Route path="product/:productId" element={<Product />} />
				<Route path="about" element={<About />} />
				<Route path="contacts" element={<Contacts />} />
				<Route path="profile" element={<Profile />} />
				<Route path="cart" element={<Cart />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
