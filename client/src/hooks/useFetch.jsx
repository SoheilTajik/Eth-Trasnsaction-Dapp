import { useEffect, useState } from "react";

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        if (!keyword) {
          setGifUrl(""); // Clear the previous GIF URL if no keyword is provided
          return;
        }

        setIsLoading(true); // Set loading state to true

        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=OgARSsuPFeXcGXB4ISV0qvDuNtXv99Qj&q=${keyword}&limit=1`
        );
        const { data } = await response.json();

        if (data && data.length > 0) {
          setGifUrl(data[0].images.downsized_medium.url); // Set the GIF URL
        } else {
          setGifUrl(""); // Clear the GIF URL if no GIF is found
        }

        setIsLoading(false); // Set loading state to false
      } catch (error) {
        console.log(error);
        setGifUrl(""); // Clear the GIF URL in case of an error
        setIsLoading(false); // Set loading state to false
      }
    };

    fetchGifs();
  }, [keyword]);

  return { gifUrl, isLoading };
};

export default useFetch;
