import React, {
   createContext,
   useContext,
   useState,
   FunctionComponent,
   SetStateAction,
   Dispatch,
   ReactNode,
} from "react";

interface Props {
   children: ReactNode;
}

// Définir une interface pour le type d'utilisateur. Adaptez ceci en fonction des données réelles que vous attendez.
interface IUser {
   // Remplacez par les propriétés réelles de votre objet utilisateur
   id: string;
   name: string;
   // ... autres propriétés ...
}

// Définir une interface pour le contexte d'état.
interface IStateContext {
   user: IUser | null;
   token: string | null;
   notification: string | null;
   setUser: Dispatch<SetStateAction<IUser | null>>;
   setToken: (token: string | null) => void;
   setNotification: (message: string) => void;
}

// Valeurs par défaut pour le contexte.
const defaultState: IStateContext = {
   user: null,
   token: null,
   notification: null,
   setUser: () => {}, // fonction vide par défaut
   setToken: () => {}, // fonction vide par défaut
   setNotification: () => {}, // fonction vide par défaut
};

// Création du contexte avec les valeurs par défaut.
const StateContext = createContext<IStateContext>(defaultState);

// Composant de fournisseur de contexte.
export const ContextProvider = ({ children }: Props) => {
   const [user, setUser] = useState<IUser | null>(null);
   const [token, _setToken] = useState<string | null>(localStorage.getItem("ACCESS_TOKEN"));
   const [notification, _setNotification] = useState<string>("");

   const setToken = (newToken: string | null) => {
      _setToken(newToken);
      if (newToken) {
         localStorage.setItem("ACCESS_TOKEN", newToken);
      } else {
         localStorage.removeItem("ACCESS_TOKEN");
      }
   };

   const setNotification = (message: string) => {
      _setNotification(message);

      // Effacer la notification après 5 secondes.
      setTimeout(() => {
         _setNotification("");
      }, 5000);
   };

   // Les valeurs que les consommateurs du contexte peuvent utiliser.
   const contextValue: IStateContext = {
      user,
      setUser,
      token,
      setToken,
      notification,
      setNotification,
   };

   return <StateContext.Provider value={contextValue}>{children}</StateContext.Provider>;
};

// Hook personnalisé pour utiliser le contexte d'état.
export const useStateContext = (): IStateContext => {
   return useContext(StateContext);
};
