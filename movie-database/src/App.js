import { useState, useEffect } from "react";
import styled from "styled-components";
import AppMap from "./AppMap";

const Wrapper = styled.div`
  form {
    //   position: absolute;
    width: 90%;
    margin: auto;
    background: linear-gradient(145deg, #3b4d55, #4f6873);
    border-radius: 8px;
    box-shadow: 9.91px 9.91px 15px #3f525b, -9.91px -9.91px 15px #4b626d;
    padding: 2em;
    margin-top: 4em;
  }
  input {
    width: 90%;
    height: 45px;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 5px;
    padding-left: 16px;
    margin: 2em auto;
    color: #fff;
  }
  button {
    width: 50%;
    height: 45px;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 5px;
    font-family: "Roboto Mono", monospace;
    color: #fff;
  }
  .inner-form {
    // width: 95%;
    margin: 0 auto;
  }

  h1,
  small {
    font-family: "Montserrat", Sans-serif;
    margin-left: 2%;
    color: #fff;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 90%;
    grid-gap: 25px;
    // position: absolute;
    margin: 2em auto;
  }
  @media only screen and (max-width: 450px) {
    grid-container {
      background-color: lightblue;
      .grid-container {
        display: grid;
        grid-template-columns: 1fr;
      }
    }
    form {
      width: 100vw;
    }
  }
`;

export default function App() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  useEffect(() => {
    getData();
  }, [query]);

  const getData = async () => {
    const response = await fetch(
      `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${query}&page=1&r=json`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "41f3f91b13mshaa0652a8c3b96f1p165abcjsn42e270cab71c",
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    setResults(data.Search);
    console.log(data);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Wrapper>
      <form onSubmit={getSearch}>
        <h1>Search Movies</h1>

        <input
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search Titles..."
        />
        <button type="submit">SEARCH</button>
      </form>
      <div className="grid-container">
        {results.map((result) => (
          <AppMap
            key={result.imdbID}
            Title={result.Title}
            Type={result.Type}
            Year={result.Year}
            Poster={result.Poster}
            i
          />
        ))}
      </div>
      
    </Wrapper>
  );
}
