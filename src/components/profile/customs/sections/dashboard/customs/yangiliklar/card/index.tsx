const Card = () => {
	return (
		<div>
			<div className="h-[160px] rounded-[8px] relative">
				<img
					className="w-full h-full rounded-[8px]"
					src="https://th.bing.com/th/id/OIP.BmOD65Dr9O63YIUHJLLaGQHaEs?w=301&h=191&c=7&r=0&o=5&dpr=1.9&pid=1.7"
					alt="piled-book"
				/>

				<div className="bg-[#000] w-full h-full absolute top-0 left-0 opacity-[0.5] rounded-[8px]" />
			</div>
			<div className="mt-2 flex flex-col gap-1">
				<h3 className="text-xs">15.10.2022</h3>
				<h1 className="text-sm font-semibold">
					Garri Potter bestselleri yana sotuvga qaytmoqda
				</h1>
			</div>
		</div>
	);
};

export default Card;
