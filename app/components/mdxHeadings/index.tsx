"use client";
import Link from "next/link";
import styles from "./mdxheadings.module.scss";
import { useState, useEffect } from "react";

const MdxHeading = ({ h, id, children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const Header = h;
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return undefined;
  }
  if (id) {
    return (
      <Link className="heading-link" href={`#${id}`}>
        <Header className={styles.mdx_heading}>
          <a
            className="title-anchor"
            id={id}
            onClick={() => {
              return false;
            }}
          ></a>
          {children}
        </Header>
      </Link>
    );
  }
  return <h1>{children}</h1>;
};

export const MdxA = ({ id, href, children }) => {
  return (
    <a href={href}>
      {children}
      <a className="anchor" id={id}></a>
    </a>
  );
};

// cycle through and make H1 - H6 heading tags to use
export const MdxH1 = (props) => <MdxHeading h="h1" {...props} />;
export const MdxH2 = (props) => <MdxHeading h="h2" {...props} />;
export const MdxH3 = (props) => <MdxHeading h="h3" {...props} />;
export const MdxH4 = (props) => <MdxHeading h="h4" {...props} />;
export const MdxH5 = (props) => <MdxHeading h="h5" {...props} />;
export const MdxH6 = (props) => <MdxHeading h="h6" {...props} />;
