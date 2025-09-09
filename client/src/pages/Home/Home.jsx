import HomeContentHeader from './HomeContentHeader';
import HomeMainContent from './HomeMainContent';
import HomeContentFooter from './HomeContentFooter';

function Home() {
	return (
		<div className=" flex flex-row justify-center items-center flex-wrap sm:mx-16">
			<HomeContentHeader />
			<HomeMainContent />
			<HomeContentFooter />
		</div>
	);
}

export default Home;
