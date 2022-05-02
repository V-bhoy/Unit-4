import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData, sortProducts } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import { Select } from "./Styled";
import { Grid } from "./Styled";

export const Products = () => {
  const prod= useSelector((state)=>state);
  //console.log(prod);
  const dispatch= useDispatch();
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    getProductsData(dispatch);
  }, []);
  
  const handleSort = (e) => {
    // dispatch sort products on change
    let val=e.target.value;
    sortProducts(prod.data,dispatch,val);
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc" onClick={(e)=>handleSort(e)}>Low to High</option>
        <option value="desc" onClick={(e)=>handleSort(e)}>High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
         {prod.data.map(item=><ProductCard key={item.id} item={item}/>)}
      </Grid>
    </>
  );
};
