export async function getProductsData(URL, query = "") {
	try {
		const response = await fetch(`${URL}/perfumes?${query}`);
		if (response.ok) {
			const data = response.json();
			return data;
		}
		if (!response.ok) {
			throw new Error("Failed to fetch products");
		}
		return await response.json();
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
}
