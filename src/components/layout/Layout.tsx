import { ReactNode } from "react";
import { LayoutStyle } from "./LayoutStyle";

export default function Layout({ children }: { children: ReactNode }) {
  return <LayoutStyle>{children}</LayoutStyle>;
}
