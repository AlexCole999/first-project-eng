import React from 'react';
import './Dashboard.css';
import { Routes, Route } from "react-router-dom";
import AddWord from './AddWord/AddWord';
import MyWords from './MyWords/MyWords';
import Profile from './Profile/Profile';
import Progress from './Progress/Progress';

export default function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <div className="Dashboard">
        <div className="Dashboard-content">
          <Routes>
            <Route exact path="/" element={<div>Инструкция к применению</div>}>
            </Route>
            <Route exact path="/addword" element={<AddWord firebase={props.firebase} />}>
            </Route>
            <Route exact path="/mywords" element={<MyWords />}>
            </Route>
            <Route exact path="/progress" element={<Progress />}>
            </Route>
            <Route exact path="/profile" element={<Profile />}>
            </Route>
          </Routes>
        </div>
      </div >
    </div>
  )
}