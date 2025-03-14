import { useState, useEffect } from "react";
import { MenuIcon, Home, Profile, Cart } from "./Icons.jsx";
import ModalProfile from "../../../pages/Profile/ModalProfile.jsx";
import SlideMenu from "../../../components/UI/Menu/SlideMenu.jsx";
import TextLinks from "./TextLinks.jsx";

function IconLinks() {
	const [isModalProfileOpen, setIsModalProfileOpen] = useState(false);
	const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);

	useEffect(() => {
		const shouldLockScroll = isModalProfileOpen || isSlideMenuOpen;
		document.body.classList.toggle("overflow-hidden", shouldLockScroll);
		return () => document.body.classList.remove("overflow-hidden");
	}, [isModalProfileOpen, isSlideMenuOpen]);

	return (
		<>
			<div className="flex justify-evenly w-full sm:w-fit gap-x-5 text-white text-center">
				<MenuIcon setIsSlideMenuOpen={setIsSlideMenuOpen} />
				<Home />
				<Profile setIsModalProfileOpen={setIsModalProfileOpen} />
				<Cart />
			</div>
			{isModalProfileOpen && (
				<ModalProfile onClose={() => setIsModalProfileOpen(false)} />
			)}
			{isSlideMenuOpen && (
				<SlideMenu onClose={() => setIsSlideMenuOpen(false)}>
					<TextLinks isSmClass={true} extraLinks={true} />
				</SlideMenu>
			)}
		</>
	);
}

export default IconLinks;
