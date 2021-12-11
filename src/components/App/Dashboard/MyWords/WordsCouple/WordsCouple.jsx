import { React } from 'react';
import './WordsCouple.css';
import toUpperCase from './../../../../functionsForComponents/toUpperCase';


export default function WordsCouple(props) {
  return (
    <div className="WordsCouple">
      <div>{toUpperCase(props.word)}</div>
      <div style={{ fontStyle: "italic", fontWeight: "600" }}>
        {Array.isArray(props.translate)
          ? props.translate.map(x =>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div key={x}>{toUpperCase(x)}</div>
            </div>
          )
          : toUpperCase(props.translate)}
      </div>
    </div>
  )
}