import landing from "../../assets/images/landingrbg.png";
import { TbCategory } from "react-icons/tb";
import shoe1 from "../../assets/images/shoe1.jpg";
import shoe2 from "../../assets/images/shoe2.jpg";
import shoe3 from "../../assets/images/shoe3.jpg";
import shoe4 from "../../assets/images/shoe4.jpg";
import { useEffect } from "react";
import useAppDispatch from "../../hooks/useAppDispatch";
import { getAllCategory } from "../../store/category/actions";
import useAppSelector from "../../hooks/useAppSelector";
import { getAllProduct } from "../../store/product/actions";
import landing from "../../assets/images/landingrbg.png";
import { TbCategory } from "react-icons/tb";
import shoe1 from "../../assets/images/shoe1.jpg";
import shoe2 from "../../assets/images/shoe2.jpg";
import shoe3 from "../../assets/images/shoe3.jpg";
import shoe4 from "../../assets/images/shoe4.jpg";
import { useEffect } from "react";
import useAppDispatch from "../../hooks/useAppDispatch";
import { getAllCategory } from "../../store/category/actions";
import useAppSelector from "../../hooks/useAppSelector";
import { getAllProduct } from "../../store/product/actions";

const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product);
  const categories = useAppSelector((state) => state.category);

  console.log(categories.items);

  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getAllCategory());
  }, [dispatch]);

  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product);
  const categories = useAppSelector((state) => state.category);

  console.log(categories.items);

  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <>
      <section className="relative bg-[#fa3253]/20 py-30">
        <div className="flex flex-col ml-20">
          <div className="flex">
            <h1 className="text-8xl text-[#fa3253] font-medium">
              <b className="text-[#fff]">E</b>ntry
            </h1>
            <h1 className="text-8xl tracking-tighter text-[#fa3253] font-medium">
              <b className="text-[#fff]">S</b>hop
            </h1>
          </div>
          <p className="font-medium mt-6 text-2xl pl-2">
            Quality at your service
          </p>
        </div>
        <img src={landing} className="absolute bottom-0 right-0" alt="" />
      </section>
      <section className="flex">
        <div className="w-1/4 h-1/2 p-2 relative">
          <div className="border-[#000]/20 ml-8 rounded-xl shadow-md w-[90%] bg-[#1a1a2b]/10 absolute -top-14">
            <div className=" border-b bg-white border-[#000]/10 rounded-t-sm p-4 ">
              <span className="flex items-center gap-2">
                <TbCategory />
                <p className="">All Categories</p>
              </span>
            </div>
            <div className=" rounded-b-2xl">
              <ul className="rounded-b-2xl pb-2 text-sm">
                {categories.items.map((item, index) => (
                  <li
                    key={index.toString()}
                    className="px-6 py-3 border-b border-[#000]/10 cursor-pointer hover:bg-[#fa3253]/10 rounded-md"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="p-8 grid grid-cols-3 w-3/4 gap-4">
          <div className="bg-white border border-[#000]/10 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img className="w-full" src={shoe1} alt="Product Image" />
            <div className="p-4">
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                Chaussure
              </span>
              <h2 className="mt-2 text-lg font-semibold">Basket</h2>
              <p className="mt-1 text-lg font-bold">$49.99</p>
              <button className="mt-4 w-full bg-[#fa3253] text-white py-2 px-4 rounded-lg hover:bg-[#fa183e] transition-colors duration-300">
                Order
              </button>
            </div>
          </div>
          <div className="bg-white border border-[#000]/10 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img className="w-full" src={shoe2} alt="Product Image" />
            <div className="p-4">
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                Chaussure
              </span>
              <h2 className="mt-2 text-lg font-semibold">Basket</h2>
              <p className="mt-1 text-lg font-bold">$49.99</p>
              <button className="mt-4 w-full bg-[#fa3253] text-white py-2 px-4 rounded-lg hover:bg-[#fa183e] transition-colors duration-300">
                Order
              </button>
            </div>
          </div>
          <div className="bg-white border border-[#000]/10 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img className="w-full" src={shoe3} alt="Product Image" />
            <div className="p-4">
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                Chaussure
              </span>
              <h2 className="mt-2 text-lg font-semibold">Basket</h2>
              <p className="mt-1 text-lg font-bold">$49.99</p>
              <button className="mt-4 w-full bg-[#fa3253] text-white py-2 px-4 rounded-lg hover:bg-[#fa183e] transition-colors duration-300">
                Order
              </button>
            </div>
          </div>
          <div className="bg-white border border-[#000]/10 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img className="w-full" src={shoe4} alt="Product Image" />
            <div className="p-4">
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                Chaussure
              </span>
              <h2 className="mt-2 text-lg font-semibold">Basket</h2>
              <p className="mt-1 text-lg font-bold">$49.99</p>
              <button className="mt-4 w-full bg-[#fa3253] text-white py-2 px-4 rounded-lg hover:bg-[#fa183e] transition-colors duration-300">
                Order
              </button>
            </div>
          </div>
          {products.items.map((item, index) => (
            <div
              key={index.toString()}
              className="bg-white min-w-[200px] max-h-[400px] border border-[#000]/10 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                className="w-full h-[200px] "
                src={item.images.image}
                alt="Product Image"
              />
              <div className="p-4 h-[full] flex flex-col">
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  {item.category?.name}
                </span>
                <h2 className="mt-2 text-lg font-semibold">{item.name}</h2>
                <p className="mt-1 text-lg font-bold">${item.price}</p>
                <button className="mt-4 w-full bg-[#fa3253] text-white py-2 px-4 rounded-lg hover:bg-[#fa183e] transition-colors duration-300">
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
