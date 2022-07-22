import { Category } from "DummyData/DataTypes";
import React from "react";
import { CategoryLiStyle } from "./CategoryLiStyle";

type Props = {
  category: Category;
};

export default function CategoryLi({ category }: Props) {
  return (
    <CategoryLiStyle>
      {category.name}
    </CategoryLiStyle>
  );
}
