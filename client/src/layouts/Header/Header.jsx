import TextLinks from "./Links/TextLinks.jsx";
import IconLinks from "./Links/IconLinks.jsx";

function Header() {
	return (
		<>
			<nav
				className="bg-white text-neutral-900 p-2 min-h-20
			flex flex-row justify-evenly gap-5 items-center
			border-b-8 sm:p-3 sm:justify-between"
			>
				<TextLinks />
				<IconLinks />
			</nav>
		</>
	);
}

export default Header;
