function GlassCardWithText({ children, text }) {
	const glassCardClass =
		"bg-white/40 absolute w-1/3 min-h-2/3 max-h-4/5 sm:h-3/4 p-2 m-5 backdrop-blur-sm backdrop-brightness-120 rounded-md shadow-2xl flex flex-col sm:gap-y-2 justify-center items-center";

	return (
		<div className={glassCardClass}>
			<p className="text-xs sm:text-base md:text-xl text-center p-1">
				{text}
			</p>
			{children}
		</div>
	);
}

export default GlassCardWithText;
