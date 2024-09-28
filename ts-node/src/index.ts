import { getPokemon } from "./generics/get-pokemon";

getPokemon(4)
  .then((pokemon) => console.log(pokemon))
  .catch((err) => console.error(err))
  .finally(() => console.log("Finally block"));
