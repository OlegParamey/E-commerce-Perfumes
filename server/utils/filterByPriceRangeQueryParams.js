module.exports = (array, minPrice = 0, maxPrice = Infinity) => {
	return array.filter((product) => {
		const price = parseFloat(product.price);
		return price >= minPrice && price <= maxPrice;
	});
};
