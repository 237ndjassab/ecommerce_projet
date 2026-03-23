import { Form, Formik } from "formik";
import * as Yup from "yup";
import  { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaStar } from "react-icons/fa";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import CheckboxField from "./CheckboxField";

const FooterProducts = () => {
  const [state, setState] = useState<string>("description");
  const [appear, setAppear] = useState<boolean>(false);
  const star = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];
  const [hovered, setHovered] = useState<number>(0); // étoile survolée
  const [selected, setSelected] = useState<number>(0); // étoile cliquée
  return (
    <div className="w-full bg-gray-100/50 px-8 pt-20 pb-22">
      <ul className="w-full flex flex-row justify-center gap-8">
        <div
          onClick={() => {
            setState("description");
            setAppear(false);
          }}
        >
          <li className="text-2xl font-normal cursor-pointer">
            Product description
          </li>
          <motion.div
            className={`mt-7 h-0.5 ${
              state == "description" ? "w-full" : "w-0"
            } rounded-md bg-gray-900`}
            animate={{
              width: state == "description" ? "100%" : "0%",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
        <div
          onClick={() => {
            setState("shipping");
            setAppear(false);
          }}
        >
          <li className="text-2xl font-normal cursor-pointer ">
            Shipping & returns
          </li>
          <motion.div
            className={`mt-7 h-0.5 ${
              state == "shipping" ? "w-full" : "w-0"
            } rounded-md bg-gray-900`}
            animate={{
              width: state == "shipping" ? "100%" : "0%",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
        <div
          onClick={() => {
            setState("review");
            setAppear(false);
          }}
        >
          <li className="text-2xl font-normal cursor-pointer ">Review</li>
          <motion.div
            className={`mt-7 h-0.5 ${
              state == "review" ? "w-full" : "w-0"
            } rounded-md bg-gray-900`}
            animate={{
              width: state == "review" ? "100%" : "0%",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </ul>
      <div className="w-full bg-white">
        <AnimatePresence mode="wait">
          {state == "description" && (
            <motion.div
              className="py-12 px-22"
              initial={{ transform: "translateY(50px)", opacity: 0 }}
              animate={{ transform: "translateY(0px)", opacity: 1 }}
              exit={{ transform: "translateY(50px)", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p className="text-gray-600 font-normal text-[15px] leading-8">
                Creator of the first Polo shirt in 1933, Lacoste has established
                itself as the only casual wear brand combining French elegance
                and freedom of movement, inherited from its sporting origins.
                The Crocodile brand is one of the most famous brands in the
                world and has established itself as the reference of Polo,
                constantly reinventing it combining elegance with French and
                freedom of movement, inherited from its sporting origins. The
                Crocodile brand in several forms, materials and styles. Present
                in 120 countries, it offers a complete universe: Clothing,
                leather goods, perfumes, shoes, glasses, linen, watches and
                underwear, the elaboration of which meets its high demands for
                quality and responsibility.
              </p>
              <p className="text-gray-600 font-normal text-[15px] leading-8">
                The timeless Lacoste tee gets an update in a super-comfortable
                mid-weight fabric. A versatile essential that goes with
                everything, finished with an iconic crocodile.
              </p>
              <p className="text-gray-600 font-normal text-[15px] leading-8">
                Weight: 180g/m² <br />
                Crew neck with hood <br />
                Classic, comfortable fit
                <br />
                Embroidered crocodile on chest
                <br />
                Cotton (100%)
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {state == "shipping" && (
            <motion.div
              className="py-12 px-22 flex flex-col gap-10"
              initial={{ transform: "translateY(50px)", opacity: 0 }}
              animate={{ transform: "translateY(0px)", opacity: 1 }}
              exit={{ transform: "translateY(50px)", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <h1 className="font-semibold text-2xl">Shipping and delivery</h1>
              <ol className=" flex flex-col gap-8">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row gap-1 font-normal text-2xl">
                    <span>1.</span>
                    <li>Scope of delivery</li>
                  </div>
                  <p className="text-gray-600 font-normal text-[15px] leading-8">
                    We deliver world-wide. Particularly within the European
                    Union, delivery is fast and straightforward. Please take
                    note of the information regarding methods of payment,
                    delivery costs and delivery times for international orders.
                    For additional questions, please use our contact form.
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row gap-1 font-normal text-2xl">
                    <span>2.</span>
                    <li>Delivery time</li>
                  </div>
                  <p className="text-gray-600 font-normal text-[15px] leading-8">
                    Distributors deliver products: 3 days/week (except Sunday,
                    Tet and National Holiday) <br /> Retailers deliver products:
                    4 days/ week (except Tet and national holiday)
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row gap-1 font-normal text-2xl">
                    <span>3.</span>
                    <li>Shipping cost</li>
                  </div>
                  <p className="text-gray-600 font-normal text-[15px] leading-8">
                    Order minimum 10$ or more: free delivery.
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row gap-1 font-normal text-2xl">
                    <span>4.</span>
                    <li>The delivery charges cost</li>
                  </div>
                  <p className="text-gray-600 font-normal text-[15px] leading-8">
                    The delivery charges depend on the number and weight of the
                    packages as well as the country to which they are to be
                    sent. The details of weight- and country-dependent delivery
                    costs are listed in a table on our website.
                  </p>
                </div>
              </ol>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {state == "review" && (
            <motion.div
              className="py-12 px-22"
              initial={{ transform: "translateY(50px)", opacity: 0 }}
              animate={{ transform: "translateY(0px)", opacity: 1 }}
              exit={{ transform: "translateY(50px)", opacity: 0 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
            >
              <div className="w-full flex flex-col gap-10">
                <div className="flex flex-row w-full">
                  <div className="flex flex-col items-center w-[20%] justify-start gap-1.5">
                    <div className="font-semibold leading-23 flex flex-row items-start h-fit text-[80px]">
                      <span>0</span>
                    </div>
                    <div className="flex flex-row gap-1.5">
                      <FaStar className="inline-block text-yellow-400" />
                      <FaStar className="inline-block text-yellow-400" />
                      <FaStar className="inline-block text-yellow-400" />
                      <FaStar className="inline-block text-yellow-400" />
                      <FaStar className="inline-block text-yellow-400" />
                    </div>
                    <div className="mt-1 text-gray-600">(0 Ratings)</div>
                  </div>
                  <div className="w-[40%] flex flex-col gap-2 px-8">
                    <div className="flex flex-row gap-x-1 justify-center items-center">
                      <div className=" flex justify-center items-center">5</div>
                      <div className=" flex justify-center items-center">
                        <FaStar className="inline-block text-yellow-400" />
                      </div>
                      <div className="w-[300px] h-2 rounded-full bg-gray-300 flex justify-center items-center"></div>
                      <div className=" flex flex-row justify-center items-center">
                        0
                      </div>
                    </div>
                    <div className="flex flex-row gap-x-1 justify-center items-center">
                      <div className="flex justify-center items-center">4</div>
                      <div className="flex justify-center items-center">
                        <FaStar className="inline-block text-yellow-400" />
                      </div>
                      <div className="w-[300px] h-2 rounded-full bg-gray-300 flex justify-center items-center"></div>
                      <div className="flex justify-center items-center">0</div>
                    </div>
                    <div className="flex flex-row gap-x-1 justify-center items-center">
                      <div className="flex justify-center items-center">3</div>
                      <div className="flex justify-center items-center">
                        <FaStar className="inline-block text-yellow-400" />
                      </div>
                      <div className="w-[300px] h-2 rounded-full bg-gray-300 flex justify-center items-center"></div>
                      <div className="flex justify-center items-center">0</div>
                    </div>
                    <div className="flex flex-row gap-x-1 justify-center items-center">
                      <div className="flex justify-center items-center">2</div>
                      <div className="flex justify-center items-center">
                        <FaStar className="inline-block text-yellow-400" />
                      </div>
                      <div className="w-[300px] h-2 rounded-full bg-gray-300 flex justify-center items-center"></div>
                      <div className="flex justify-center items-center">0</div>
                    </div>
                    <div className="flex flex-row gap-x-1 justify-center items-center">
                      <div className="flex justify-center items-center">1</div>
                      <div className="flex justify-center items-center">
                        <FaStar className="inline-block text-yellow-400" />
                      </div>
                      <div className="w-[300px] h-2 rounded-full bg-gray-300 flex justify-center items-center"></div>
                      <div className="flex justify-center items-center">0</div>
                    </div>
                  </div>
                  <div className=" w-[40%] flex justify-end items-center">
                    <button
                      onClick={() => setAppear(!appear)}
                      className="px-5 py-2 border border-black rounded-[4px] text-[14px] font-normal hover:border-pink-600 hover:text-pink-600 transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      {appear == true ? "cancel a review" : "write a review"}
                    </button>
                  </div>
                </div>
                {/* La partie qui sera visible quand on va cliquer sur le bouton review */}
                <div>
                  {appear == false && state == "review" && (
                    <div className="font-medium text-2xl flex flex-row pl-7 gap-2.5">
                      <span>0</span>
                      <span>Comments</span>
                    </div>
                  )}
                  {appear == true && state == "review" && (
                    <div className="pl-7 flex flex-col gap-5">
                      <div className="flex flex-row items-center gap-8">
                        <h1 className="font-normal text-3xl">
                          Write a review :
                        </h1>
                        <div className="flex flex-row gap-1.5">
                          {star.map((stars, index) => {
                            const pos = index + 1;
                            return (
                              <div
                                key={index}
                                onMouseEnter={() => setHovered(pos)}
                                onMouseLeave={() => setHovered(0)}
                                onClick={() => setSelected(pos)}
                                className={`inline-block text-3xl cursor-pointer ${
                                  pos <= (hovered || selected)
                                    ? "text-yellow-300"
                                    : "text-gray-300"
                                }`}
                              >
                                {stars}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-600 font-semibold">Review</p>
                      </div>
                      <div>
                        <Formik
                          initialValues={{
                            commantaire: "",
                            name: "",
                            email: "",
                            conditions: false,
                          }}
                          onSubmit={(values) => console.log(values)}
                          validationSchema={Yup.object({
                            commantaire: Yup.string(),
                            name: Yup.string().required("Nom obligatoire"),
                            email: Yup.string()
                              .email()
                              .required("Email obligatoire"),
                            conditions: Yup.boolean() // 1. Spécifie que le champ est un booléen
                              .oneOf(
                                [true],
                                "Vous devez accepter les conditions d'utilisation pour continuer"
                              ) // 2. N'accepte que la valeur 'true'
                              .required(
                                "L'acceptation des conditions est obligatoire"
                              ), // 3. Rend le champ requis
                          })}
                        >
                          <Form className="w-full">
                            <div className="w-full flex flex-col gap-10">
                              <div className="w-full">
                                <TextareaField
                                  rows={5}
                                  name="commantaire"
                                  placeholder="Write your comment here"
                                  className="w-full border border-gray-300 rounded-[2px] placeholder:text-gray-600 placeholder:text-[13px] py-3.5 px-2.5 caret-gray-600 outline-0"
                                />
                              </div>
                              <div className="w-full flex flex-row gap-5">
                                <div className="w-full">
                                  <InputField
                                    name="name"
                                    placeholder="You name public"
                                    className="w-full border border-gray-300 rounded-[2px] placeholder:text-gray-600 placeholder:text-[13px] py-3.5 px-2.5 caret-gray-600 outline-0"
                                  />
                                </div>
                                <div className="w-full">
                                  <InputField
                                    name="email"
                                    placeholder="You email private"
                                    className="w-full border border-gray-300 rounded-[2px] placeholder:text-gray-600 placeholder:text-[13px] py-3.5 px-2.5 caret-gray-600 outline-0"
                                  />
                                </div>
                              </div>
                              <div className="w-full ">
                                <CheckboxField
                                  label="Save my name email and website in this browser for the next time i comment."
                                  name="conditions"
                                  className="flex flex-row gap-2 text-gray-600"
                                />
                              </div>
                              <div>
                                <button
                                  type="submit"
                                  className="bg-black text-white text-[13px] px-6 py-3 rounded-[3px] hover:bg-pink-600 transition-all duration-300 ease-in-out cursor-pointer"
                                >
                                  Submit reviews
                                </button>
                              </div>
                            </div>
                          </Form>
                        </Formik>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FooterProducts;
