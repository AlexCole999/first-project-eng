import React, { useState } from 'react'
import './Dashboard.css'
import ResponseDB from './ResponseDB/ResponseDB';

export default function Dashboard() {
  const [state, setstate] = useState(0);
  const [response, setresponse] = useState('empty');

  function addRequest(input) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${input}`)
      .then(setresponse('waiting for response'))
      .then(response => response.json())
      .then(json => json.title ? setresponse(json.title) : setresponse("nothing to write"))
  }
  return (
    <div className="Dashboard">
      <div className="Dashboard-content">
        <div>
          <h1>{state}</h1>
          <button
            onClick={() => setstate(state + 1)}
          >
            increment
          </button>
          <button
            onClick={() => setstate(state - 1)}
            style={{ marginLeft: '5px' }}
          >
            decrement
          </button>
          <br />
        </div>
        <div className="jsonplaceholder">
          <h1>API JSONPlaceHolder</h1>
          <input className="jsonplaceholder__input"
            type="text"
            onChange={
              (e) => {
                addRequest(e.target.value)
              }
            }
          />
          <br />
          <ResponseDB some={response} />
        </div>
      </div>

    </div >
  )
}
