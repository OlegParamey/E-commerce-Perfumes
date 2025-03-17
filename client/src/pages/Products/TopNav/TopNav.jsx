import { useState, useEffect } from "react";
import { getFilterData } from "../../../fetch/filter";
import FilterIconBtn from "./FilterIconBtn";
import ButtonWithTextAndAction from "../../../components/UI/ButtonWithTextAndAction";
import SearchString from "./SearchString";
import SideBarFilterMenu from "../Filter/SideBarFilterMenu";
import URL from "../../../data/URL";

function TopNav() {
	const [searchValue, setSearchValue] = useState("");
	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
	const [filterData, setFilterData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [errorMsg, setErrorMsg] = useState();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await getFilterData(URL);
				setFilterData(data);
			} catch (error) {
				setErrorMsg(error.message);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	function handleSubmitSearch(e) {
		e.preventDefault();
		if (searchValue.length !== 0) {
			console.log(searchValue);
		}
	}

	return (
		<>
			<form
				onSubmit={(e) => handleSubmitSearch(e)}
				className=" bg-neutral-100 flex flex-row items-center shadow-md gap-x-2 p-2 sm:py-3 sm:px-3.5 sm:gap-x-4"
			>
				<FilterIconBtn onOpen={() => setIsFilterMenuOpen(true)} />
				<SearchString value={searchValue} setValue={setSearchValue} />
				<ButtonWithTextAndAction text="Search" w="w-20" />
			</form>
			{isFilterMenuOpen && (
				<SideBarFilterMenu
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
