import { NoSsr, Table, TableCell, TableRow } from "@mui/material";
import React from "react";
import updates from "../data/updates.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dev",
};

export default async function DevPage() {
  const updateList = await buildUpdates();
  return (
    <div className="dev-page hallway-size">
      <h1>Dev Page</h1>

      <b className="w-full text-center">Temporary Logs</b>
      <hr />

      <NoSsr>
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
      </NoSsr>
    </div>
  );
}

async function buildUpdates() {
  return updates.reverse();
}
