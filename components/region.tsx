export function Region({
	color,
	children,
	title,
	subtitle,
}: {
	color: string;
	children: React.ReactNode;
	title: string;
	subtitle?: string;
}) {
	return (
		<span
			className={`rounded-xl m-3 p-3 flex flex-col border border-gray-700 shadow-md shadow-zinc-900 hover:shadow-purple-900 hover:shadow-lg transition-all ${color}`}
			style={{ maxWidth: "700px" }}
		>
			<div className="flex flex-row justify-between">
				<h3 className="flex mr-2 title font-semibold">
					<span className="self-end">{title}</span>
				</h3>
				{subtitle && (
					<footer className="flex ml-2 subtitle">
						<span className="self-end my-2">{subtitle}</span>
					</footer>
				)}
			</div>
			{children}
		</span>
	);
}
