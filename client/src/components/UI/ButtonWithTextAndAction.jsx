function ButtonWithTextAndAction({
	onClick = () => {},
	text = "",
	w = "w-32",
	h = "h-10",
	isLoading = false,
	disabled = false,
	type = "button",
}) {
	return (
		<div
			className={`${w} ${h} bg-black items-center justify-center flex border-2
				border-black shadow-lg text-white duration-100 ease-in-out cursor-pointer
				hover:bg-black/70 hover:underline active:text-white/70 active:scale-[0.95] 
				${
					isLoading
						? "animate-pulse bg-black/70! border-white! hover:no-underline! active:scale-none! hover:bg-black/70! active:text-white!"
						: ""
				}
				${
					disabled
						? "opacity-50 cursor-not-allowed hover:no-underline! active:scale-none! hover:bg-black! active:text-white!"
						: ""
				}`}
		>
			<button
				className="sm:px-5 py-2 tracking-wider uppercase"
				onClick={onClick}
				disabled={disabled}
				type={type}
			>
				{text}
			</button>
		</div>
	);
}

export default ButtonWithTextAndAction;
