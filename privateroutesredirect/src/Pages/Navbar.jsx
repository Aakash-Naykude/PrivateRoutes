import { Link } from "react-router-dom";

export const Navbar = () => {
  return <div style={{display:"flex", justifyContent:"center", gap:"30%"}}>
      <Link to={"/"}><h2>Home</h2></Link>
      <Link to={"/login"}><h2>Login</h2></Link>
      <Link to={"/dashboard"}><h2>Dashboard</h2></Link>
  </div>;
};
