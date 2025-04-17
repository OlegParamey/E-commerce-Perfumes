import ButtonWithTextAndAction from "../../../components/UI/ButtonWithTextAndAction";

export function ProductMainLoading() {
	return (
		<div
			className="flex flex-col items-center justify-evenly gap-x-5
     gap-y-5 w-full min-h-[90vh] max-w-screen md:flex-row my-6 text-black"
		>
			<div className="max-w-[280px] sm:max-w-[400px] ml-4">
				<HeaderSmall />
				<Img />
			</div>
			<div className="flex flex-col items-center mx-0 lg:mx-4 w-full sm:w-125 gap-y-3">
				<HeaderLarge />
				<div className="flex flex-col gap-y-1">
					<Description />
				</div>
				<Options />
				<ButtonWithTextAndAction
					text="add to cart"
					w="w-38"
					h="h-12"
					isLoading={true}
				/>
			</div>
		</div>
	);
}

function HeaderSmall() {
	return (
		<div className="md:hidden block ">
			<div className="w-4/5 h-5 mt-3 rounded-full bg-stone-300 animate-pulse mx-auto" />
			<div className="w-3/5 h-5 my-3 rounded-full bg-stone-300 animate-pulse mx-auto" />
		</div>
	);
}

function HeaderLarge() {
	return (
		<>
			<div className="h-7 w-55 rounded-2xl mx-auto bg-stone-300 animate-pulse" />
			<div className="h-6 w-40 rounded-2xl mx-auto bg-stone-300 animate-pulse" />
		</>
	);
}

function Img() {
	return (
		<div
			className="shadow-2xl w-65 h-65 sm:w-90 sm:h-90 md:w-100 md:h-100 mx-auto md:ml-4
 bg-stone-300 rounded-sm border-2 border-zinc-200/50 animate-pulse"
		/>
	);
}

function Description() {
	return (
		<>
			<div className="h-4 w-72 rounded-2xl mx-auto bg-stone-300 animate-pulse" />
			<div className="h-4 w-74 rounded-2xl mx-auto bg-stone-300 animate-pulse" />
			<div className="h-4 w-65 rounded-2xl mx-auto bg-stone-300 animate-pulse" />
			<div className="h-4 w-45 rounded-2xl mx-auto bg-stone-300 animate-pulse" />
		</>
	);
}

function Options() {
	return (
		<div className="flex flex-col w-3/5 sm:w-4/5 h-30 my-2 bg-stone-200 animate-pulse">
			<div className="border-b border-neutral-100 h-10 animate-pulse" />
			<div className="border-b border-neutral-100 h-10 animate-pulse" />
		</div>
	);
}
