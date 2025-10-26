import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import vector1 from "../../../assets/vector1.png";
import vector2 from "../../../assets/vector2.png";
import vector3 from "../../../assets/vector3.png";
import vector4 from "../../../assets/vector4.png";
import tick from "../../../assets/tick_sign.png";

// Weighted vector array — vector1 & 4 appear less often
// kept at module scope so it is stable and doesn't need to be a useEffect dependency
const WEIGHTED_VECTORS = [vector1, vector2, vector2, vector3, vector3, vector4];

const SuccessStep = () => {
  const { i18n } = useTranslation();
  const heading =
    i18n.language === "ar"
      ? "آگهی شما با موفقیت ثبت شد"
      : "Your advertisement has been successfully submitted.";

  // use module-scoped WEIGHTED_VECTORS to keep the array stable across renders

  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const totalParticles = 50;
    const newParticles = Array.from({ length: totalParticles }).map(() => ({
      src: WEIGHTED_VECTORS[Math.floor(Math.random() * WEIGHTED_VECTORS.length)],
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 0.8,
      size: Math.random() * 10 + 20,
      rotation: Math.random() * 360,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="success-page relative flex flex-col items-center justify-center h-screen overflow-hidden space-y-10">
        <h2 className="heading-3">{heading}</h2>
      {/* Red background main container */}
      <div className="relative w-full p-4 mx-auto h-[60%] animate-scale-in overflow-hidden">

        {/* Blue inner layer (main vector area) */}
        <div className="relative w-[60%] h-full mx-auto overflow-hidden">
          {particles.map((p, i) => (
            <img
              key={i}
              src={p.src}
              alt="vector"
              className="absolute opacity-70"
              style={{
                top: `${p.top}%`,
                left: `${p.left}%`,
                // width: `${p.size}px`,
                // height: `${p.size}px`,
                transform: `rotate(${p.rotation}deg)`,
                animation: `float 2.5s ease-in-out ${p.delay}s infinite alternate`,
              }}
            />
          ))}
        </div>

        {/* Tick icon in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-green-700 flex items-center justify-center z-10">
          <img
            src={tick}
            alt="tick"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.8; }
          100% { transform: translateY(-10px) scale(1.05) rotate(10deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SuccessStep;
