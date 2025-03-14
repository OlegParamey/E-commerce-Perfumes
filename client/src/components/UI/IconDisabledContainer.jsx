function IconDisabledContainer({ children, onClick, isSmHidden = false }) {
	return (
		<div
			onClick={onClick}
			className={`w-10 h-10 p-1 m-auto text-2xl flex items-center justify-around
				absolute top-1/2  -translate-y-1/2 text-stone-500/80 peer-focus:text-black 
				${isSmHidden ? "sm:hidden" : ""}`}
		>
			{children}
		</div>
	);
}

export default IconDisabledContainer;
