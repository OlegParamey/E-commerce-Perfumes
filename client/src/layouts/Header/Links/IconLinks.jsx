import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../../../pages/Profile/ModalProfile.jsx";

function IconLinks() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		if (isModalOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
		return () => document.body.classList.remove("overflow-hidden");
	}, [isModalOpen]);

	return (
		<>
			<div className="flex justify-center  gap-x-5 text-white text-center">
				<NavLink>
					<div
						onClick={() => setIsModalOpen(true)}
						className="w-8 h-8 bg-blue-800 rounded-full"
					>
						P
					</div>
				</NavLink>
				<NavLink to="cart">
					<div className="w-8 h-8 bg-teal-800 rounded-full">C</div>
				</NavLink>
			</div>
			{isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
		</>
	);
}

export default IconLinks;
