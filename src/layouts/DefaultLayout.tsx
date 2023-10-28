import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

type Props = {};

export default function DefaultLayout({}: Props) {
   const { user, token } = useStateContext();

   // Si il n'y a pas de token, redirige vers "/login"
   if (!token) {
      return <Navigate to="/login" />;
   }

   return (
      <>
         <div style={{ position: "relative", maxWidth: "1440px", margin: "auto" }}>
            <Navbar />

            <div style={{ display: "flex" }}>
               {/* Sidebar avec défilement indépendant */}
               <Sidebar />

               <main className="content" style={{ flex: 1, marginLeft: "250px", width: "100%", padding: "10px 30px" }}>
                  {/* Outlet rendra le composant correspondant à la route visitée */}
                  <Outlet />
               </main>
            </div>
         </div>
      </>
   );
}
