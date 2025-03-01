import { NavLink } from "react-router-dom";

function TextLinks() {
	return (
		<div className="flex flex-col font-sans uppercase text-lg sm:flex-row sm sm:text-2xl sm:gap-x-6">
			<LinkWithText to="" end={true} text="Home" />
			<LinkWithText to="products" text="Products" />
			<LinkWithText to="about" text="About" />
			<LinkWithText to="contacts" text="Contacts" />
		</div>
	);
}

function handleActiveClass({ isActive }) {
	return isActive ? "underline text-rose-500" : "";
}

function LinkWithText({ text, to, end = false }) {
	return (
		<NavLink
			to={to}
			end={end}
			className={({ isActive }) => handleActiveClass({ isActive })}
		>
			{text}
		</NavLink>
	);
}

export default TextLinks;
