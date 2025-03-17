function ProductsList({ productsForPage, loading }) {
	if (loading) {
		return (
			<div className="text-center text-lg font-semibold">Loading...</div>
		);
	}
	if (!productsForPage.length) {
		return (
			<div className="text-center text-lg font-semibold">
				No products found.
			</div>
		);
	}
	return (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] m-8 gap-3 sm:gap-6 sm:m-5">
			{productsForPage.map((item, index) => (
				<ProductCard item={item} key={`${item.id}-${index}`} />
			))}
		</div>
	);
}

function ProductCard({ item }) {
	const { img, title, brand, capacity, price } = item;

	return (
		<div
			className="flex flex-col flex-grow justify-between items-center 
		p-2 text-center text-sm shadow-lg bg-zinc-100/50 border-2 border-zinc-200/50"
		>
			<img src={img} alt={brand} className="max-w-50 max-h-50 border" />
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
