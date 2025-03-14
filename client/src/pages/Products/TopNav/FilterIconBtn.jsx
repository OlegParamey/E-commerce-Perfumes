import { FaFilter } from "react-icons/fa";
import IconWithAnimationActionContainer from "../../../components/UI/IconWithAnimationActionContainer";

function FilterIconBtn({ onOpen }) {
	return (
		<IconWithAnimationActionContainer textSize="text-3xl" onClick={onOpen}>
			<FaFilter />
		</IconWithAnimationActionContainer>
	);
}

export default FilterIconBtn;
