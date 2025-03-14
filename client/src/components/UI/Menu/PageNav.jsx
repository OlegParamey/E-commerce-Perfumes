import ButtonWithTextAndAction from "../ButtonWithTextAndAction";

function PageNav({ currentPage, totalItems, itemsPerPage, setSearchParams }) {
	const prevDisabled = currentPage === 1;
	const nextDisabled = currentPage * itemsPerPage >= totalItems;

	const changePage = (page) => {
		setSearchParams({ page });
	};

	return (
		<div className="flex justify-center items-center gap-4 mt-6">
			<ButtonWithTextAndAction
				text="Previous"
				w="w-22"
				disabled={prevDisabled}
				onClick={() => changePage(currentPage - 1)}
			/>
			<span className="text-xl">Page: {currentPage}</span>
			<ButtonWithTextAndAction
				text="Next"
				w="w-22"
				disabled={nextDisabled}
				onClick={() => changePage(currentPage + 1)}
			/>
		</div>
	);
}

export default PageNav;
