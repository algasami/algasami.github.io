import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post",
  description: "This is the post gallery of algasami's works.",
};

export default function PostTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
