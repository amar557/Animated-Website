import Main from "./Main";
import Navbar from "./navbar";

function Hero() {
  return (
    <div className="bg-primary h-screen px-8">
      <Navbar />
      <Main />
    </div>
  );
}

export default Hero;
