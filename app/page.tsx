"use client"; // Ajoutez cette ligne pour marquer le composant comme client

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Navbar_Responsive from "./components/Navbar_responsive";

const HomePage: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsSmallScreen(window.innerWidth < 750);
    };

    window.addEventListener("resize", checkWindowSize);

    checkWindowSize();

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  return (
    <>
      {isSmallScreen ? <Navbar_Responsive /> : <Navbar />}
      <div className="container w-full">
        {/* Section de la vidéo locale */}
        <div className="w-full">
          <video
            className="w-full h-auto" // Remplir toute la largeur de l'écran
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute", // Remplir toute l'espace disponible
              top: 0,
              left: 0,
              width: "100%", // Prend toute la largeur disponible
              height: "100vh", // Occupe toute la hauteur de la fenêtre
              objectFit: "cover", // Maintient le ratio de la vidéo sans distorsion
              zIndex: -1, // Assure que la vidéo reste en arrière-plan
            }}
          >
            <source src="/video/eau_sale.mp4" type="video/mp4" />
            Votre navigateur ne prend pas en charge la vidéo HTML5.
          </video>
        </div>
      </div>
    </>
  );
};

export default HomePage;
