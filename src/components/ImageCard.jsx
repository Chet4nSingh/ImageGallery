export default function ImageCard({ place, onSelect }) {
  return (
    <li onClick={() => onSelect(place)} className="w-[30%] border border-slate-600 p-4 text-slate-500 hover:scale-105 transition-all">
      <div className="mb-4">
        <img src={place.src} />
      </div>
      <h3 className="text-2xl mb-2">{place.author}</h3>
      <p className="mb-2">{place.caption}</p>
    </li>
  );
}
