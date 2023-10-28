import { Link } from "react-router-dom";
import { accueilPath, dashboardPath } from "../utils/constant";

type Props = {};

const tab: any = [];
for (let i = 0; i < 100; i++) {
   tab.push(1);
}

export default function Sidebar({}: Props) {
   return (
      <div
         style={{
            position: "fixed",
            width: "250px",
            height: "calc(100vh - 100px)",
            display: "flex",
            flexDirection: "column",
         }}
      >
         <div>
            <h1>Sidebar</h1>
         </div>

         <nav
            style={{
               flex: 1, // La navigation prend le reste de l'espace disponible
               display: "flex",
               flexDirection: "column",
               overflowY: "auto", // Elle peut également défiler si le contenu est trop long.
            }}
         >
            <Link to={accueilPath}>Accueil</Link>
            <Link to={dashboardPath}>Dashbord</Link>

            {tab.map(() => (
               <p>Test</p>
            ))}
         </nav>
      </div>
   );
}
