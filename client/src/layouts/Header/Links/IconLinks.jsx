import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import IconLinkContainer from "./IconLinkContainer.jsx";
import ProfileIcon from "../../../components/UI/Icons/ProfileIcon.jsx";
import MenuIcon from "../../../components/UI/Icons/Menu/MenuIcon.jsx";
import HomeIcon from "../../../components/UI/Icons/HomeIcon.jsx";
import CartIcon from "../../../components/UI/Icons/CartIcon.jsx";
import ModalProfile from "../../../pages/Profile/ModalProfile.jsx";
import SlideMenu from "../../../components/UI/Icons/Menu/SlideMenu.jsx";

function IconLinks() {
	const [isModalProfileOpen, setIsModalProfileOpen] = useState(false);
	const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);

	useEffect(() => {
		document.body.classList.toggle("overflow-hidden", isModalProfileOpen);
		return () => document.body.classList.remove("overflow-hidden");
	}, [isModalProfileOpen]);

	useEffect(() => {
		document.body.classList.toggle("overflow-hidden", isSlideMenuOpen);
		return () => document.body.classList.remove("overflow-hidden");
	}, [isSlideMenuOpen]);

	return (
		<>
			<div className="flex justify-evenly w-full sm:w-fit gap-x-5 text-white text-center">
				<IconLinkContainer
					isSmHidden
					onClick={() => setIsSlideMenuOpen(true)}
				>
					<MenuIcon />
				</IconLinkContainer>
				<IconLinkContainer isSmHidden>
					<NavLink to="/">
						<HomeIcon />
					</NavLink>
				</IconLinkContainer>
				<IconLinkContainer onClick={() => setIsModalProfileOpen(true)}>
					<ProfileIcon />
				</IconLinkContainer>
				<IconLinkContainer>
					<NavLink to="cart">
						<CartIcon />
					</NavLink>
				</IconLinkContainer>
			</div>
			{isModalProfileOpen && (
				<ModalProfile onClose={() => setIsModalProfileOpen(false)} />
			)}
			{isSlideMenuOpen && (
				<SlideMenu onClose={() => setIsSlideMenuOpen(false)} />
			)}
		</>
	);
}

export default IconLinks;
