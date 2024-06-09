import { Heroe } from "../components/types";
import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher: string) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} is not valid`);
  }

  return heroes.filter((heroe: Heroe) => heroe.publisher === publisher);
};
