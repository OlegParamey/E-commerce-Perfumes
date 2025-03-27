module.exports = function sortByQueryParam(array, sortMethod) {
	switch (sortMethod) {
		case "plth":
			console.log("plth");
			const sortedByPriceLtH = [...array].sort(
				(a, b) => parseFloat(a.price) - parseFloat(b.price)
			);
			return sortedByPriceLtH;
		case "phtl":
			const sortedByPriceHtL = [...array].sort(
				(a, b) => parseFloat(b.price) - parseFloat(a.price)
			);
			return sortedByPriceHtL;
		case "clth":
			const sortedByCapacityLtH = [...array].sort(
				(a, b) => parseInt(a.capacity) - parseInt(b.capacity)
			);
			return sortedByCapacityLtH;
		case "chtl":
			const sortedByCapacityHtL = [...array].sort(
				(a, b) => parseInt(b.capacity) - parseInt(a.capacity)
			);
			return sortedByCapacityHtL;
		default:
			return array;
	}
};
