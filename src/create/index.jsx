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
        <input type="text" placeholder="ism" {...register("ism")} />
        <input type="text" placeholder="familya" {...register("familya")} />
        <input type="text" placeholder="age" {...register("age")} />
        <input type="text" placeholder="language" {...register("language")} />
        <input type="text" placeholder="location" {...register("location")} />
        <button>add</button>
      </form>
    </div>
  );
}
