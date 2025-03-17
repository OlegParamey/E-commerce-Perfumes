module.exports = function flattenProductsArr(products) {
	return products.flatMap((item) => {
		const { img, title, brand, id } = item;
		return item.productInfo.map((option) => ({
			img,
			title,
			brand,
			id,
			...option,
		}));
	});
};
