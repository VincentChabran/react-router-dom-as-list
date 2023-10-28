# React + TypeScript + Vite

Défilement des composants
Une bar latérale gauche
Un contenu au milieu
Une bar latérale droite

```jsx
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
```

## React router dom

Déclaration des routes grâce à une liste

```ts
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
]);
```
