import React, { FormEvent, useRef } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

type Props = {};

export default function Login({}: Props) {
   const nameInputRef = useRef<HTMLInputElement>(null);
   const { setToken } = useStateContext();

   const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      if (nameInputRef.current) setToken(nameInputRef.current?.value);
   };

   return (
      <>
         <form onSubmit={onSubmit}>
            <input ref={nameInputRef} placeholder="Name" />

            <button type="submit">Login</button>

            <p>
               Not register <Link to={"/signUp"}>Create an account</Link>
            </p>
         </form>
      </>
   );
}
