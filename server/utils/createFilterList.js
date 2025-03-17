module.exports = function createFilterList(array) {
	const res = {
		brand: new Set(),
		title: new Set(),
		capacity: new Set(),
		maxPrice: 0,
	};

	array.forEach(({ brand, title, capacity, price }) => {
		res.brand.add(brand);
		res.title.add(title);
		res.capacity.add(Number(capacity));
		const numericPrice = parseFloat(price);
		if (numericPrice > res.maxPrice) res.maxPrice = numericPrice;
	});

	return {
		brand: [...res.brand],
		title: [...res.title],
		capacity: [...res.capacity].sort((a, b) => a - b),
		maxPrice: res.maxPrice,
	};
};
