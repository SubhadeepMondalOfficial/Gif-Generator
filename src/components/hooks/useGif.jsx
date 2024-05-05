import { useEffect, useState } from "react";

let API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;

function useGif(searchKeyword) {
  const [loading, setLoading] = useState(true);
  const [gif, setGif] = useState("");

  const randomGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const searchGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchKeyword}`;

  async function fetchData() {
    setLoading(true);
    const response = await fetch(
      searchKeyword ? `${randomGifUrl}&tag=${searchKeyword}` : randomGifUrl
    );
    const data = await response.json();
    setGif(data.data.images.downsized_large.url);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, gif, fetchData };
}

export default useGif;
