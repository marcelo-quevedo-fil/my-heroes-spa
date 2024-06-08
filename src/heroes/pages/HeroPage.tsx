import { Navigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";
import { Heroe } from "../components/types";

export const HeroPage = () => {
  const { id } = useParams();

  console.log(id);

  const hero = getHeroesById<Heroe>(id);

  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }

  return (
    <>
      <h1>HeroPage</h1>
      <hr />
      <pre>{hero.id}</pre>
      <pre>{hero.superhero}</pre>
      <pre>{hero.publisher}</pre>
      <pre>{hero.alter_ego}</pre>
      <pre>{hero.first_appearance}</pre>
      <pre>{hero.characters}</pre>
    </>
  );
};
