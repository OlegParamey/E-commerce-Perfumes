import { useEffect, useState } from "react";
import AdditionalSignInInfo from "./ModalComponents/AdditionalSignInInfo.jsx";
import SignInOptions from "./ModalComponents/SignInOptions.jsx";
import AuthHeader from "./ModalComponents/AuthHeader.jsx";
import CheckBox from "../../components/UI/CheckBox.jsx";
import CloseBtn from "../../components/UI/CloseBtn.jsx";
import ButtonWithTextAndAction from "../../components/UI/ButtonWithTextAndAction.jsx";
import Input from "../../components/UI/Input.jsx";

function ModalProfile({ onClose }) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => setIsVisible(true), 10);
	}, []);

	const handleCloseAnimation = () => {
		setIsVisible(false);
		setTimeout(onClose, 100);
	};

	const modalBackground =
		"fixed inset-0 bg-black/50 z-50 flex justify-center items-center backdrop-blur-sm";
	const modalWindow = `relative flex flex-col gap-y-2 w-full
					bg-white p-4 pt-2 pr-2 shadow-lg max-h-10/11 
					overflow-y-auto sm:mx-5 sm:px-3 md:max-w-sm sm:overflow-hidden
					transition-all duration-200 ease-out transform 
					${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`;

	return (
		<div className={modalBackground}>
			<div className={modalWindow}>
				<CloseBtn onClose={handleCloseAnimation} />
				<AuthHeader />
				<SignInOptions />
				<Input focus inputName="EMAIL ADDRESS" isRequired={true} />
				<CheckBox text="Keep me logged in. Applies to all options." />
				<ButtonWithTextAndAction text="continue" />
				<AdditionalSignInInfo />
			</div>
		</div>
	);
}

export default ModalProfile;
