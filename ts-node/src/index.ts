import { getPokemon } from "./generics/get-pokemon";

getPokemon(4)
  .then((resp) => console.log(resp))
  .catch((err) => console.error(err))
  .finally(() => console.log("Finally block"));
