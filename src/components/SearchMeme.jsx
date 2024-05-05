import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "./hooks/useGif";

// let API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;

function SearchMeme() {
  //   const [loading, setLoading] = useState(true);
  //   const [gif, setGif] = useState('');
  const [searchInputValue, setSearchInputValue] = useState("Rabbit");
  //   const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchInputValue}`;

  //   async function fetchData() {
  //     setLoading(true);
  //     const response = await fetch(apiUrl);
  //     const data = await response.json();
  //     setGif(data.data.images.downsized_large.url);
  //     setLoading(false);
  //   }

  function inputTextHandler(event) {
    setSearchInputValue(event.target.value);
  }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   function generateBtnHandler() {
  //     fetchData();
  //   }

  const { loading, gif, fetchData } = useGif(searchInputValue);

  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-[#F57656] px-6 py-6 min-w-[400px] min-h-[400px] rounded-lg">
      <h3 className="text-3xl font-mono font-bold">A RANDOM GIF</h3>
      {loading ? (
        <Spinner spinnerColor="blueSpinner" />
      ) : (
        <img src={gif} alt="Search gif" className="rounded-lg max-h-[350px]" />
      )}
      <input
        type="text"
        className="w-full rounded-md py-2 text-center focus:outline-none"
        onChange={inputTextHandler}
        placeholder={searchInputValue}
      />
      <button
        className="bg-[#00BDFF] w-full py-2 text-white font-bold text-lg rounded-lg tracking-widest"
        onClick={() => fetchData()}
      >
        GENERATE
      </button>
    </div>
  );
}

export default SearchMeme;
