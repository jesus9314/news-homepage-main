import logo from "../assets/images/logo.svg";
import menuLogo from "../assets/images/icon-menu.svg";
import { CategoryModal } from "./CategoryModal";
import { useState } from "react";
import { Nav } from "./Nav";

export const Header = () => {
	const [showModal, setShowModal] = useState(false)
	return (
		<header className="w-full h-20 flex items-center justify-between fixed top-0 bg-white px-4">
			<img src={logo} alt="Logo News Homepage" />
			<button onClick={()=> setShowModal(true)}>
				<img src={menuLogo} alt="Desktop web-3 Image"/>
			</button>
			<CategoryModal 
			isVisible={showModal} 
			onClose={()=>{setShowModal(false)}}>
				<Nav/>
			</CategoryModal>
		</header>
	);
};
