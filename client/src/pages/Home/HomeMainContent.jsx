import ImageWithCardText from "../../components/UI/ImageWithCardText";
import beach from "../../assets/images/UI/beach.jpg";
import wood from "../../assets/images/UI/wood.jpg";
import coconut from "../../assets/images/UI/coconut.jpg";

function HomeMainContent() {
	return (
		<>
			<ImageWithCardText
				imgSrc={beach}
				text="Are YOU ready to take the next step, find what
          scent will fit you the most?"
			/>
			<ImageWithCardText
				imgSrc={wood}
				justifyStart={false}
				text="Are YOU ready to take the next step, find what
          scent will fit you the most?"
			/>
			<ImageWithCardText
				imgSrc={coconut}
				text="Are YOU ready to take the next step, find what
          scent will fit you the most?"
			/>
		</>
	);
}

export default HomeMainContent;
