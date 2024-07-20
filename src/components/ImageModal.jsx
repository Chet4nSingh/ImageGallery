import { useEffect, useRef } from "react";

function ImageModal({ place, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    dialog.current.showModal();
  }, [place]);

  function closeModal() {
    dialog.current.close();
    onClose();
  }

  return (
    <dialog
      onClick={closeModal}
      ref={dialog}
      className="w-[30%] mt-12 mx-auto relative outline-none backdrop:bg-black/50 backdrop:blur-md"
    >
      <img className="h-full" src={place.src} />

      <div className="w-full text-white font-bold absolute bottom-0 py-4 pl-4 bg-gradient-to-t from-black">
        <h3 className="text-2xl mb-2">{place.author}</h3>
        <p className="mb-2">{place.caption}</p>
      </div>
    </dialog>
  );
}

export default ImageModal;
