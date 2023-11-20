import React, { useRef } from "react";

export default function GraphWrapper() {
  const ref = React.useRef();
  return <div className="graph-wrapper" ref={ref}></div>;
}
