import { HeroeCard } from "../components";

import { getHeroesByPublisher } from "../helpers";
import { useMemo } from "react";
import { Heroe } from "./types";

export interface HeroesListProps {
  publisher: string;
}

export const HeroesList = (props: HeroesListProps) => {
  const { publisher } = props;

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

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
