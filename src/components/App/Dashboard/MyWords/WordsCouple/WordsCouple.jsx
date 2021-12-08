import { React } from 'react';
import './WordsCouple.css';
import toUpperCase from './../../../../functionsForComponents/toUpperCase';


export default function WordsCouple(props) {
  return (
    <div className="WordsCouple">
      <div>{toUpperCase(props.word)}</div>
      <div
        style={{
          fontStyle: "italic",
          fontWeight: "600"
        }}>
        {toUpperCase(props.translate)}
      </div>
    </div>
  )
}