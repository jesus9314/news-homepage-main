import { Header } from "./components/Header";
import { MainNews } from "./components/MainNews";
import { TopNews } from "./components/TopNews";

export const NewsApp = () => {
	return (
		<div className="font-Inter max-w-7xl mx-auto">
			{/* header */}
			<Header />
			<div className="mt-20 my-4 px-4">
				{/* MainContent */}
				<MainNews />
				{/* TopNews */}
				<TopNews />
			</div>
		</div>
	);
};
