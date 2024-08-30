import "./App.css";
import Navbar from "./components/navbar/navbar";
import Searchbar from "./components/searchbar/searchbar";

function App() {
  return (
    <div className="App">
      <div className="home-searchcontainer">
        <Navbar />
        <div className="taglinecont">
          <h4>Unlock the Lowest Prices on Medicines, Every Time.</h4>
        </div>
        <Searchbar />
      </div>
    </div>
  );
}

export default App;
