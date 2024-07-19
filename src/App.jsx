import { useState } from "react";
import { DATA as PLACES } from "../data";
import ImageCard from "./components/ImageCard";
import ImageModal from "./components/ImageModal";
import { useRef } from "react";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const modal = useRef();

  function handleSelectImg(img) {
    setSelectedImg(() => img);
    modal.current.open();
  }

  function handleDeselectImg() {
    setSelectedImg(null);
  }

  return (
    <>
      {selectedImg && <ImageModal ref={modal} place={selectedImg} />}
      <main className="p-8">
        <h1 className="text-9xl mb-24">Image Gallery</h1>
        <ul className="flex flex-wrap justify-between gap-16">
          {PLACES.map((place) => {
            return (
              <ImageCard
                onSelect={handleSelectImg}
                key={place.author}
                place={place}
              />
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
