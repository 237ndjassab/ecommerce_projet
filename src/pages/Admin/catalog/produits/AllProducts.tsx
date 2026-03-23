import React, { useEffect } from "react";
import { Link } from "react-router";
import { FaAngleRight } from "react-icons/fa";
import { MdDelete, MdSearch } from "react-icons/md";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import useAppSelector from "../../../../hooks/useAppSelector";
import { deleteProduct, getAllProduct } from "../../../../store/product/actions";
import { FiEdit3 } from "react-icons/fi";
import { toast } from "react-toastify";

const AllProducts: React.FC = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product);
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const handleDelete = async (id: number) => {
      const response = await dispatch(deleteProduct(id));
  
      if (response.meta.requestStatus === "fulfilled") {
        toast.success("Categorie supprimée avec succès.");
      }
  
      if (response.meta.requestStatus === "rejected") {
        toast.error("Echec de suppression de la categorie.");
      }
    };

  return (
    <div className="w-full min-h-screen px-6 py-4 ">
      <div className="w-full flex flex-col mb-2">
        <div className="w-full flex flex-row justify-start items-center bg-gray-100/50 py-3 ">
          <ul className="flex flex-row gap-3 text-[14px] ">
            <li className="text-gray-500 cursor-pointer">
              <Link to={"/Admin"}>Admin</Link>
              <FaAngleRight className="inline-block mx-2" />
            </li>
            <li className="text-gray-500 cursor-pointer">
              <Link to={"/admin/allproducts"}>AllProducts</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-between items-center mb-6 mt-2">
          <h1 className="font-semibold text-3xl text-[#1a1a2b]">
            All Products
          </h1>
          <Link
            to="/admin/productList"
            type="submit"
            className=" bg-[#fa3253] hover:bg-[#fa173d] transition-all duration-300 ease-in-out text-white rounded-md cursor-pointer px-2.5 py-1.5  hover:shadow-md text-base flex flex-row justify-center items-center"
          >
            New Products
          </Link>
        </div>
        <div className="w-full flex flex-col gap-2 py-5 border-[1px] border-gray-100 shadow-md rounded-xs bg-white hover:shadow-md transition-all duration-300 ease-in-out">
          <div className="flex flex-row items-center gap-2 px-3 w-full">
            <div className="w-[100%] flex cursor-pointer items-center gap-2 py-2 px-4 border-[1px] border-gray-300 bg-gray-100 rounded-md hover:bg-gray-200 hover:shadow-md transition-all duration-300 ease-in-out">
              <div>
                <MdSearch className="text-xl text-gray-400" />
              </div>
              <form action="#" className="w-[100%]">
                <input
                  type="text"
                  placeholder="Recherche ..."
                  className="placeholder:text-gray-400 outline-0 px-2.5 w-full"
                />
              </form>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 px-3 shadow-md rounded-xs bg-white">
            <div className="w-full flex flex-row justify-between border-y-[1px] border-y-gray-300">
              <div className="w-[3%] py-3 px-2">
                <input type="checkbox" className="border-gray-100" />
              </div>
              <div className="w-[15%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Image</p>
              </div>
              <div className="w-[20%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Nom</p>
              </div>
              <div className="w-[10%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Prix</p>
              </div>
              <div className="w-[9%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Stock</p>
              </div>
              <div className="w-[15%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Catégorie</p>
              </div>
              <div className="w-[10%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Statut</p>
              </div>
              <div className="w-[10%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Créé le</p>
              </div>
              <div className="w-[10%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Actions</p>
              </div>
            </div>
            {product.items.map((produit, index) => (
              <div
                key={index}
                className="w-full flex flex-col gap-2 px-3 shadow-md rounded-xs bg-white"
              >
                <div className="w-full flex flex-row justify-between border-y-[1px] border-y-gray-300 items-center">
                  <div className="w-[3%] py-3 px-2">
                    <input type="checkbox" className="border-gray-100" />
                  </div>
                  <div className="w-[15%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                    <img
                      src={produit.images.image}
                      className="w-[50px]"
                      alt={produit.images.image}
                    />
                  </div>
                  <div className="w-[20%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                    <p className="text-gray-600 font-medium">{produit.name}</p>
                  </div>
                  <div className="w-[10%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                    <p className="text-gray-600 font-medium">{produit.price}</p>
                  </div>
                  <div className="w-[9%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                    <p className="text-gray-600 font-medium">
                      {produit.quantity}
                    </p>
                  </div>
                  <div className="w-[15%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                    <p className="text-gray-600 font-medium">
                      {produit.category.name}
                    </p>
                  </div>
                  <div className="w-[10%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                    {produit.quantity == 0 ? (
                      <p className="text-red-600 font-medium text-[12px] bg-red-300 rounded-md p-0.5 w-fit">
                        Out of Stock{" "}
                      </p>
                    ) : (
                      <p className="text-green-600 font-medium text-[12px] bg-green-300 rounded-md p-0.5 w-fit">
                        Available
                      </p>
                    )}
                  </div>
                  <div className="w-[10%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                    <p className="text-gray-600 font-medium text-[12px]">{produit.createdAt as string}</p>
                  </div>
                  {/* <div className="w-[10%] py-3 px-2 transition-all duration-300 ease-in-out  flex flex-row gap-3">
                              <button onClick={()=>handleDelete(category.id)} className="text-red-500 mr-4 hover:text-red-600 text-2xl"><MdDelete /></button>
                              <button onClick={()=>handleUpdate(category.id)} className="text-green-500 hover:text-green-600 text-2xl"><FiEdit3 /></button>
                            </div> */}
                  <div className="w-[10%] py-3 px-2 transition-all duration-300 ease-in-out  flex flex-row justify-center items-center gap-1">
                    <button
                      onClick={() => handleDelete(produit.id)}
                      className="text-red-500 mr-4 hover:text-red-600 text-2xl"
                    >
                      <MdDelete />
                    </button>
                    <button
                      onClick={() => null}
                      className="text-green-500 hover:text-green-600 text-2xl"
                    >
                      <FiEdit3 />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
