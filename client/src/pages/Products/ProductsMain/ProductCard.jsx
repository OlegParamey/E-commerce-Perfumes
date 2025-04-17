import { useNavigate } from "react-router-dom";

export function ProductCard({ item }) {
	const cardContainerClass = `flex flex-col flex-grow justify-between items-center cursor-pointer
		p-2 text-center text-sm shadow-lg bg-zinc-100/50 border-2 border-zinc-200/50
		duration-100 ease-in-out hover:scale-102 hover:border-zinc-200 active:scale-99`;
	const navigate = useNavigate();
	const { img, title, brand, capacity, price, id } = item;

	return (
		<div
			className={cardContainerClass}
			onClick={() => navigate(`/product/${id}`, { replace: false })}
		>
			<img src={img} alt={brand} className="w-50 h-50 border" />
			<h1 className="font-semibold text-base">{title}</h1>
			<p className="font-light p-1">{brand}</p>
			<div className="flex justify-between w-full px-1 border-y pb-1 italic">
				<p>Capacity:</p>
				<p>{capacity} ml</p>
			</div>
			<div className="flex justify-between w-full px-1 border-b pb-1 italic">
				<p>Price:</p>
				<p>{price} PLN</p>
			</div>
		</div>
	);
}
