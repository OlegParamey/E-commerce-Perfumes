import { useState, useEffect } from "react";
import CloseBtn from "../CloseBtn.jsx";

function SlideMenu({ children, onClose }) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => setIsVisible(true), 10);
		return () => setIsVisible(false);
	}, []);

	const handleClose = () => {
		setIsVisible(false);
		setTimeout(onClose, 300);
	};

	return (
		<div
			className={`absolute left-0 top-0 inset-0 flex flex-col p-5  min-h-fit h-full max-h-screen
				bg-neutral-50 sm:max-w-1/2 lg:max-w-1/3 transition-all duration-200 ease-in-out shadow-2xl
        ${isVisible ? "translate-x-0" : "-translate-x-full"}`}
		>
			<CloseBtn onClose={handleClose} />
			{children}
		</div>
	);
}

export default SlideMenu;
