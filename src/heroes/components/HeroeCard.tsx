import { Link } from "react-router-dom";

interface HeroeCardProps {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

export const HeroeCard = (props: HeroeCardProps) => {
  const { id, superhero, alter_ego, first_appearance, characters } = props;

  const heroeImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <>
      <div className="col">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4 animate__animated animate__fadeIn">
              <img src={heroeImageUrl} className="card-img" alt={superhero} />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{superhero} </h5>
                <p className="card-text">{alter_ego}</p>

                {alter_ego !== characters && <p>{characters}</p>}

                <p className="card-text">
                  <small className="text-muted">{first_appearance} </small>
                </p>

                <Link to={`/hero/${id}`}>More information</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
