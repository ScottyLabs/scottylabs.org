import Header from "./Header";
import Hero from "./Hero";
import ImageCarousel from "./ImageCarousel";
import Projects from "./Projects";
import TartanHacks from "./TartanHacks";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImageCarousel />
        <Projects />
        <TartanHacks />
      </main>
    </>
  );
}
export default App;
