import { useState, useEffect } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import { useURLInputs } from "../../../hooks/useURLInputs";

function FilterDetails({ summary }) {
	const detailsClass = "border-b py-1 hover:bg-neutral-100";
	const summaryClass = "text-2xl tracking-wide";
	const priceInputClass = `w-full min-h-10 border-2 border-neutral-500 
        rounded-xs my-3 py-1.5 px-4 peer overflow-ellipsis 
        text-sm sm:text-md`;

	const { setSearch, searchParams } = useURLInputs();
	const [inputFrom, setInputFrom] = useState(
		() => searchParams.get("price_min") || ""
	);
	const [inputTo, setInputTo] = useState(
		() => searchParams.get("price_max") || ""
	);

	useEffect(() => {
		if (!searchParams.get("price_min")) setInputFrom("");
		if (!searchParams.get("price_max")) setInputTo("");
	}, [searchParams]);

	const debouncedInputFrom = useDebounce(inputFrom);
	const debouncedInputTo = useDebounce(inputTo);

	const handleInputChange = (event, setValue) => {
		let value = event.target.value;
		value = value.replace(/\D/g, "");
		setValue(value);
	};

	useEffect(() => {
		setSearch("price_min", debouncedInputFrom);
	}, [debouncedInputFrom, setSearch]);

	useEffect(() => {
		setSearch("price_max", debouncedInputTo);
	}, [debouncedInputTo, setSearch]);

	return (
		<details className={detailsClass}>
			<summary className={summaryClass}>{summary}</summary>
			<div className="w-full border border-b-0 p-2">
				<label>From:</label>
				<input
					value={inputFrom}
					onChange={(e) => handleInputChange(e, setInputFrom)}
					type="text"
					className={priceInputClass}
					placeholder="From"
					title="From"
					maxLength="4"
				/>
			</div>
			<div className="w-full border p-2 mb-1">
				<label>To:</label>
				<input
					value={inputTo}
					onChange={(e) => handleInputChange(e, setInputTo)}
					type="text"
					className={priceInputClass}
					placeholder="To"
					title="To"
					maxLength="4"
				/>
			</div>
		</details>
	);
}

export default FilterDetails;
