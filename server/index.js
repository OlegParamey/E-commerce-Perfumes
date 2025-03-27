const express = require("express");
const cors = require("cors");
const products = require("./data/perfumes.json");
const flattenProductsArr = require("./utils/flattenProductsArr.js");
const createFilterList = require("./utils/createFilterList.js");
const filterByQueryParams = require("./utils/fiterByQueryParams.js");
const sortByQueryParam = require("./utils/sortByQueryParam.js");
const filterByPriceRangeQueryParams = require("./utils/filterByPriceRangeQueryParams.js");
const app = express();
const port = 3000;
const flattenedProducts = flattenProductsArr(products);

app.use(cors());

app.get("/perfumes", (req, res) => {
	const queryParams = req.query;
	let result = flattenedProducts;

	if (queryParams.brand || queryParams.title || queryParams.capacity) {
		const filteredProducts = filterByQueryParams(
			flattenedProducts,
			queryParams
		);
		result = filteredProducts;
	}
	if (queryParams.price_max || queryParams.price_min) {
		result = filterByPriceRangeQueryParams(
			result,
			queryParams.price_min,
			queryParams.price_max
		);
	}
	if (queryParams.sort) {
		result = sortByQueryParam(result, queryParams.sort);
	}
	if (queryParams.search) {
		result = result.filter(
			(product) =>
				product.title
					.toLowerCase()
					.includes(queryParams.search.toLowerCase()) ||
				product.brand
					.toLowerCase()
					.includes(queryParams.search.toLowerCase())
		);
	}
	// setTimeout(() => {
	res.json(result);
	// }, 5000);
});

app.get("/filters", (req, res) => {
	const filters = createFilterList(flattenProductsArr(products));
	res.json(filters);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
