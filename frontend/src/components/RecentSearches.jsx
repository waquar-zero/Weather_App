import { useEffect, useState } from "react";

function RecentSearches({ searchCount }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function getHistory() {
      try {
        const response = await fetch("http://localhost:3000/history");
        const data = await response.json();
        setHistory(data);
      } catch (err) {
        console.error(err);
      }
    }

    getHistory();
  }, [searchCount]);

  return (
    <div className="recent-searches">

      <h3>RECENT SEARCHES</h3>

      <div className="recent-grid">

        {history.map((item) => (
          <div className="recent-card" key={item._id}>

            <h2>{item.city}</h2>

            <p>Tap to search again</p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentSearches;