import { MainNew } from "./MainNew";
import { NewsSummary } from "./NewsSummary";
export const MainNews = () => {
	return (
		<main className="flex flex-col md:flex-row md:gap-6">
			<MainNew/>
            <NewsSummary/>
		</main>
	);
};
