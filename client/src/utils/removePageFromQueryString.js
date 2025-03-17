const removePageFromQueryString = (searchParams) => {
	const params = new URLSearchParams(searchParams);
	params.delete("page");
	return params.toString();
};
export default removePageFromQueryString;
