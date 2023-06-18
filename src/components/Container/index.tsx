import React, { PropsWithChildren } from "react";

interface Props {}

const Container = ({ children }: PropsWithChildren<Props>) => {
  return <div style={{ maxWidth: "1200px", margin: "auto" }}>{children}</div>;
};

export default Container;
