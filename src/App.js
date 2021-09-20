import { useState } from "react";
import "./styles.css";

var movieDictionary = {
  Action: [
    {
      Film: "Avengers:Endgame",
      Ratings: "5/5"
    },
    {
      Film: "Mad Max: Fury Road",
      Ratings: "4.5/5"
    },
    {
      Film: "Collateral",
      Ratings: "4/5"
    }
  ],
  Horror: [
    {
      Film: "Hereditary",
      Ratings: "4.5/5"
    },
    {
      Film: "The Shining",
      Ratings: "5/5"
    },
    {
      Film: "The Conjuring",
      Ratings: "4/5"
    }
  ],
  Drama: [
    {
      Film: "Whiplash",
      Ratings: "5/5"
    },
    {
      Film: "Forrest Gump",
      Ratings: "5/5"
    },
    {
      Film: "A Beautiful Mind ",
      Ratings: "4.5/5"
    }
  ]
};
export default function App() {
  var [outputMovie, setOutputMovie] = useState("Action");

  function movieClickHandler(Film) {
    setOutputMovie(Film);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-labelledby="movieNotes"></span>
        goodMovies{" "}
      </h1>
      <p>Checkout some of my favorite movies from three different genres.</p>

      <div className="genreList">
        {Object.keys(movieDictionary).map((movie) => {
          return (
            <button
              className="btnClick"
              onClick={() => movieClickHandler(movie)}
              style={{ alignself: "left", cursor: "pointer" }}
            >
              {" "}
              {movie}
            </button>
          );
        })}
      </div>

      <div className="seeMovieList">
        {movieDictionary[outputMovie].map((movie) => {
          return (
            <ul className="display-list" key={movie}>
              <li> {movie.Film} </li>

              <li> {movie.Ratings} </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
