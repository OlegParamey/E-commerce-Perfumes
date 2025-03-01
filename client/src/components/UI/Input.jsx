function Input({ inputName, isRequired = false }) {
	return (
		<div className="w-full">
			<div className="mt-0.5">
				<input
					type="text"
					placeholder={inputName}
					className="block w-full py-1.5 px-2 ring-1 ring-inset ring-gray-600 placeholder:text-xs focus:text-gray-800"
				/>
			</div>
			{isRequired && (
				<label className="block text-gray-600 text-sm">
					* required
				</label>
			)}
		</div>
	);
}

export default Input;
