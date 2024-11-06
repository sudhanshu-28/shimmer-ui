import { useEffect, useState } from "react";

import ShimmerUI from "./components/ShimmerUI";
import DisplayMeme from "./components/DisplayMeme";

import "./App.css";

function App() {
  const [memes, setMemes] = useState([]);

  const fetchMemes = async () => {
    const response = await fetch("https://meme-api.com/gimme/20");
    const jsonData = await response?.json();
    setMemes(jsonData?.memes || []);
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <div className="flex flex-wrap justify-normal">
      {memes.length === 0 ? (
        <ShimmerUI />
      ) : (
        <>
          {memes.map((record, index) => (
            <DisplayMeme key={index} data={record} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
