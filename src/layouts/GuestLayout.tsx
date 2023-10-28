import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

type Props = {};

/**
 * Pour les personnes "non - connecter"
 */
export default function GuestLayout({}: Props) {
   const { user, token } = useStateContext();

   if (token) {
      return <Navigate to="/" />;
   }

   return (
      <>
         <p>Pour les non connecter</p>
         <Outlet />
      </>
   );
}
