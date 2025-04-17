import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductsData } from "../../../fetch/products";
import { ProductCard } from "./ProductCard";
import { ProductListLoading } from "./ProductListLoading.jsx";
import URL from "../../../data/URL";

function ProductsList({
	itemsPerPage,
	setProducts,
	productsForPage,
	setProductsForPage,
}) {
	const [searchParams] = useSearchParams();
	const [loading, setLoading] = useState(true);
	const [errorMsg, setErrorMsg] = useState();
	const currentPage = Number(searchParams.get("page")) || 1;
	const startIndex = (currentPage - 1) * itemsPerPage;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getProductsData(URL, searchParams);
				setProducts(data);
				setProductsForPage(
					data.slice(startIndex, startIndex + itemsPerPage)
				);
			} catch (error) {
				setErrorMsg(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [
		searchParams,
		itemsPerPage,
		startIndex,
		setProductsForPage,
		setProducts,
	]);

	if (loading) {
		return <ProductListLoading />;
	}
	if (errorMsg) {
		return <></>;
	}
	if (!productsForPage.length) {
		return (
			<div className="flex items-center justify-center h-screen mx-5 text-lg font-semibold">
				No products found.
			</div>
		);
	}
	return (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] m-8 gap-3 sm:gap-6 sm:m-5">
			{productsForPage &&
				productsForPage.map((item, index) => (
					<ProductCard item={item} key={`${item.id}-${index}`} />
				))}
		</div>
	);
}

export default ProductsList;
