import AdditionalSignInInfo from "./ModalComponents/AdditionalSignInInfo.jsx";
import SignInOptions from "./ModalComponents/SignInOptions.jsx";
import AuthHeader from "./ModalComponents/AuthHeader.jsx";
import CloseBtn from "../../components/UI/CloseBtn.jsx";
import Input from "../../components/UI/Input.jsx";

function Modal({ onClose }) {
	return (
		<div className="p-4 fixed inset-0 bg-black/50 z-1000 flex justify-center items-center overflow-y-hidden">
			<div className="flex flex-col gap-y-2 w-full bg-white p-4 pt-2 pr-2 shadow-lg max-h-8/10 overflow-y-auto sm:px-3 md:max-w-sm">
				<CloseBtn onClose={onClose} />
				<AuthHeader />
				<SignInOptions />
				<Input focus inputName="EMAIL ADDRESS" isRequired={true} />
				<AdditionalSignInInfo />
			</div>
		</div>
	);
}

export default Modal;
