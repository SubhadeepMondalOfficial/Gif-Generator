import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "./hooks/useGif";

// const API_KEY = process.env.GIPHY_API_KEY
// let API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;

function RandomMeme() {
  // const [loading, setLoading] = useState(true);
  // const [gif, setGif] = useState("");
  // const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  // async function fetchData() {
  //   setLoading(true);
  //   const response = await fetch(apiUrl);
  //   const data = await response.json();
  //   setGif(data.data.images.downsized_large.url);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // function generateBtnHandler() {
  //   fetchData();
  // }

  const { loading, gif, fetchData } = useGif();

  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-[#00BDFF] px-6 py-6 min-w-[400px] min-h-[400px] rounded-lg">
      <h3 className="text-3xl font-mono font-bold">A RANDOM GIF</h3>
      {loading ? (
        <Spinner spinnerColor="orangeSpinner" />
      ) : ( 
        <img src={gif} alt="A random gif" className="rounded-lg max-h-[400px]" />
      )}
      <button
        className="bg-[#F57656] w-full py-2 text-white font-bold text-lg rounded-lg tracking-widest"
        onClick={() => fetchData()}
      >
        GENERATE
      </button>
    </div>
  );
}

export default RandomMeme;
