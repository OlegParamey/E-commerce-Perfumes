module.exports = function filterByQueryParams(perfumes, queryParams) {
	if (
		!Array.isArray(perfumes) ||
		!queryParams ||
		typeof queryParams !== "object"
	) {
		return [];
	}

	const normalizeQueryValue = (value) => {
		if (Array.isArray(value)) {
			return value.filter((v) => v !== ""); // Убираем пустые строки
		} else if (value !== undefined && value !== null && value !== "") {
			return [value];
		}
		return [];
	};

	const checkParam = (perfumeValue, queryValue, exactMatch = false) => {
		if (perfumeValue === undefined || perfumeValue === null) {
			return false;
		}
		const queryValues = normalizeQueryValue(queryValue);
		if (queryValues.length === 0) {
			return true;
		}
		return queryValues.some((value) =>
			exactMatch
				? String(perfumeValue) === String(value)
				: String(perfumeValue)
						.toLowerCase()
						.includes(String(value).toLowerCase())
		);
	};

	return perfumes.filter((perfume) => {
		if (!perfume || typeof perfume !== "object") {
			return false;
		}

		const matchesTitle = checkParam(perfume.title, queryParams.title);
		const matchesBrand = checkParam(perfume.brand, queryParams.brand);
		const matchesCapacity = checkParam(
			perfume.capacity,
			queryParams.capacity,
			true
		);

		return matchesTitle && matchesBrand && matchesCapacity;
	});
};
