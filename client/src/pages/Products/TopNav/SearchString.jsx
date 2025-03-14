import IconDisabledContainer from "../../../components/UI/IconDisabledContainer";
import { FaSearch } from "react-icons/fa";

function SearchString({ value, setValue }) {
	return (
		<div className="relative w-full sm:w-92">
			<input
				type="text"
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
				className="w-full min-h-10 border-2 border-neutral-500 
        rounded-xs pl-8.5 py-1.5 pr-4 peer overflow-ellipsis 
        text-sm sm:text-md md:text-xl"
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
