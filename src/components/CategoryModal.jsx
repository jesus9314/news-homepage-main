import close from "../assets/images/icon-menu-close.svg";
import { useScreenWidth } from "../hooks/useScreenWidth";

export const CategoryModal = ({ children, isVisible, onClose }) => {
	const { width } = useScreenWidth();
	if( width > 1024) {onClose()}
	if (!isVisible) return;
	const handleClose = (e) => {
		e.target.id === "wrapper" && onClose();
	};
	return (
		<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-end md:hidden" id="wrapper" onClick={handleClose}>
			<div className="bg-white w-2/3 p-10">
				<div className="flex justify-end">
					<span className="cursor-pointer">
						<img
							onClick={() => {
								onClose();
							}}
							src={close}
							alt="close"
						/>
					</span>
				</div>
				<div className=" h-full flex items-center">{children}</div>
			</div>
		</div>
	);
};
