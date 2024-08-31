import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Searchbar from "./components/searchbar/searchbar";

function App() {
  const suggestionList = [
    "Azithromycin 500mg",
    "Azithromycin 250mg",
    "Paracetamol 500mg",
    "Paracetamol 1000mg",
    "Clarithromycin 500mg",
    "Atorvastatin 50mg",
    "Acetaminophen",
    "Adderall",
    "Amitriptyline",
    "Amlodipine",
    "Amoxicillin",
    "Ativan"
  ];

  const [searchTerm, setsearchTerm] = useState("");
  let filteredData = suggestionList;
  if (searchTerm) {
    filteredData = filteredData.filter(i =>
      i.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
  } else if (searchTerm === "") {
    filteredData = [];
  }

  return (
    <div className="App">
      <div className="home-searchcontainer">
        <Navbar />
        <div className="taglinecont">
          <h4>Unlock the Lowest Prices on Medicines, Every Time.</h4>
        </div>
        <Searchbar
          searchTerm={searchTerm}
          setsearchTerm={setsearchTerm}
          filteredData={filteredData}
        />
      </div>
      <div className="card-container">Hello</div>
    </div>
  );
}

export default App;
