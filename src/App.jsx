import "./App.css";
import RandomMeme from "./components/RandomMeme";
import SearchMeme from "./components/SearchMeme";

function App() {
  return (
    <div>
      <div>
        <h1>Generate Today's Gif</h1>
      </div>

      <div className="flex justify-center items-center gap-10 mt-7">
        <RandomMeme />
        <SearchMeme />
      </div>
    </div>
  );
}

export default App;
