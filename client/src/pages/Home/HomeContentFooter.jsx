import { useNavigate } from "react-router-dom";
import ButtonWithTextAndAction from "../../components/UI/ButtonWithTextAndAction";
import background from "../../assets/images/UI/background.jpg";

function HomeContentFooter() {
	const glassCardClass =
		"bg-white/40 absolute w-1/3 min-h-2/3 max-h-4/5 sm:h-3/4 p-2 m-5 backdrop-blur-sm backdrop-brightness-120 rounded-md shadow-2xl flex flex-col sm:gap-y-2 justify-center items-center";
	let navigate = useNavigate();
	return (
		<div className="relative flex justify-center items-center w-full border-b-2  border-white">
			<img className="w-full" src={background} alt="background" />
			<div className={glassCardClass}>
				<p className="text-[10px] sm:text-sm md:text-2xl text-center p-0.5 leading-tight">
					Are <b>You</b> ready to take the next step, find what scent
					will fit you the most?
				</p>
				<ButtonWithTextAndAction
					onClick={() => navigate("/products?page=1")}
					text="yes"
					w="w-16 md:w-32"
					h="h-6 sm:h-10"
				/>
			</div>
		</div>
	);
}

export default HomeContentFooter;
