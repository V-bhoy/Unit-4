import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterProducts } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import { Grid } from "./Styled";

export const CategoryCard = () => {
  const prod= useSelector(state=>state);
  const category= useParams();
  const dispatch=useDispatch();
  useEffect(() => {
    // dispatch filter Products for every ID change
    filterProducts(dispatch,category);
  }, []);
  return (
    <Grid data-testid = "category-container">
      {/* Iterate and print product cards that are of this category */}
      {prod.filterData.map(item => <ProductCard key={item.id} item={item} />)}
    </Grid>
  );
};
