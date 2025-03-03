function CloseBtn({ onClose }) {
	return (
		<button
			onClick={onClose}
			className="text-white text-2xl ml-auto w-fit
      px-1.5 relative bg-black top-[-5px] right-[-5px] 
      duration-300 ease-out hover:bg-red-500 hover:scale-110 
      active:scale-95 sm:right-[-9px]"
		>
			✕
		</button>
	);
}

export default CloseBtn;
