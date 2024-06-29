import axios from "axios";
import { useForm } from "react-hook-form";
import { api } from "../../url";

export default function Create() {
  const { register, handleSubmit } = useForm();
  const newTavar = (data) => {
    console.log(data);
    api.post("/carts", data);
  };

  return (
    <div>
      <h1>create new tavar</h1>
      <form onSubmit={handleSubmit(newTavar)}>
        <input type="text" placeholder="ism" {...register("example")} />
        <input type="text" placeholder="familya" {...register("example")} />
        <input type="text" placeholder="age" {...register("example")} />
        <input type="text" placeholder="language" {...register("example")} />
        <input type="text" placeholder="location" {...register("example")} />
        <button>add</button>
      </form>
    </div>
  );
}
