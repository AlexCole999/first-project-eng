import React from 'react'
import './Dashboard.css'
import YandexVocabulary from './YandexVocabulary/YandexVocabulary';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="Dashboard">
        <div className="Dashboard-content">
          <YandexVocabulary />
          <button onClick={() => console.log(1)}></button>
        </div>
      </div >
    </div>
  )
}
