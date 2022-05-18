import { HeroMain } from "./Components/HeroMain/HeroMain";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="h-full w-full bg-light dark:bg-dark font-Inter">
        <Navbar />
        <HeroMain />
      </div>
    </>
  );
}

export default App;
