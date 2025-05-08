import { useState } from "react";
import Loader from "./components/Loader";
import Intro from "./components/Intro";
import HeroSection from "./components/HeroSection";
import SectionWhat from "./components/SectionWhat";

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [doneIntro, setDoneIntro] = useState(false);

  return (
    <>
      {!showIntro ? (
        <Loader onComplete={() => setShowIntro(true)} />
      ) : !doneIntro ? (
        <Intro onComplete={() => setDoneIntro(true)} />
      ) : (
        <>
          <HeroSection />
          <SectionWhat />
          <div
            style={{
              height: "100vh",
              backgroundColor: "#024950",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2rem",
            }}
          >
            Next Section
          </div>
        </>
      )}
    </>
  );
}

export default App;
