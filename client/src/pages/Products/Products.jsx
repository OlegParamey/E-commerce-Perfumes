import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { getProductsData } from "../../fetch/products";
import removePageFromQueryString from "../../utils/removePageFromQueryString";
import TopNav from "./TopNav/TopNav";
import ProductsList from "./ProductsMain/ProductsList";
import PageNav from "../../components/UI/Menu/PageNav";
import URL from "../../data/URL";

function Products() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [errorMsg, setErrorMsg] = useState();
	const [productsForPage, setProductsForPage] = useState([]);

	const queryStringWithoutPage = useMemo(
		() => removePageFromQueryString(searchParams),
		[searchParams]
	);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await getProductsData(URL, queryStringWithoutPage);
				setProducts(data);
			} catch (error) {
				setErrorMsg(error.message);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [queryStringWithoutPage]);

	return (
		<div className="relative my-1 w-full h-full flex flex-col justify-between">
			<TopNav />
			<ProductsList
				productsForPage={productsForPage}
				loading={loading}
				errorMsg={errorMsg}
			/>
			<PageNav
				products={products}
				totalItems={products.length}
				searchParams={searchParams}
				setSearchParams={setSearchParams}
				setProductsForPage={setProductsForPage}
			/>
		</div>
	);
}

export default Products;
