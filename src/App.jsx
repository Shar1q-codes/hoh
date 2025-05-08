import { useState } from "react";
import Loader from "./components/Loader";
import Intro from "./components/Intro";
import HeroSection from "./components/HeroSection";
import SectionWhat from "./components/SectionWhat";
import SectionWhy from "./components/SectionWhy";

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
          <SectionWhy />
          <div
            style={{
              height: "120vh",
              background: "linear-gradient(120deg, #024950 80%, #003135 100%)",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2.2rem",
              letterSpacing: "-1px",
              fontWeight: 700,
              boxShadow: "0 -8px 32px #00313544 inset",
              borderTop: "2px solid #0fa4af22",
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
