import { OptionDescriptionForm } from './OptionDescriptionForm';

function ProductMain({ product }) {
	return (
		<div
			className="flex flex-col items-center justify-evenly gap-x-5 gap-y-5
		 w-full min-h-[90vh] md:flex-row my-6 md:m-auto"
		>
			<div className="sm:ml-5 max-w-[280px] w-full sm:max-w-[420px]">
				<div className="text-center text-base font-semibold sm:text-2xl md:hidden block">
					<h1>{product.title}</h1>
					<h1 className="font-light">{product.brand}</h1>
				</div>
				<img
					src={product.img}
					className="shadow-2xl bg-white rounded-sm border-2 border-zinc-200/50 "
				/>
			</div>
			<OptionDescriptionForm product={product} />
		</div>
	);
}

export default ProductMain;
