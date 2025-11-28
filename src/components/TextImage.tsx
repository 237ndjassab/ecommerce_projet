// src/assets/components/TextImage.tsx
import React from "react";

interface TextImageProps {
  src: string;       // image
  alt: string;       // alt text
  nom: string;       // nom de la personne
  metier: string;    // métier
}

const TextImage: React.FC<TextImageProps> = ({ src, alt, nom, metier }) => {
  return (
    <div className="flex flex-col items-center mx-4">
      <div className="relative inline-block group">
        {/* Halo circulaire */}
        <div
          className="absolute top-1/2 left-1/2 w-[120%] h-[120%] rounded-full border border-black opacity-0
          -translate-x-1/2 -translate-y-1/2 transition-all duration-300
          group-hover:opacity-100 group-hover:scale-110"
        ></div>

        {/* Image circulaire */}
        <img
          src={src}
          alt={alt}
          className="rounded-full object-cover transition-transform duration-300 w-40 h-40 group-hover:scale-110"
        />
      </div>

      {/* Texte */}
      <div className="text-center mt-6">
        <h2 className="text-2xl font-semibold text-[#000000] capitalize">{nom}</h2>
        <h3 className="text-[#666666] mt-2">{metier}</h3>
      </div>
    </div>
  );
};

export default TextImage;
