import Header from "./Header";
import Hero from "./Hero";
import ImageCarousel from "./ImageCarousel";
import JoinUs from "./JoinUs";
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
        <JoinUs />
      </main>
    </>
  );
}
export default App;
