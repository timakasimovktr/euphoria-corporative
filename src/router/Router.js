import React from "react";
import {
  Route,
  Routes,
  Navigate,
  HashRouter,
  useLocation,
} from "react-router-dom";
import { APP_ROUTES } from "./Route.js";
import Main from "../components/Main/Main";
import Products from "../components/Products/Products";

// function RequireAuth({ children }) {
//   const token = localStorage.getItem("@token");
//   const isTokenAvailable = token != null && token != "";

//   let location = useLocation();

//   if (!isTokenAvailable) {
//     return <Navigate to="/" state={{ from: location }} replace />;
//   } else {
//     return children;
//   }
// }

function Router() {
  return (
    <HashRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to={APP_ROUTES.WELCOME} />} /> */}
        <Route path={APP_ROUTES.WELCOME} element={<Main />} />
        <Route path={APP_ROUTES.PRODUCTS} element={<Products />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
