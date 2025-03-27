import Option from "./Option";
import { useUrlFilters } from "../../../hooks/useUrlFilters";

function FilterDetails({ array, slug, summary }) {
	const detailsClass = "border-b py-1 hover:bg-neutral-100";
	const summaryClass = "text-2xl tracking-wide";
	const { setFilter, isSelected } = useUrlFilters();

	return (
		<details className={detailsClass}>
			<summary className={summaryClass}>{summary}</summary>
			<ul>
				{array.map((element) => (
					<Option
						key={element}
						element={element}
						onClick={() => setFilter(slug, element)}
						selected={isSelected(slug, element)}
					/>
				))}
			</ul>
		</details>
	);
}

export default FilterDetails;
