import { useSearchParams } from "react-router-dom";
import { useEffect, useCallback, memo } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function PageNav({ totalItems, itemsPerPage }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentPage = Number(searchParams.get("page")) || 1;

	const changePage = useCallback(
		(page) => {
			setSearchParams((prevParams) => {
				const newParams = new URLSearchParams(prevParams);
				newParams.set("page", page);
				return newParams;
			});
		},
		[setSearchParams]
	);

	useEffect(() => {
		const shouldResetToPage1 =
			(!searchParams.get("page") && currentPage !== 1) ||
			(totalItems <= itemsPerPage && currentPage > 1) ||
			!searchParams.get("page");

		if (shouldResetToPage1) {
			changePage(1);
		}
	});

	return (
		totalItems >= itemsPerPage && (
			<div className="flex justify-center items-center gap-x-2 my-0 border-t-0 py-2 bg-stone-200">
				<ArrowBtn
					disabled={currentPage === 1}
					page={currentPage - 1}
					changePage={changePage}
				>
					<IoIosArrowBack />
				</ArrowBtn>
				<span className="text-xl">Page: {currentPage}</span>
				<ArrowBtn
					disabled={currentPage * itemsPerPage >= totalItems}
					page={currentPage + 1}
					changePage={changePage}
				>
					<IoIosArrowForward />
				</ArrowBtn>
			</div>
		)
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
					: "hover:bg-neutral-300 active:text-white active:bg-black"
			} `}
			onClick={() => changePage(page)}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

export default memo(PageNav);
