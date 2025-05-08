import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/SectionWhat.css";

const SectionWhat = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end start"],
  });

  const scatterY = useTransform(scrollYProgress, [0.5, 1], [0, -80]);
  const scatterOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  const content = `Heroes of Hyderabad is TOT Awards’ tribute to real impact. This isn't about TRPs, red carpets, or celebrity selfies. It’s about the real deal — 🚀 Entrepreneurs 💡 Innovators 🛡️ Social warriors 🏥 Health heroes 🎨 Cultural torchbearers …who shape Hyderabad’s tomorrow, today.`;

  return (
    <section className="section-what" ref={sectionRef}>
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        src="/videos/heroes_bg.mp4"
      />
      <div className="section-overlay" />

      <motion.h2
        className="what-headline"
        initial={{ opacity: 0, x: -300, y: 300 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
      >
        “Not your usual award show.”
      </motion.h2>

      <motion.div
        className="what-body"
        initial={{ opacity: 0, x: 300, y: -300 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {[...content].map((char, index) => (
          <motion.span
            key={index}
            className="letter"
            style={{
              whiteSpace: char === " " ? "pre" : "normal",
              y: scatterY,
              opacity: scatterOpacity,
              transitionDelay: `${index * 0.015}s`,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default SectionWhat;
