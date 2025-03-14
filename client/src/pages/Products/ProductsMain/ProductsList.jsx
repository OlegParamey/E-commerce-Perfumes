function ProductsList({ visibleProducts }) {
	return (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] m-8 gap-3 sm:gap-6 sm:m-5">
			{visibleProducts &&
				visibleProducts.map((item, index) => (
					<ProductCard item={item} key={item.id + "-" + index} />
				))}
		</div>
	);
}

function ProductCard({ item }) {
	const { img, title, brand, capacity, price } = item;

	return (
		<div className="flex flex-col flex-grow justify-between items-center p-2 text-center text-sm shadow-lg bg-zinc-100">
			{img}
			<h1 className="font-semibold text-base">{title}</h1>
			<p className="font-light p-1">{brand}</p>
			<div className="flex justify-between w-full px-1 border-y pb-1 italic">
				<p>Capacity:</p>
				<p>{capacity} ml</p>
			</div>
			<div className="flex justify-between w-full px-1 border-b pb-1 italic">
				<p>Price:</p>
				<p>{price} PLN</p>
			</div>
		</div>
	);
}

export default ProductsList;
