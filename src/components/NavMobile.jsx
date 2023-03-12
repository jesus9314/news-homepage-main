import { navData } from "../data/navData";

export const NavMobile = () => {
	return (
		<ul className="text-2xl capitalize flex flex-col gap-8">
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
