import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Authcontex/AuthContext";

export const Dashboard = () => {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to={"/dashboard/setting"}>
        <h1>Settings</h1>
      </Link>
    </div>
  );
};
