import { useCartStore } from '../../../store/useCartStore';

import { useSearchParams } from 'react-router-dom';
import Options from './Options';
import ButtonWithTextAndAction from '../../../components/UI/ButtonWithTextAndAction';

export function OptionDescriptionForm({ product }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const choosen = searchParams.get('option');

	const addItemToCart = useCartStore((state) => state.addItemToCart);

	const choosenOption = product.productInfo.find(
		(option) => option.capacity === choosen
	);

	const { productInfo, ...choosenProduct } = product;

	console.log({ ...choosenProduct, ...choosenOption });

	function handleSubmit(e) {
		e.preventDefault();
		addItemToCart({ ...choosenProduct, ...choosenOption });
		console.log('Form submitted');
	}

	return (
		<form
			onSubmit={(e) => handleSubmit(e)}
			className="flex flex-col items-center mx-0 sm:mx-4 w-70 sm:w-125 gap-y-5"
		>
			<div className="text-center text-base font-semibold sm:text-2xl hidden md:block">
				<h1>{product.title}</h1>
				<h1 className="font-light">{product.brand}</h1>
			</div>
			<p className="px-2 text-center italic text-sm md:text-base lg:text-lg">
				{product.description}
			</p>
			<div className="border-b w-full">
				<Options
					productInfo={productInfo}
					choosen={choosen}
					setSearchParams={setSearchParams}
				/>
			</div>
			<ButtonWithTextAndAction
				text="add to cart"
				w="w-40"
				h="h-12"
				type="submit"
				disabled={!choosen}
			/>
		</form>
	);
}
