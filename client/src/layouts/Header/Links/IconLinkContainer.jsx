function IconLinkContainer({ children, onClick, isSmHidden = false }) {
	const smHidden = isSmHidden ? "sm:hidden" : "";
	return (
		<div
			onClick={onClick}
			className={`w-10 h-10 transition-transform duration-50 ease-out border-3
				hover:bg-sky-100 hover:border-sky-100 hover:border-3 hover:p-0.5 hover:scale-115
				cursor-pointer rounded-tl-xl rounded-br-xl rounded-tr-3xl rounded-bl-3xl active:scale-97
				${smHidden}`}
		>
			{children}
		</div>
	);
}

export default IconLinkContainer;
