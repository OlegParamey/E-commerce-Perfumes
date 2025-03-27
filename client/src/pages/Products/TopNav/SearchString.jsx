import { useEffect, useState } from "react";
import { useURLInputs } from "../../../hooks/useURLInputs";
import { useDebounce } from "../../../hooks/useDebounce";
import IconDisabledContainer from "../../../components/UI/IconDisabledContainer";
import { FaSearch } from "react-icons/fa";

function SearchString() {
	const inputSearchClass = `w-full min-h-10 border-2 border-neutral-500
	 rounded-xs pl-8.5 py-1.5 pr-4 peer 
	 overflow-ellipsis text-sm sm:text-md md:text-xl`;
	const { setSearch, searchParams } = useURLInputs();
	const [localSearch, setLocalSearch] = useState(
		() => searchParams.get("search") || ""
	);
	const debouncedSearch = useDebounce(localSearch, 1000);

	const handleInputChange = (event) => {
		let value = event.target.value;
		if (value[0] === " ") {
			value = value.trim();
		}
		value = value.replace(/\s+/g, " ");
		setLocalSearch(value);
	};

	useEffect(() => {
		setSearch("search", debouncedSearch);
	}, [debouncedSearch, setSearch]);

	return (
		<div className="relative w-full sm:w-92">
			<input
				type="text"
				value={localSearch}
				onChange={(e) => {
					handleInputChange(e);
				}}
				className={inputSearchClass}
				placeholder="Type here to search"
				title="Type here to search"
			/>
			<IconDisabledContainer>
				<FaSearch />
			</IconDisabledContainer>
		</div>
	);
}

export default SearchString;
