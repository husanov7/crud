import Delete from "./delete";
import { Typography, Card } from "@material-tailwind/react";
import { Link, Route, Router, Routes } from "react-router-dom";
import Create from "./create";

export default function App() {
  return (
    <>
      <Link to="/delete">delete page</Link>
      <Link to={"/create"} >create</Link>

      <Routes>
        <Route path="/delete" element={<Delete />} />
        <Route path="/create" element={<Create />} />

      </Routes>


    </>
  );
}
