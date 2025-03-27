import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";

export function useUrlFilters() {
	const [searchParams, setSearchParams] = useSearchParams();

	const setFilter = useCallback(
		(key, value) => {
			setSearchParams((params) => {
				const values = params.getAll(key);
				const valueExists = values.includes(value);
				if (valueExists) {
					params.delete(key);
					values.forEach((val) => {
						if (val !== value) params.append(key, val);
					});
				} else {
					params.append(key, value);
				}
				return params;
			});
		},
		[setSearchParams]
	);

	const resetFilters = useCallback(() => {
		setSearchParams({ page: 1 });
	}, [setSearchParams]);

	const isSelected = useCallback(
		(key, value) => {
			return searchParams.getAll(key).includes(value);
		},
		[searchParams]
	);
	return {
		searchParams,
		setFilter,
		resetFilters,
		isSelected,
	};
}
