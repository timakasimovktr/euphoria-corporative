import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { APP_ROUTES } from "./Route.js";
import Main from "../components/Main/Main";
import Products from "../components/Products/Products";
import ProductDetails from "../components/ProductDetails/ProductDetails.jsx";
import Filial from "../components/Filial/Filial.jsx";
import Marketing from "../components/Marketing/Marketing.jsx";
import Logistics from "../components/Logistics/Logistics.jsx";
import CallCenter from "../components/CallCenter/CallCenter.jsx";
function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path={APP_ROUTES.WELCOME} element={<Main />} />
        <Route path={APP_ROUTES.PRODUCTS} element={<Products />} />
        {/* <Route path={`${APP_ROUTES.PRODUCT}:productId`} element={<ProductDetails />} /> */}
        <Route path={`${APP_ROUTES.PRODUCT}`} element={<ProductDetails />} />
        <Route path={`${APP_ROUTES.FILIAL}`} element={<Filial />} />
        <Route path={`${APP_ROUTES.MARKETING}`} element={<Marketing />} />
        <Route path={`${APP_ROUTES.CALLCENTER}`} element={<CallCenter />} />
        <Route path={`${APP_ROUTES.LOGISTICS}`} element={<Logistics />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
