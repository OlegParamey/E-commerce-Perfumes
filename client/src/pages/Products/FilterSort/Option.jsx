import { useEffect, useState } from "react";

function Option({ element, selected, onClick }) {
	const [isActive, setIsActive] = useState(selected);

	useEffect(() => {
		setIsActive(selected);
	}, [selected]);

	const liClass = `text-lg sm:text-xl bg-white hover:underline hover:bg-neutral-200 cursor-pointer truncate
	${isActive ? "text-rose-500 bg-rose-100!" : ""}`;

	return (
		<li className={liClass} key={element} title={element} onClick={onClick}>
			{element}
		</li>
	);
}

export default Option;
