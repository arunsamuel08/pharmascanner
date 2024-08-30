import "./searchbar.css";

const Searchbar = () => {
  return (
    <div className="search-cont">
      <input className="input-box" placeholder="Azithromycin 500mg" />
      <button className="search-btn">
        <img src="./images/search.png" alt="search" />
      </button>
    </div>
  );
};

export default Searchbar;
