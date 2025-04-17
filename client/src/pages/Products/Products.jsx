import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductsData } from "../../fetch/products";
import removePageFromQueryString from "../../utils/removePageFromQueryString";
import TopNav from "./TopNav/TopNav";
import ProductsList from "./ProductsMain/ProductsList";
import PageNav from "../../components/UI/Menu/PageNav";
import URL from "../../data/URL";

function Products() {
	const [searchParams] = useSearchParams();
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [errorMsg, setErrorMsg] = useState();
	const [productsForPage, setProductsForPage] = useState([]);

	const currentPage = Number(searchParams.get("page")) || 1;
	const itemsPerPage = 20;
	const startIndex = (currentPage - 1) * itemsPerPage;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getProductsData(
					URL,
					removePageFromQueryString(searchParams)
				);
				setProducts(data);
			} catch (error) {
				setErrorMsg(error.message);
			} finally {
				setLoading(false);
			}
		};
		if (products.length <= 0) {
			fetchData();
		}
		if (products.length > 0) {
			setProductsForPage(
				products.slice(startIndex, startIndex + itemsPerPage)
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [products.length, currentPage, searchParams.toString()]);

	return (
		<div className="relative my-0 w-full h-full flex flex-col justify-between">
			<TopNav />
			<ProductsList
				productsForPage={productsForPage}
				loading={loading}
				errorMsg={errorMsg}
			/>
			{!loading && (
				<PageNav
					totalItems={products.length}
					itemsPerPage={itemsPerPage}
					currentPage={currentPage}
				/>
			)}
		</div>
	);
}

export default Products;
