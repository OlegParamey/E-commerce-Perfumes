import SlideMenu from "../../../components/UI/Menu/SlideMenu";

function SideBarFilterMenu({ onClose }) {
	const handleCloseAnimation = () => {
		setTimeout(onClose, 100);
	};

	return (
		<SlideMenu onClose={handleCloseAnimation}>
			<div>SideBarFilter</div>
			<div>SideBarFilter</div>
			<div>SideBarFilter</div>
			<div>SideBarFilter</div>
			<div>SideBarFilter</div>
		</SlideMenu>
	);
}

export default SideBarFilterMenu;
