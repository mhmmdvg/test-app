import "./App.css";
import Home from "./pages/home/Home";
import data from "./data";
import "./home.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <img
            className="imageopt"
            src={data.album.images[0].url}
            alt="rapsody"
          />
          <p>{data.album.name}</p>
          <p>{data.artists[0].name}</p>
          <button>Play</button>
        </div>
      </div>
    </div>
  );
}

export default App;
