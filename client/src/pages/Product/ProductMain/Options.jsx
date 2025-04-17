// import { useEffect, useState } from "react";

function Options({ productInfo, setSearchParams, choosen }) {
	return (
		productInfo &&
		productInfo.map((info) => (
			<Option
				info={info}
				key={info.capacity}
				setSearchParams={setSearchParams}
				isSelected={choosen === info.capacity}
			/>
		))
	);
}

function Option({ info, setSearchParams, isSelected }) {
	const handleSelectOption = () => {
		if (isSelected) return;
		setSearchParams({ option: info.capacity });
	};

	return (
		<div
			onClick={handleSelectOption}
			className={`flex items-center justify-between cursor-pointer p-2 border border-b-0 
		${
			isSelected
				? "bg-stone-800 text-white border-black"
				: "hover:bg-gray-100 hover:underline"
		}`}
		>
			<p>{info.capacity} ml</p>
			<p>{info.price} PLN</p>
		</div>
	);
}

export default Options;
