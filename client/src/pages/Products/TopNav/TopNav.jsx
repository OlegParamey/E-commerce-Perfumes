import { useState } from "react";
import FilterIconBtn from "./FilterIconBtn";
import ButtonWithTextAndAction from "../../../components/UI/ButtonWithTextAndAction";
import SearchString from "./SearchString";
import SideBarFilterMenu from "../Filter/SideBarFilterMenu";

function TopNav() {
	const [searchValue, setSearchValue] = useState("");
	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

	function handleSubmitForm(e) {
		e.preventDefault();
		if (searchValue.length !== 0) {
			console.log(searchValue);
		}
	}

	return (
		<>
			<form
				onSubmit={(e) => handleSubmitForm(e)}
				className=" bg-neutral-100 flex flex-row items-center shadow-md gap-x-2 p-2 sm:py-3 sm:px-3.5 sm:gap-x-4"
			>
				<FilterIconBtn onOpen={() => setIsFilterMenuOpen(true)} />
				<SearchString value={searchValue} setValue={setSearchValue} />
				<ButtonWithTextAndAction text="Search" w="w-20" />
			</form>
			{isFilterMenuOpen && (
				<SideBarFilterMenu onClose={() => setIsFilterMenuOpen(false)} />
			)}
		</>
	);
}

export default TopNav;
