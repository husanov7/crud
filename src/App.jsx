import { Typography, Card } from "@material-tailwind/react";
import { Link, Route, Router, Routes } from "react-router-dom";
import Create from "./create";

export default function App() {
  return (
   <>
     {/* <Link to={"/create"} >create</Link> */}
  <Link to={"/create"} >create</Link>

  <Routes>
    {/* <Route path="/create" element={<Create/>} /> */}
    <Route path="/create" element={<Create/>} />

  </Routes>

   </>
  );
}
