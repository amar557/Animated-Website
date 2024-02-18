import Hero from "./components/Hero";
import "./App.css";
import AnimateHeading from "./components/AnimateHeading";
import OurApprouch from "./components/OurApprouch";
import PlayEyes from "./components/PlayEyes";
function App() {
  return (
    <div className="text-slate-700">
      <Hero />
      <AnimateHeading />
      <OurApprouch />
      <PlayEyes />
    </div>
  );
}

export default App;
