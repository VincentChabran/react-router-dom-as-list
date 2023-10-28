type Props = {};

const tab: any = [];
for (let i = 0; i < 100; i++) {
   tab.push(1);
}

export default function Accueil({}: Props) {
   return (
      <div style={{ display: "flex", position: "relative" }}>
         <div style={{ flex: 1, padding: "0 10px" }}>
            <h1>Accueil</h1>
            {tab.map(() => (
               <p>Test</p>
            ))}
         </div>

         {/* Sidebar de droite avec défilement indépendant */}
         <aside style={{ width: "220px" }}>
            <div
               style={{
                  position: "fixed",
                  height: "calc(100vh - 100px)",
                  maxWidth: "220px",
                  width: "100%",
                  overflowY: "auto", // Activation du défilement pour la barre latérale
                  padding: "0 6px",
                  background: "gray",
               }}
            >
               {tab.map(() => (
                  <p style={{ fontSize: "14px" }}>Test</p>
               ))}
            </div>
         </aside>
      </div>
   );
}
