import { navData } from "../data/navData";

export const Nav = () => {
	return (
		<ul className="text-2xl capitalize flex flex-col gap-8">
			{navData.map((menu) => (
				<li>
					<a 
                    href="#"
                    className="hover:text-gray-400"
                    >{menu}</a>
				</li>
			))}
		</ul>
	);
};
