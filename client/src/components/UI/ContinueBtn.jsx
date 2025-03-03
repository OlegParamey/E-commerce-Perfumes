function ContinueBtn({ action = () => {} }) {
	return (
		<div
			className="w-32 h-10 bg-black items-center justify-center flex 
    border-2 border-black shadow-lg text-white
    hover:text-lg hover:underline duration-100 ease-in-out cursor-pointer
    active:text-white/70 active:scale-[0.95]"
		>
			<button className="px-5 py-2 tracking-widest" onClick={action}>
				CONTINUE
			</button>
		</div>
	);
}

export default ContinueBtn;
