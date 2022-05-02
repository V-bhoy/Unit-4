import { Link } from "react-router-dom";

export const Navbar = () => {
  const style={
    color:"white", textDecoration:"none", fontWeight: "bold"
  }
  return (
    <nav style={{ 
      backgroundColor: "#8000ff", 
    padding: 20 ,
    display: "flex",
    justifyContent: "space-around"}}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <Link to="/" style={style}>Home</Link>
      <Link to="/about"  style={style}>About</Link>
      <Link to="/products"   style={style}>Products</Link>
      <Link to="/products/men"  style={style}>Men</Link>
      <Link to="/products/women"  style={style}>Women</Link>
      <Link to="/products/kids"  style={style}>Kids</Link>
      <Link to="/products/homedecor"  style={style}>Home Decor</Link>
    </nav>
  );
};
