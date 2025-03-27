import { useURLSort } from "../../../hooks/useURLSort";
import Option from "./Option";

function SortDetails({ slug, summary }) {
	const detailsClass = "border-b py-1 hover:bg-neutral-100";
	const summaryClass = "text-2xl tracking-wide";
	const sortMethods = [
		{ "PRICE (LOW TO HIGH)": "plth" },
		{ "PRICE (HIGH TO LOW)": "phtl" },
		{ "CAPACITY (LOW TO HIGH)": "clth" },
		{ "CAPACITY (HIGH TO LOW)": "chtl" },
	];
	const { setSort, isSelected } = useURLSort();

	return (
		<details className={detailsClass}>
			<summary className={summaryClass}>{summary}</summary>
			<ul>
				{sortMethods.map((obj) =>
					Object.entries(obj).map(([key, val]) => {
						return (
							<Option
								key={key}
								element={key}
								onClick={() => setSort(slug, val)}
								selected={isSelected(slug, val)}
							/>
						);
					})
				)}
			</ul>
		</details>
	);
}

export default SortDetails;
