import React from "react";

type Props = {};

export default function Navbar({}: Props) {
   return (
      <div
         className="navbar"
         style={{
            position: "sticky",
            top: 0,
            left: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            zIndex: 1000,
            backgroundColor: "#000",
         }}
      >
         <h2>Navbar</h2>

         <p>Monstre</p>
      </div>
   );
}
