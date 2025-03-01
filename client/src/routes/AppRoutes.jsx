import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import Contacts from "../pages/Contacts";
import Profile from "../pages/Profile/Profile";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="products" element={<Products />} />
			<Route path="about" element={<About />} />
			<Route path="contacts" element={<Contacts />} />
			<Route path="profile" element={<Profile />} />
			<Route path="cart" element={<Cart />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;
