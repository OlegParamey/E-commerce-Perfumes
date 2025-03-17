import SlideMenu from "../../../components/UI/Menu/SlideMenu";
// import CreateFilterList from "../../../utils/CreateFilterList";

function SideBarFilterMenu({ onClose, filterData, loading, errorMsg }) {
	const handleCloseAnimation = () => {
		setTimeout(onClose, 100);
	};

	return (
		<>
			{loading && <div>Loading...</div>}
			{errorMsg && <div>{errorMsg}</div>}
			{filterData && (
				<SlideMenu onClose={handleCloseAnimation}>
					<div>SideBarFilter</div>
					<div>SideBarFilter</div>
					<div>SideBarFilter</div>
					<div>SideBarFilter</div>
					<div>SideBarFilter</div>
				</SlideMenu>
			)}
		</>
	);
}

export default SideBarFilterMenu;
