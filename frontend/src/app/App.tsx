import React, {Fragment, Suspense} from 'react';
import './App.module.css';
import Header from "../components/Header/Header";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Login from "../components/Login/Login";
import Footer from "../components/Footer/Footer";
import Loader from "../components/UI/Loader/Loader";
import {
    ROUTE_ADMINISTRATION_AREA, ROUTE_APPLICATION_USER_GUIDE,
    ROUTE_COMPATIBILITIES,
    ROUTE_HOME, ROUTE_LABORATORY, ROUTE_LOGIN,
    ROUTE_ORDERS,
    ROUTE_PRODUCTS_AND_MIXTURES
} from "../utils/routes";
import RootLayout from "../components/UI/RootLayout/RootLayout";

const Compatibilities = React.lazy(() => import("../pages/Compatibilities"));
const ProductsAndMixtures = React.lazy(() => import("../pages/ProductsAndMixtures"));
const Orders = React.lazy(() => import("../pages/Orders"));
const Laboratory = React.lazy(() => import("../pages/Laboratory"));
const AdministrationArea = React.lazy(() => import("../pages/AdministrationArea"));
const ApplicationUserGuide = React.lazy(() => import("../pages/ApplicationUserGuide"));


const routes = createBrowserRouter(createRoutesFromElements(
    <Route
        path={ROUTE_HOME}
        element={<RootLayout />}
    >
        <Route path={ROUTE_COMPATIBILITIES} element={<Compatibilities />} />
        <Route path={ROUTE_PRODUCTS_AND_MIXTURES} element={<ProductsAndMixtures />} />
        <Route path={ROUTE_ORDERS} element={<Orders />} />
        <Route path={ROUTE_LABORATORY} element={<Laboratory />} />
        <Route path={ROUTE_ADMINISTRATION_AREA} element={<AdministrationArea />} />
        <Route path={ROUTE_APPLICATION_USER_GUIDE} element={<ApplicationUserGuide />} />
        <Route path={ROUTE_LOGIN} element={<Login />} />
    </Route>
))

function App() {
  return (
    <Suspense fallback={<Loader />}>
        <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
