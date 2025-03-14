import GlassCardWithText from "./GlassCardWithText";

function ImageWithCardText({ imgSrc, text, justifyStart = true }) {
	return (
		<div
			className={`relative flex ${
				justifyStart ? "justify-start" : "justify-end"
			} items-center w-full border-b-2 border-white`}
		>
			<img className="w-full" src={imgSrc} alt={`${imgSrc}`} />
			<GlassCardWithText text={text} />
		</div>
	);
}

export default ImageWithCardText;
