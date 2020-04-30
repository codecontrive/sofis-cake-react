import React from "react";

import Home from "src/components/layout/Home";
import Products from "src/components/layout/Products";

export const ROUTES = {
  HOME: {
    title: "Acasa",
    component: <Home />,
  },
  PRODUCTS: {
    title: "Catalog",
    component: Products,
  },
};
