import { React } from 'react';
import './Profile.css';
import ProfileStatistic from './ProfileStatistic/ProfileStatistic';
import { useSelector } from 'react-redux';

export default function Profile(props) {
  return (
    <div className='Profile'>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '45px' }}><div style={{ fontSize: "32px", fontWeight: "bold" }}>Профиль</div></div>
      <ProfileStatistic />
    </div>
  )
}