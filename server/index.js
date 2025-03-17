const express = require("express");
const cors = require("cors");
const products = require("./data/perfumes.json");
const flattenProductsArr = require("./utils/flattenProductsArr.js");
const createFilterList = require("./utils/createFilterList.js");
const filterByQueryParams = require("./utils/fiterByQueryParams.js");
const app = express();
const port = 3000;

app.use(cors());

app.get("/perfumes", (req, res) => {
	const flattenedProducts = flattenProductsArr(products);
	const queryParams = req.query;

	if (Object.keys(queryParams).length > 0) {
		const filteredProducts = filterByQueryParams(
			flattenedProducts,
			queryParams
		);
		return res.json(filteredProducts);
	}
	res.json(flattenedProducts);
});

app.get("/filters", (req, res) => {
	const filters = createFilterList(flattenProductsArr(products));
	res.json(filters);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
