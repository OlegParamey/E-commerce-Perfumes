import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";

export function useURLInputs() {
	const [searchParams, setSearchParams] = useSearchParams();
	const setSearch = useCallback(
		(param, value) => {
			setSearchParams((prevParams) => {
				const newParams = new URLSearchParams(prevParams);
				if (value) {
					newParams.set(param, value);
				} else {
					newParams.delete(param);
				}
				return newParams;
			});
		},
		[setSearchParams]
	);
	return { searchParams, setSearch };
}
