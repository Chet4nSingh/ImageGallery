export default function ImageCard({ place, onSelect }) {
  return (
    <li
      onClick={() => onSelect(place)}
      className="w-[30%] group relative hover:scale-105 transition-all"
    >
      <img className="h-full" src={place.src} />

      <div className="w-full text-white translate-y-4 hidden font-bold absolute bottom-0 py-4 pl-4 group-hover:translate-y-0 group-hover:block bg-gradient-to-t from-black">
        <h3 className="text-2xl mb-2">{place.author}</h3>
        <p className="mb-2">{place.caption}</p>
      </div>
    </li>
  );
}
