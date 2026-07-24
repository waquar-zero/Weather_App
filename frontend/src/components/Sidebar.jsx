import {
  Sun,
  Radar,
  Wind,
  History
} from "lucide-react";

function Sidebar() {
  return (
    <div className="sidebar">

      <div>
        <h2>WEATHER</h2>
        <p>Local Intelligence</p>
      </div>

      <ul>

        <li className="active">
          <Sun size={18}/>
          Forecast
        </li>

        <li>
          <Radar size={18}/>
          Radar
        </li>

        <li>
          <Wind size={18}/>
          Air Quality
        </li>

        <li>
          <History size={18}/>
          History
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;