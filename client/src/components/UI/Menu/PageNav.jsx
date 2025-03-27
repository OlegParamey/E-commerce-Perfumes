import { useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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

	useEffect(() => {
		if (!searchParams.get("page") || searchParams.get("page") <= 0) {
			changePage(1);
		}
		if (totalItems && totalItems <= itemsPerPage) {
			changePage(1);
		}
	}, [searchParams, navigate, totalItems, itemsPerPage, changePage]);

	useEffect(() => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		setProductsForPage(
			products.slice(startIndex, startIndex + itemsPerPage)
		);
	}, [currentPage, products, setProductsForPage, itemsPerPage]);

	return totalItems >= itemsPerPage ? (
		<div className="flex justify-center items-center gap-x-2 mt-6 border-t">
			<ArrowBtn
				disabled={prevDisabled}
				page={currentPage - 1}
				changePage={changePage}
			>
				<IoIosArrowBack />
			</ArrowBtn>
			<span className="text-xl">Page: {currentPage}</span>
			<ArrowBtn
				disabled={nextDisabled}
				page={currentPage + 1}
				changePage={changePage}
			>
				<IoIosArrowForward />
			</ArrowBtn>
		</div>
	) : (
		<></>
	);
}

function ArrowBtn({ children, disabled, page, changePage }) {
	return (
		<button
			className={`flex justify-center items-center w-10 h-10 pt-0.5 rounded-full
			 duration-200
			${
				disabled
					? "text-transparent"
					: "hover:bg-neutral-200 active:text-white active:bg-black"
			} `}
			onClick={() => changePage(page)}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

export default PageNav;
