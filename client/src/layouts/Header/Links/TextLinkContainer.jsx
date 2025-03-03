import { NavLink } from "react-router-dom";

function handleActiveClass({ isActive }) {
	return isActive ? " !text-rose-500 hover:!bg-rose-100" : "";
}

function TextLinkContainer({ text, to, end = false }) {
	return (
		<NavLink
			to={to}
			end={end}
			className={({ isActive }) =>
				`${handleActiveClass({
					isActive,
				})} border-b-2 hover:border-dashed hover:bg-neutral-200 hover:text-neutral-800 
				 duration-75 active:scale-98`
			}
		>
			{text}
		</NavLink>
	);
}

export default TextLinkContainer;
