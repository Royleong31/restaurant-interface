import React from "react";
import { CategoryLiStyle } from "./CategoryLi.style";

type Props = {
  category: string;
};

export default function CategoryLi({ category }: Props) {
  return <CategoryLiStyle>{category}</CategoryLiStyle>;
}
