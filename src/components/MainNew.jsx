import { ReadMoreButton } from "./ReadMoreButton";
import imageDesktop from "../assets/images/image-web-3-mobile.jpg";

export const MainNew = () => {
	return (
		<div className="grid grid-cols-1 gap-4">
			<figure>
				<img src={imageDesktop} alt="Desktop web-3 Image" className="md:hidden" />
			</figure>
			<h1 className="text-6xl font-extrabold">The Bridge Future of Web 3.0?</h1>
			<div className="text-DarkGrayishBlue tracking-wide leading-8 flex flex-col gap-4">
				<p>We dive into the next evolution of the web that claims to put the power of the plattaforms back into the hands of the people. Butis it Really fulfilling its promise?</p>
				<ReadMoreButton />
			</div>
		</div>
	);
};
