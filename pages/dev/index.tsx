import { Table, TableCell, TableRow } from "@mui/material";
import React from "react";
import updates from "../../data/updates.json";

export default function DevPage({
	updateList,
}: {
	updateList: Array<{ feature: string; dev: string; date: string }>;
}) {
	return (
		<div className="dev-page my-9">
			<h1>Dev Page</h1>

			<b className="w-full text-center">Temporary Logs</b>
			<hr />

			<Table>
				<TableRow>
					<TableCell>Feature</TableCell>
					<TableCell>Dev in charge</TableCell>
					<TableCell>Date</TableCell>
				</TableRow>
				{updateList.map((v) => {
					return (
						<TableRow key={v.feature}>
							<TableCell>{v.feature}</TableCell>
							<TableCell>{v.dev}</TableCell>
							<TableCell>{v.date}</TableCell>
						</TableRow>
					);
				})}
			</Table>
		</div>
	);
}

export async function getStaticProps() {
	return {
		props: {
			updateList: updates,
		},
	};
}
