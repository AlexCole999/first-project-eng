import { React } from 'react';
import './WordsCouple.css';
import toUpperCase from './../../../../functionsForComponents/toUpperCase';
import { AiFillCloseCircle } from "react-icons/ai";

export default function WordsCouple(props) {
  return (
    <div className="WordsCouple">
      <div style={{ display: 'flex', alignItems: 'center' }}>{toUpperCase(props.word)}</div>
      <div style={{ fontStyle: "italic", fontWeight: "500" }}>
        {Array.isArray(props.translate)
          ? props.translate.map(x =>
            <div key={x} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '5px 0px 5px 0px' }}>
              <div>{toUpperCase(x)}</div><AiFillCloseCircle className='WordsCouple-icon' style={{ marginLeft: '5px' }} />
            </div>
          )
          : toUpperCase(props.translate)}
      </div>
    </div>
  )
}