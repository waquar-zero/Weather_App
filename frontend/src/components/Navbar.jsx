import { useState } from "react";
import { Search } from "lucide-react";

function Navbar({ setWeather, setError, setSearchCount }) {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!city.trim()) return;

    setLoading(true);

    // If you still have the setError bug, comment these two lines for now.
    if (setError) setError("");

    try {
      const response = await fetch(
        `http://localhost:3000/weather/${city}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      setWeather(data);

      if (setSearchCount) {
        setSearchCount((prev) => prev + 1);
      }

      setCity("");
    } catch (error) {
      console.error(error);

      setWeather(null);

      if (setError) {
        setError("City not found");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="navbar">
      <div className="search-box">
        <Search size={20} className="search-icon" />

        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          disabled={loading}
        />
      </div>
    </div>
  );
}

export default Navbar;