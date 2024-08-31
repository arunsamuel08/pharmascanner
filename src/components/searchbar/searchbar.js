import "./searchbar.css";

const Searchbar = ({ searchTerm, setsearchTerm, filteredData }) => {
  const handleinputChange = e => {
    setsearchTerm(e.target.value);
  };

  return (
    <div className="searchbox-cont">
      <div className="search-cont">
        <input
          className="input-box"
          placeholder="Search for 'Azithromycin 500mg'"
          value={searchTerm}
          onChange={handleinputChange}
        />
        <button className="search-btn">
          <img src="./images/search.png" alt="search" />
        </button>
      </div>
      <div className="suggestion-box">
        {filteredData.length > 0 && (
          <ul className="suggestions-list">
            {filteredData.map((suggestion, index) => (
              <a href="#home">
                <li key={index} className="suggestion-item">
                  {suggestion}
                </li>
              </a>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
