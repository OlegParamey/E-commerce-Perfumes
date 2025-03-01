import TextLinks from "./Links/TextLinks.jsx";
import IconLinks from "./Links/IconLinks.jsx";

function Header() {
	return (
		<>
			<nav className="bg-white text-neutral-900 p-2 flex justify-between border-b-10 border-double sm:p-4">
				<TextLinks />
				<IconLinks />
			</nav>
		</>
	);
}

export default Header;
