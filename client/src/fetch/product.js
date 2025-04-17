export async function getProductData(URL, query = "") {
	try {
		const response = await fetch(`${URL}/product/${query}`);
		if (response.ok) {
			const data = response.json();
			return data;
		}
		if (!response.ok) {
			throw new Error("Failed to fetch product");
		}
		return await response.json();
	} catch (error) {
		console.error("Error fetching product:", error);
		throw error;
	}
}
