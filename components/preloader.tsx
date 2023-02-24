export const Preloader = () => {
	return (
		<div
			className="preloader w-screen h-screen fixed top-0 left-0 z-50 flex flex-col justify-center items-center bg-white dark:bg-black"
			id="preloader"
		>
			<div className="w-20 h-20 border-4 border-gray-300 dark:border-gray-500 rounded-lg animate-spin"></div>
		</div>
	);
};
