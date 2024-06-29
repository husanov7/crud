import { Link, Route, Routes } from "react-router-dom";
import Delete from "./delete";

export default function App() {
  return (
   <>
   <Link to="/delete">delete page</Link>
   <Routes>
    <Route path="/delete" element={<Delete/>}/>
   </Routes>
   </>
  );
}
