import { Heroe } from "../components/types";
import { heroes } from "../data/heroes";

export const getHeroesById = (id: string) => {
  return heroes.find((heroe: Heroe) => heroe.id == id);
};
