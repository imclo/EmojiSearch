import React, { useState } from "react";
import data from "../assets/data.json";

function Line(props) {
  return (
    <div className="line">
      {data.map((elem, index) => {
        if (elem.keywords.indexOf(props.resultSearch) !== -1) {
          return (
            <button className="eachLine" key={index}>
              <span>{elem.symbol} </span> <span> {elem.title} </span>{" "}
            </button>
          );
        }
      })}
    </div>
  );
}

export default Line;
