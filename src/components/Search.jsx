import React from "react";
import Line from "./Line";

const Search = (props) => {
  return (
    <main className="search">
      <h1>
        <span role="img" aria-label="Sunglasses man">
          😎 EmojiSearch 😎
        </span>
      </h1>
      <input
        placeholder="What emoji are you looking for ?"
        type="text"
        name="text"
        value={props.search}
        onChange={props.handleSearch}
      />

      <Line resultSearch={props.search} />
    </main>
  );
};

export default Search;
