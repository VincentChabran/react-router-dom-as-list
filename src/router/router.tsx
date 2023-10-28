import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import Accueil from "../views/Accueil";
import NotFound from "../views/NotFound";
import DefaultLayout from "../layouts/DefaultLayout";
import GuestLayout from "../layouts/GuestLayout";
import SignUp from "../views/SignUp";
import Dashboard from "../views/Dashboard";
import { accueilPath, dashboardPath } from "../utils/constant";

export const router = createBrowserRouter([
   /*
   |-------------------
   |
   | Router par defaut quand un user est connecté
   |
   |-------------------
   |
   | La route affichera DefaultLayout et sont contenue pour tout les paths
   | Dans DefaultLayout on trouve Outlet
   |
   | Outlet prendra la valeur des differrents composant selon les differents path dans children
   | /accueil Outlet = <Accueil />
   | /dashbord Outlet = <Dashbord />
   | etc..
   */
   {
      path: "/",
      element: <DefaultLayout />,
      children: [
         {
            path: "/",
            element: <Navigate to={accueilPath} />,
         },
         {
            path: accueilPath,
            element: <Accueil />,
         },
         {
            path: dashboardPath,
            element: <Dashboard />,
         },
      ],
   },

   /*
   |-------------------
   |
   | Router quand un user n'est pas connecté 
   |
   |-------------------
   */
   {
      path: "/",
      element: <GuestLayout />,
      children: [
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/signUp",
            element: <SignUp />,
         },
      ],
   },

   /*
   |-------------------
   |
   | Page not found
   |
   |-------------------
   */
   {
      path: "*",
      element: <NotFound />,
   },
]);
