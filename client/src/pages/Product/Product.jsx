import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductData } from "../../fetch/product";
import URL from "../../data/URL";
import ProductMain from "./ProductMain/ProductMain";
import { ProductMainLoading } from "./ProductMain/ProductMainLoading";

function Product() {
	const { productId } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [errorMsg, setErrorMsg] = useState();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await getProductData(URL, productId);
				setProduct(data);
			} catch (error) {
				setErrorMsg(error.message);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [productId]);

	if (loading) {
		return <ProductMainLoading />;
	}
	if (errorMsg) {
		return (
			<div className="flex items-center justify-center h-screen mx-5 text-lg font-semibold">
				{errorMsg}
			</div>
		);
	}

	return product && <ProductMain product={product} />;
}

export default Product;
