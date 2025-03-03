import TextLinkContainer from "./TextLinkContainer";

function TextLinks({ isSmClass = false }) {
	return (
		<div
			className={
				isSmClass
					? "flex flex-col gap-y-4 p-4 font-sans uppercase text-3xl"
					: "hidden sm:flex font-sans uppercase text-lg sm:flex-row sm:text-2xl sm:gap-x-6"
			}
		>
			<TextLinkContainer to="" end={true} text="Home" />
			<TextLinkContainer to="products" text="Products" />
			<TextLinkContainer to="about" text="About" />
			<TextLinkContainer to="contacts" text="Contacts" />
		</div>
	);
}

export default TextLinks;
