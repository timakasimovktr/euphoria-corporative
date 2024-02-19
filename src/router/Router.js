import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { APP_ROUTES } from "./Route.js";
import Main from "../components/Main/Main";
import Products from "../components/Products/Products";
import ProductDetails from "../components/ProductDetails/ProductDetails.jsx";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path={APP_ROUTES.WELCOME} element={<Main />} />
        <Route path={APP_ROUTES.PRODUCTS} element={<Products />} />
        {/* <Route path={`${APP_ROUTES.PRODUCT}:productId`} element={<ProductDetails />} /> */}
        <Route path={`${APP_ROUTES.PRODUCT}`} element={<ProductDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
