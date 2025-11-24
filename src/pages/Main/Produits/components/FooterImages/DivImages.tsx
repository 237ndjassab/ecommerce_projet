import React, { useState } from "react";
import type { DivImagesType } from "./typeDivImages";
import { AnimatePresence, motion } from "motion/react";

const DivImages = ({
  images1,
  imagesAlt1,
  imagesAlt2,
  images2,
  categorie,
  cell,
  name,
  price_after,
  price_before,
  ident,
  id,
}: DivImagesType) => {
  const [hover, setHover] = useState<boolean>(false);
  // ici on defini le useState propre a chaque Components
  return (
    <>
      <motion.div
        layout
        className={` p-1.5 border rounded-md flex flex-col gap-3.5 items-center pb-5 `}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => setHover(false)}
        transition={{ layout: { duration: 0.6, ease: "easeInOut" } }}
      >
        <motion.div
          layout
          transition={{ layout: { duration: 0.6, ease: "easeInOut" } }}
          className="w-[235px] h-60"
        >
          {!hover && (
            // si la div ne possede pas le hover, on verra un style par defaut
            <div className="w-full h-full bg-amber-400">
              {/* <img src={images1} alt={imagesAlt1} /> */}
            </div>
          )}
          {hover && id == ident && (
            // si la div possede le hover, on verifie ensuite si le id de la div est egale a ident de cette façon
            //  on s'est que c'est une div en particulier que l'on est entrain de manipuler
            <div className="w-full h-full bg-blue-400">
              {/* <img src={images2} alt={imagesAlt2} /> */}
            </div>
          )}
        </motion.div>
        <motion.div
          layout
          transition={{ layout: { duration: 0.6, ease: "easeInOut" } }}
          className="w-full flex flex-col gap-1.5 items-start"
        >
          <div className="text-[14px] text-gray-400 font-normal ">
            <span className="cursor-pointer hover:text-black  transition-all duration-300 ease-in-out">
              {categorie}{" "}
            </span>
            ,
            <span className="cursor-pointer hover:text-black  transition-all duration-300 ease-in-out">
              {cell}
            </span>
          </div>
          <p className="truncate w-[235px] hover:text-pink-700 cursor-pointer transition-all duration-300 ease-in-out">
            {" "}
            {name}{" "}
          </p>
          <div>
            <p>{price_after}</p>
            <p>{price_before}</p>
          </div>
        </motion.div>
        {hover && id == ident && (
          <div className={` w-full flex flex-row justify-center mb-1.5 `}>
            <AnimatePresence mode="wait">
              <motion.button
                layout
                initial={{
                  transform: "translateY(-10px)",
                  backgroundColor: "#f3f4f6",
                  opacity: 0,
                }}
                animate={{
                  backgroundColor: "#f3f4f6",
                  color: "black",
                  transform: "translateY(0px)",
                  opacity: 1,
                }}
                exit={{ transform: "translateY(-10px)", opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                whileHover={{
                  backgroundColor: "#000",
                  color: "white",
                  cursor: "pointer",
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }}
                type="button"
                className="rounded-[4px] px-3.5 py-2.5 w-full text-[14px]"
              >
                Add To Cart
              </motion.button>
            </AnimatePresence>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default DivImages;
