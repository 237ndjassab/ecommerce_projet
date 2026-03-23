import React, { useState } from "react";
import DivImages from "./DivImages";
import "./index.css";

const RelatedProduct: React.FC  = () => {
  const [ident, setIdent] = useState<number | null>(null); //ident represente la div survolée dans ce cas ident possede l'id de la div
  //je recupere ident et l'id de la div et je les compare dans le DivImages Component
  console.log(ident);
  //ici products represente les differentes informations d'un produit
  //on pourra les recuperer a partir de la base de donnée
  //les informations a recuperer sont renseignés ans le fichiers typeDivImages.ts
  const products = [
    {
      categorie: "Smartphone",
      cell: "Cell Phones",
      name: "Moto G Stylus 5G 2024 Smartphone Available to cell",
      price_after: 200,
      id: 1,
    },
    {
      categorie: "Smartphone",
      cell: "Cell Phones",
      name: "Moto G Stylus 5G 2024 Smartphone Available to cell",
      price_after: 200,
      id: 2,
    },
    {
      categorie: "Smartphone",
      cell: "Cell Phones",
      name: "Moto G Stylus 5G 2024 Smartphone Available to cell",
      price_after: 200,
      id: 3,
    },
    {
      categorie: "Smartphone",
      cell: "Cell Phones",
      name: "Moto G Stylus 5G 2024 Smartphone Available to cell",
      price_after: 200,
      id: 4,
    },
    {
      categorie: "Smartphone",
      cell: "Cell Phones",
      name: "Moto G Stylus 5G 2024 Smartphone Available to cell",
      price_after: 200,
      id: 5,
    },
    {
      categorie: "Smartphone",
      cell: "Cell Phones",
      name: "Moto G Stylus 5G 2024 Smartphone Available to cell",
      price_after: 200,
      id: 6,
    },
  ];

  return (
    <div
      className={`w-full bg-white px-8 pt-20 ${
        ident ? "pb-[27px]" : "pb-22"
      } flex flex-col gap-10`}
      // ici je regle la hauteur de la div principale en fonction de ident; c'est a dire, si je survole une div, la hauteur de l'ecran s'ajuste
    >
      <h1 className="text-black font-normal text-3xl">Related products</h1>
        <div className="w-full flex flex-row gap-2 overflow-x-scroll overflow-y-hidden scroll-smooth scrollBarHide">
          {/* cette div represente la div qui contient l'ensemble de mes DivImages Componens */}
          {products.map((product, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                setIdent(index + 1);
              }}
              onMouseLeave={() => {
                setIdent(null);
              }}
              className="w-fit"
            >
              <DivImages
                categorie={product.categorie}
                cell={product.cell}
                name={product.name}
                price_after={product.price_after}
                ident={ident}
                id={product.id}
                key={product.id}
              />
            </div>
          ))}
        </div>
    </div>
  );
};

export default RelatedProduct;
