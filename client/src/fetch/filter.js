async function getFilterData(URL) {
	try {
		const response = await fetch(`${URL}/filters`);
		if (response.ok) {
			const data = response.json();
			return data;
		}
		if (!response.ok) {
			throw new Error("Failed to fetch filter data");
		}
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export { getFilterData };
