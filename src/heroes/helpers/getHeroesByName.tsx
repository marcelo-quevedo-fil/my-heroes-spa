import { Heroe } from "../components/types";
import { heroes } from "../data/heroes";

export const getHeroesByName = (name: string) => {
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) {
    return [];
  }

  return heroes.filter((heroe: Heroe) =>
    heroe.superhero.toLocaleLowerCase().includes(name)
  );
};
