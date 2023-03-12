import { navData } from "../data/navData";

export const NavDesktop = () => {
	return (
		<ul className="text-2xl md:text-xl capitalize hidden md:flex flex-col md:flex-row gap-8  ">
			{navData.map((menu, index) => (
				<li key={index}>
					<a href="#" className="hover:text-gray-400">
						{menu}
					</a>
				</li>
			))}
		</ul>
	);
};
