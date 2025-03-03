import { useState, useEffect } from "react";
import TextLinks from "../../../../layouts/Header/Links/TextLinks.jsx";
import CloseBtn from "../../../../components/UI/CloseBtn.jsx";

function SlideMenu({ onClose }) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
		return () => setIsVisible(false);
	}, []);

	const handleClose = () => {
		setIsVisible(false);
		setTimeout(onClose, 300);
	};

	return (
		<div
			className={`absolute left-0 top-0 inset-0 flex flex-col p-5
				bg-neutral-50 sm:hidden transition-all duration-200 ease-in-out
        ${isVisible ? "translate-x-0" : "-translate-x-full"}`}
		>
			<CloseBtn onClose={handleClose} />
			<TextLinks isSmClass={true} />
		</div>
	);
}

export default SlideMenu;
