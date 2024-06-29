<<<<<<< HEAD
import { Link, Route, Routes } from "react-router-dom";
import Delete from "./delete";
=======
import { Typography, Card } from "@material-tailwind/react";
import { Link, Route, Router, Routes } from "react-router-dom";
import Create from "./create";
>>>>>>> 31a4f41efd49237f7af38192ef2b963c4d2b62b2

export default function App() {
  return (
   <>
<<<<<<< HEAD
   <Link to="/delete">delete page</Link>
   <Routes>
    <Route path="/delete" element={<Delete/>}/>
   </Routes>
=======
     {/* <Link to={"/create"} >create</Link> */}
  <Link to={"/create"} >create</Link>

  <Routes>
    {/* <Route path="/create" element={<Create/>} /> */}
    <Route path="/create" element={<Create/>} />

  </Routes>

>>>>>>> 31a4f41efd49237f7af38192ef2b963c4d2b62b2
   </>
  );
}
