import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { APP_ROUTES } from "./Route.js";
import Main from "../components/Main/Main";
import Catalog from "../components/Catalog/Catalog";
import Product from "../components/Product/Product";
import Contacts from "../components/Contacts/Contacts";
import Collection from "../components/Collection/Collection";

function Router() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path={APP_ROUTES.WELCOME} element={<Main />} />
        <Route path={APP_ROUTES.CATALOG} element={<Catalog />} />
        <Route path={APP_ROUTES.COLLECTION} element={<Collection />} />
        <Route path={APP_ROUTES.PRODUCT} element={<Product />} />
        <Route path={APP_ROUTES.CONTACTS} element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
