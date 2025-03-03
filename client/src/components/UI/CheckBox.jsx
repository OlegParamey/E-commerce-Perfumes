function CheckBox({ text }) {
	return (
		<label
			htmlFor="hr"
			className="flex flex-row items-center gap-2.5 text-black text-md cursor-pointer hover:underline"
		>
			<input id="hr" type="checkbox" className="peer hidden" />
			<div
				htmlFor="hr"
				className="h-5 w-5 flex border-1 border-black bg-white peer-checked:bg-black transition"
			>
				<svg
					fill="none"
					viewBox="0 0 24 24"
					className="w-5 h-5 stroke-white"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4 12.6111L8.92308 17.5L20 6.5"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
				</svg>
			</div>
			{text}
		</label>
	);
}

export default CheckBox;
