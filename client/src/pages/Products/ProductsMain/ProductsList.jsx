import { ProductCard } from "./ProductCard";
import { ProductListLoading } from "./ProductListLoading.jsx";

function ProductsList({ productsForPage, loading }) {
	if (loading) {
		return <ProductListLoading />;
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
