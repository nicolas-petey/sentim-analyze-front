import Image from "next/image";
import result from "postcss/lib/result";
import React, { useEffect, useState } from "react";

interface ImageAleatoireProps {
  type: string;
}

const ImageAleatoire: React.FC<ImageAleatoireProps> = ({ type }) => {
  // Supposons que vous ayez une liste des noms de fichiers d'images
  const positive = [
    "DALL·E-2024-04-05-10.22.jpg",
    "image (6).jpg",
    "IMG_1644-removebg-preview.jpg",
    // Ajoutez tous les noms de fichiers d'images ici
  ];

  const neutre = [
    "image (1).jpg",
    "image (2).jpg",
    "image.jpg",
    // Ajoutez tous les noms de fichiers d'images ici
  ];

  const negative = [
    "DALL·E-2024-04-05-10.23.jpg",
    "DALL·E-2024-04-05-10.26.jpg",
    "image (3).jpg",
    "image (5).jpg",
    "IMG_0215-removebg-preview.jpg",
    "IMG_0373.jpg",
    // Ajoutez tous les noms de fichiers d'images ici
  ];

  // État pour stocker l'image sélectionnée
  const [imageSelectionnee, setImageSelectionnee] = useState("");

  // Sélectionnez une image aléatoire au montage du composant
  useEffect(() => {
    let indexAleatoire: number = 0.0;
    let nomImageAleatoire: string = "";

    switch (type) {
      case "positive":
        indexAleatoire = Math.floor(Math.random() * positive.length);
        nomImageAleatoire = positive[indexAleatoire];
        setImageSelectionnee(`/image/${type}/${nomImageAleatoire}`);
        break;
      case "neutral":
        indexAleatoire = Math.floor(Math.random() * neutre.length);
        nomImageAleatoire = neutre[indexAleatoire];
        setImageSelectionnee(`/image/${type}/${nomImageAleatoire}`);
        break;
      case "negative":
        indexAleatoire = Math.floor(Math.random() * negative.length);
        nomImageAleatoire = negative[indexAleatoire];
        setImageSelectionnee(`/image/${type}/${nomImageAleatoire}`);
        break;
    }
  }, []);

  return (
    <div>
      {imageSelectionnee && (
        <Image
          className="text-lg text-blue-500"
          src={imageSelectionnee}
          alt={"chat image" + result}
          width={300}
          height={300}
        ></Image>
      )}
    </div>
  );
};

export default ImageAleatoire;
