import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export function useURLSort() {
	const [searchParams, setSearchParams] = useSearchParams();

	const setSort = useCallback(
		(key, value) => {
			setSearchParams((param) => {
				if (param.get(key) === value) {
					param.delete(key);
				} else {
					param.set(key, value);
				}
				return param;
			});
		},
		[setSearchParams]
	);
	const isSelected = useCallback(
		(key, value) => {
			return searchParams.getAll(key).includes(value);
		},
		[searchParams]
	);

	return { setSort, isSelected };
}
