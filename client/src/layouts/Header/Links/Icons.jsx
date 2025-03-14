import { NavLink } from "react-router-dom";
import IconWithAnimationActionContainer from "../../../components/UI/IconWithAnimationActionContainer.jsx";
import { FaBars } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";

function handleActiveClass({ isActive }) {
	return isActive ? " !text-rose-500" : "";
}

function MenuIcon({ setIsSlideMenuOpen }) {
	return (
		<IconWithAnimationActionContainer
			isSmHidden
			onClick={() => setIsSlideMenuOpen(true)}
		>
			<FaBars />
		</IconWithAnimationActionContainer>
	);
}

function Home() {
	return (
		<IconWithAnimationActionContainer isSmHidden>
			<NavLink
				to="/"
				className={({ isActive }) =>
					`${handleActiveClass({
						isActive,
					})}`
				}
			>
				<GoHomeFill />
			</NavLink>
		</IconWithAnimationActionContainer>
	);
}

function Profile({ setIsModalProfileOpen }) {
	return (
		<IconWithAnimationActionContainer
			onClick={() => setIsModalProfileOpen(true)}
		>
			<RiAccountCircleFill />
		</IconWithAnimationActionContainer>
	);
}

function Cart() {
	return (
		<IconWithAnimationActionContainer>
			<NavLink
				to="cart"
				className={({ isActive }) =>
					`${handleActiveClass({
						isActive,
					})}`
				}
			>
				<FaCartShopping />
			</NavLink>
		</IconWithAnimationActionContainer>
	);
}

export { MenuIcon, Home, Profile, Cart };
