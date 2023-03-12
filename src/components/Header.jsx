import logo from "../assets/images/logo.svg";
import menuLogo from "../assets/images/icon-menu.svg";
import { CategoryModal } from "./CategoryModal";
import { useState } from "react";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";

export const Header = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<header className="w-full h-20 flex items-center justify-between fixed top-0 bg-white px-4 max-w-7xl mx-auto">
			<a href="#">
				<img src={logo} alt="Logo News Homepage" />
			</a>
			<NavDesktop />
			<button onClick={() => setShowModal(true)} className="md:hidden">
				<img src={menuLogo} alt="Desktop web-3 Image" />
			</button>
			<CategoryModal
				isVisible={showModal}
				onClose={() => {
					setShowModal(false);
				}}
			>
				<NavMobile />
			</CategoryModal>
		</header>
	);
};
