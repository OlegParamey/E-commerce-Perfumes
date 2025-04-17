function ProductCardLoading() {
	const cardContainerClass = `flex flex-col flex-grow justify-between items-center cursor-pointer
		p-2 text-center text-sm shadow-lg bg-zinc-100/50 border-2 border-zinc-200/50
		duration-100 ease-in-out hover:scale-102 hover:border-zinc-200 active:scale-99`;

	return (
		<div className={cardContainerClass}>
			<div className="w-50 h-50 bg-stone-300 animate-pulse"></div>
			<div className="w-4/5 h-5 mt-3 rounded-full bg-stone-300 animate-pulse"></div>
			<div className="w-3/5 h-4 my-2 rounded-full bg-stone-300 animate-pulse"></div>
			<div className="flex justify-between w-full px-1 border-y pb-1 italic">
				<div className="w-1/5 h-3 my-2 rounded-full bg-stone-300 animate-pulse"></div>
				<div className="w-1/5 h-3 my-2 rounded-full bg-stone-300 animate-pulse"></div>
			</div>
			<div className="flex justify-between w-full px-1 border-b pb-1 italic">
				<div className="w-1/5 h-3 my-2 rounded-full bg-stone-300 animate-pulse"></div>
				<div className="w-1/5 h-3 my-2 rounded-full bg-stone-300 animate-pulse"></div>
			</div>
		</div>
	);
}

export function ProductListLoading() {
	return (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] m-8 gap-3 sm:gap-6 sm:m-5">
			{Array.from({ length: 20 }, (_, index) => (
				<ProductCardLoading key={index} loading={true} />
			))}
		</div>
	);
}
