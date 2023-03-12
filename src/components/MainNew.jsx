import { ReadMoreButton } from "./ReadMoreButton";
import imageMobile from "../assets/images/image-web-3-mobile.jpg";
import imageDesktop from "../assets/images/image-web-3-desktop.jpg"

export const MainNew = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-16 md:w-3/4">
			<figure className="md:col-span-2">
				<img src={imageMobile} alt="Desktop web-3 Image" className="md:hidden" />
				<img src={imageDesktop} alt="" className="hidden md:block"/>
			</figure>
			<h1 className="text-6xl font-extrabold">The Bridge Future of Web 3.0?</h1>
			<div className="text-DarkGrayishBlue tracking-wide leading-8 flex flex-col gap-4">
				<p>We dive into the next evolution of the web that claims to put the power of the plattaforms back into the hands of the people. Butis it Really fulfilling its promise?</p>
				<ReadMoreButton />
			</div>
		</div>
	);
};
