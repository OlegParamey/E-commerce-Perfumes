import FilterSortMain from "./FilterSortMain";

function SideBarFilterSortMenu({ onClose, filterData, loading, errorMsg }) {
	return (
		<>
			{loading && <div>Loading...</div>}
			{errorMsg && <div>{errorMsg}</div>}
			{filterData && (
				<FilterSortMain onClose={onClose} filterData={filterData} />
			)}
		</>
	);
}

export default SideBarFilterSortMenu;
