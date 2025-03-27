import { useState, useEffect } from "react";
import { getFilterData } from "../../../fetch/filter";
import FilterIconBtn from "./FilterIconBtn";
import SearchString from "./SearchString";
import SideBarFilterSortMenu from "../FilterSort/SideBarFilterSortMenu";
import URL from "../../../data/URL";

function TopNav() {
	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
	const [filterData, setFilterData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [errorMsg, setErrorMsg] = useState();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await getFilterData(URL);
				setFilterData({
					...data,
					capacity: data.capacity.map((el) => el.toString()),
				});
			} catch (error) {
				setErrorMsg(error.message);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const shouldLockScroll = isFilterMenuOpen;
		document.body.classList.toggle("overflow-hidden", shouldLockScroll);
		return () => document.body.classList.remove("overflow-hidden");
	}, [isFilterMenuOpen]);

	return (
		<>
			<div
				className=" bg-neutral-100 flex flex-row items-center shadow-md 
				gap-x-2 p-2 sm:py-3 sm:px-3.5 sm:gap-x-4"
			>
				<FilterIconBtn onOpen={() => setIsFilterMenuOpen(true)} />
				<SearchString />
			</div>
			{isFilterMenuOpen && (
				<SideBarFilterSortMenu
					onClose={() => setIsFilterMenuOpen(false)}
					filterData={filterData}
					loading={loading}
					errorMsg={errorMsg}
				/>
			)}
		</>
	);
}

export default TopNav;
