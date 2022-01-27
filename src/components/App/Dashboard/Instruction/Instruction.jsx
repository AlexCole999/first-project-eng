import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineHdd } from "react-icons/ai";
import { AiOutlineFund } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import './Instruction.css';
import ProfileStatistic from './../Profile/ProfileStatistic/ProfileStatistic';

export default function Instruction(props) {
  return (
    <div className="Instruction">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '45px' }}><div style={{ fontSize: "32px", fontWeight: "bold" }}>Инструкция к применению</div></div>
      <div className="Instruction-wrapper">
        <div className="Instruction-elements">
          <div className="Instruction-row">
            <NavLink to={"/first-project-eng/addword"} className="Navbar-right-elem" title="Искать слова">
              <AiOutlineFileSearch style={{ width: "55px", height: "55px" }} />
            </NavLink>
            <div className="Instruction-text">
              <ul>
                <li>Найти перевод</li>
                <li>Добавить пару "слово - перевод" в базу</li>
              </ul>
            </div>
          </div>
          <div className="Instruction-row">
            <NavLink to={"/first-project-eng/mywords"} className="Navbar-right-elem" title="Добавленные слова">
              <AiOutlineHdd style={{ width: "55px", height: "55px" }} />
            </NavLink>
            <div className="Instruction-text">
              <ul>
                <li>База добавленных пар</li>
                <li>Удалить данные из базы</li>
              </ul>
            </div>
          </div>
          <div className="Instruction-row">
            <NavLink to={"/first-project-eng/progress"} className="Navbar-right-elem" title="Учить (Мой прогресс)">
              <AiOutlineFund style={{ width: "55px", height: "55px" }} />
            </NavLink>
            <div className="Instruction-text">
              <ul>
                <li>Учить слова</li>
              </ul>
            </div>
          </div>
          <div className="Instruction-row">
            <NavLink to={"/first-project-eng/profile"} className="Navbar-right-elem" title="Настройки (Профиль)">
              <AiOutlineUser style={{ width: "55px", height: "55px" }} />
            </NavLink>
            <div className="Instruction-text">
              <ul>
                <li>Статистика пользователя</li>
              </ul>
            </div>
          </div>
        </div>
        <ProfileStatistic />
      </div>
    </div>
  );
}
