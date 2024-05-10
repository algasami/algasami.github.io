import { NoSsr, Table, TableCell, TableRow } from "@mui/material";
import React from "react";
import updates from "../../../data/updates.json";
import type { Metadata } from "next";
import { Locale, i18n } from "i18n-config";
import { getDictionary } from "get-dictionary";

export function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Metadata {
  const metas = getDictionary(params.lang)["dev"];

  return {
    title: metas.title,
    description: metas.meta_description,
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((loc) => ({
    lang: loc,
  }));
}

export default async function DevPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = getDictionary(params.lang).dev;
  const updateList = await buildUpdates();
  return (
    <div className="dev-page hallway-size mx-2">
      <h1>{dict.title}</h1>

      <p>{dict.content}</p>

      <b className="w-full text-center">{dict.subtitle}</b>
      <hr />

      <NoSsr>
        <Table>
          <TableRow>
            <TableCell>{dict.feature}</TableCell>
            <TableCell>{dict.dev_in_charge}</TableCell>
            <TableCell>{dict.date}</TableCell>
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
