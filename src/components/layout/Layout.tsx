import { ReactNode } from "react";
import { Header } from "./styles";

export default function Layout({ children }: { children: ReactNode }) {
  return <Header>{children}</Header>;
}
