import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroesById(id ?? ""), [id]);

  const navigate = useNavigate();

  const heroeImageUrl = `/assets/heroes/${id}.jpg`;

  const onReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }

  return (
    <>
      <h1>HeroPage</h1>
      <hr />
      {/* <pre>{hero.id}</pre>
      <pre>{hero.superhero}</pre>
      <pre>{hero.publisher}</pre>
      <pre>{hero.alter_ego}</pre>
      <pre>{hero.first_appearance}</pre>
      <pre>{hero.characters}</pre> */}

      <div className="row mt-5">
        <div className="col-4 animate__animated animate__fadeInLeft">
          <img
            className="img-thumbnail"
            src={heroeImageUrl}
            alt={hero.superhero}
          />
        </div>
        <div className="col-8">
          <h3>{hero.superhero} </h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego:</b> {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher</b> {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance:</b> {hero.first_appearance}
            </li>
          </ul>

          <h5 className="mt-3">Characters</h5>
          <p>{hero.characters}</p>

          <button className="btn btn-outline-primary" onClick={onReturn}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};
