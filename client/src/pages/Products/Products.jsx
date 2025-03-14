import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TopNav from "./TopNav/TopNav";
import ProductsList from "./ProductsMain/ProductsList";
import PageNav from "../../components/UI/Menu/PageNav";
import allProducts from "../../data/perfumes";

function Products() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [visibleProducts, setVisibleProducts] = useState(null);
	const navigate = useNavigate();
	const currentPage = Number(searchParams.get("page")) || 1;
	const itemsPerPage = 20;

	useEffect(() => {
		if (!searchParams.get("page")) {
			navigate("?page=1", { replace: true });
		}
	}, [searchParams, navigate]);

	useEffect(() => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		setVisibleProducts(allProducts.slice(startIndex, endIndex));
	}, [currentPage, itemsPerPage]);

	return (
		<div className="relative my-1 w-full h-full flex flex-col justify-between">
			<TopNav />
			<ProductsList visibleProducts={visibleProducts} />
			<PageNav
				currentPage={currentPage}
				totalItems={allProducts.length}
				itemsPerPage={itemsPerPage}
				setSearchParams={setSearchParams}
			/>
		</div>
	);
}

export default Products;
