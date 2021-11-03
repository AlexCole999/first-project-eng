import React from 'react';
import './SearchedTranslate.css';
// import { AiFillCheckCircle } from "react-icons/ai";

export default function SearchedTranslate(props) {
  return (
    <div className="SearchedTranslate">
      <div>
        {props.translates.map(x => <div>{x.text}</div>)}
      </div>

    </div>
  );
}
/* <AiFillCheckCircle
        style={{ color: "grey", width: "20px", height: '20px' }}
        onClick={() => console.log(1)} /> */