import ImageCard from "./components/ImageCard";

function App() {
  return <main className="p-8">
     <h1 className="text-9xl mb-24">Image Gallery</h1>
     <section className="flex flex-wrap justify-between items-center gap-16">
     <ImageCard />
     <ImageCard />
     <ImageCard />
     <ImageCard />
     <ImageCard />
     <ImageCard />
     <ImageCard />
     <ImageCard />
     <ImageCard />
     </section>
  </main>
}

export default App;
