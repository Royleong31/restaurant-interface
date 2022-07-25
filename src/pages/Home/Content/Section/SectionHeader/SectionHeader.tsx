import React from "react";
import { SectionHeaderStyle } from "./SectionHeader.style";

type Props = {
  name: string;
};

export default function SectionHeader({ name }: Props) {
  return (
    <SectionHeaderStyle>
      <h3>{name}</h3>
    </SectionHeaderStyle>
  );
}
