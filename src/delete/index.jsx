import { Link } from "react-router-dom";
// import "./index.scss";
import { useEffect, useState } from "react";

export default function Delete() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://crudcrud.com/api/c8311f78b91849d6b9a95f3e9de39f69")
      .then((r) => r.json())
      .then((r) => setData(r));
  }, []);

  return (
    <div>
      <h1>delete page</h1>
      <div className="cards grid-cols-4 grid gap-10">
        {data.map((p) => (
          <div className="card  p-5 rounded-xl bg-gray-500" key={p.id}>
            <h4>{p.title}</h4>
            <button className="bg-black text-white p-2 rounded-lg">delete</button>
            {/* <Link to={`/update/${p.id}`}> update</Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}
