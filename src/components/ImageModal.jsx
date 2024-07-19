import { forwardRef, useImperativeHandle, useRef } from "react";

const ImageModal = forwardRef(function ImageModal({ place }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      },
    };
  });

  return (
    <dialog
      ref={dialog}
      className="w-[30%] mt-12 mx-auto p-4 text-slate-500 backdrop:bg-black/50 backdrop:blur-md"
    >
      <div className="mb-4">
        <img src={place.src} />
      </div>
      <h3 className="text-2xl mb-2">{place.author}</h3>
      <p className="mb-2">{place.caption}</p>
    </dialog>
  );
});

export default ImageModal;
