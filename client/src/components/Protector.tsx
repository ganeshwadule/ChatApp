import Cookies from "js-cookie";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";


const Protector = ({ children }: { children: ReactNode }) => {
  const authToken = Cookies.get("authToken");
  console.log(authToken)
  if (!authToken) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default Protector;
