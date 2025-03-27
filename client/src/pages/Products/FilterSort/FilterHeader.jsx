import { RxReset } from "react-icons/rx";
import IconWithAnimationActionContainer from "../../../components/UI/IconWithAnimationActionContainer";

function FilterHeader({ resetFilters }) {
	return (
		<header className="my-2 mx-2">
			<div className="flex justify-between items-center border-b-2 pb-2">
				<h1 className="text-3xl tracking-wide font-semibold">
					Filter and Sort
				</h1>
				<div onClick={resetFilters}>
					<IconWithAnimationActionContainer>
						<RxReset />
					</IconWithAnimationActionContainer>
					<p className="text-xs font-sans text-center">reset</p>
				</div>
			</div>
		</header>
	);
}

export default FilterHeader;
