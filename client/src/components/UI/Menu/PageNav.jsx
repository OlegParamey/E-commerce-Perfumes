import { useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ButtonWithTextAndAction from "../ButtonWithTextAndAction";

function PageNav({
	totalItems,
	products,
	searchParams,
	setSearchParams,
	setProductsForPage,
}) {
	const navigate = useNavigate();
	const currentPage = Number(searchParams.get("page")) || 1;
	const itemsPerPage = 20;
	const { prevDisabled, nextDisabled } = useMemo(
		() => ({
			prevDisabled: currentPage === 1,
			nextDisabled: currentPage * itemsPerPage >= totalItems,
		}),
		[currentPage, totalItems]
	);

	useEffect(() => {
		if (!searchParams.get("page")) {
			navigate("?page=1", { replace: true });
		}
	}, [searchParams, navigate]);

	useEffect(() => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		setProductsForPage(
			products.slice(startIndex, startIndex + itemsPerPage)
		);
	}, [currentPage, products, setProductsForPage]);

	const changePage = useCallback(
		(page) => {
			setSearchParams((prev) => {
				const newParams = new URLSearchParams(prev);
				newParams.set("page", page);
				return newParams;
			});
		},
		[setSearchParams]
	);

	return totalItems >= itemsPerPage ? (
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
	) : (
		<></>
	);
}

export default PageNav;
