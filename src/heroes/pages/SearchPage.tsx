import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks";
import { HeroeCard } from "../components/HeroeCard";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";
import { Heroe } from "../components/types";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) {
    //   return;
    // }
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-primary">Search a hero</div>
          ) : (
            heroes.length == 0 && (
              <div className="alert alert-danger animate__animated animate__fadeIn">
                No heros with <b>{q}</b>
              </div>
            )
          )}

          {heroes.map((heroe: Heroe) => (
            <HeroeCard key={heroe.id} {...heroe} />
          ))}
        </div>
      </div>
    </>
  );
};
