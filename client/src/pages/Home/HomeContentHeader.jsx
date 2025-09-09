import man from '../../assets/images/UI/man.jpg';

function HomeContentHeader() {
	return (
		<div className="relative w-full border-y-2 border-white">
			<div
				className="absolute top-0 w-full font-normal text-white
		  backdrop-brightness-75 tight sm:mt-3 md:mt-4.5 border-y-1
			 border-white/45 backdrop-blur-sm py-1 uppercase"
			>
				<h1 className="text-base sm:text-3xl/8 font-semibold text-center ">
					More Than a Fragrance
				</h1>
				<h1 className="text-sm sm:text-2xl/8 text-center">
					The <span className="italic">Essence</span> of You
				</h1>
			</div>
			<img className="w-full" src={man} alt="man" />
		</div>
	);
}

export default HomeContentHeader;
