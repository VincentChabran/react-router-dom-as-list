import React from "react";
import { Link } from "react-router-dom";

type Props = {};

export default function SignUp({}: Props) {
   return (
      <>
         <div>SignUp</div>
         <Link to="/login">Back to login</Link>
      </>
   );
}
