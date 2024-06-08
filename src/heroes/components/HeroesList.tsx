import { HeroeCard } from "../components";

import { Heroe } from "./types";

import { getHeroesByPublisher } from "../helpers";

export interface HeroesListProps {
  publisher: string;
}

export const HeroesList = (props: HeroesListProps) => {
  const { publisher } = props;

  const heroes = getHeroesByPublisher(publisher);

  return (
    <>
      <div className="row rows-cols-1 row-cols-md-3 g-3">
        {heroes.map((heroe: Heroe) => (
          <HeroeCard key={heroe.id} {...heroe} />
        ))}
      </div>
    </>
  );
};
