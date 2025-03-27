import { useUrlFilters } from "../../../hooks/useUrlFilters";
import SlideMenu from "../../../components/UI/Menu/SlideMenu";
import FilterHeader from "./FilterHeader";
import FilterDetails from "./FilterDetails";
import FilterPrice from "./FilterPrice";
import SortDetails from "./SortDetails";

function FilterSortMain({ onClose, filterData }) {
	const { resetFilters } = useUrlFilters();
	const handleCloseAnimation = () => {
		setTimeout(onClose, 100);
	};
	return (
		<SlideMenu onClose={handleCloseAnimation} p="px-4 py-2">
			<form
				autoComplete="off"
				className="max-h-[75vh] overflow-y-scroll font-mono"
			>
				<nav>
					<FilterHeader resetFilters={resetFilters} />

					<section className="overflow-x-hidden">
						<SortDetails slug="sort" summary="Sort by" />

						<FilterDetails
							slug="brand"
							summary="Brand"
							array={filterData.brand}
						/>

						<FilterDetails
							slug="title"
							summary="Title"
							array={filterData.title}
						/>

						<FilterDetails
							slug="capacity"
							summary="Capacity"
							array={filterData.capacity}
						/>

						<FilterPrice summary="Price range" />
					</section>
				</nav>
			</form>
		</SlideMenu>
	);
}

export default FilterSortMain;
