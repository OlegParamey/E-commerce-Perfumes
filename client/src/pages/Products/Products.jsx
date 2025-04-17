import { useState } from "react";
import TopNav from "./TopNav/TopNav";
import ProductsList from "./ProductsMain/ProductsList";
import PageNav from "../../components/UI/Menu/PageNav";

function Products() {
	const [productsForPage, setProductsForPage] = useState([]);
	const [products, setProducts] = useState([]);

	const itemsPerPage = 20;

	return (
		<div className="relative my-0 w-full h-full flex flex-col justify-between">
			<TopNav />
			<ProductsList
				itemsPerPage={itemsPerPage}
				productsForPage={productsForPage}
				setProductsForPage={setProductsForPage}
				products={products}
				setProducts={setProducts}
			/>
			{productsForPage.length > 0 && (
				<PageNav
					totalItems={products.length}
					itemsPerPage={itemsPerPage}
				/>
			)}
		</div>
	);
}

export default Products;
