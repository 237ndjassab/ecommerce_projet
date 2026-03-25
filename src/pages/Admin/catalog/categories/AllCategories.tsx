import  { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaAngleRight } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import {
  deleteCategory,
  getPaginateCategorieAction,
} from "../../../../store/category/actions";
import useAppSelector from "../../../../hooks/useAppSelector";
import { MdDelete } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { toast } from "react-toastify";
import DebouncedInput from "../../../../components/common/DebouncedInput";
import Pagination from "../../../../components/common/Pagination";

const AllCategories = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category);
  const [search, setSeach] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getPaginateCategorieAction({ search, limit, page }));
  }, [dispatch, search, limit, page]);

  const handleDelete = async (id: number) => {
    const response = await dispatch(deleteCategory(id));

    if (response.meta.requestStatus === "fulfilled") {
      toast.success("Categorie supprimée avec succès.");
    }

    if (response.meta.requestStatus === "rejected") {
      toast.error("Echec de suppression de la categorie.");
    }
  };

  const handleUpdate = async (id: number) => {
    navigate("/admin/updatecategory", { state: id });
  };

  console.log("search", search);

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
              <Link to={"/admin/allcategory"}>Allcategories</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-between items-center mb-6 mt-2">
          <h1 className="font-semibold text-3xl text-[#1a1a2b]">
            All Category
          </h1>
          <Link
            to="/admin/addcategory"
            type="submit"
            className=" bg-[#fa3253] hover:bg-[#fa173d] transition-all duration-300 ease-in-out text-white rounded-md cursor-pointer px-2.5 py-1.5  hover:shadow-md text-base flex flex-row justify-center items-center"
          >
            New Category
          </Link>
        </div>
        <div className="w-full flex flex-col gap-2 py-5 border-[1px] border-gray-100 shadow-md rounded-xs bg-white hover:shadow-md transition-all duration-300 ease-in-out">
          <div className="flex flex-row items-center gap-2 px-3 w-full">
            <div className="w-[100%] flex cursor-pointer items-center gap-2 py-2 px-4 border-[1px] border-gray-300 bg-gray-100 rounded-md hover:bg-gray-200 hover:shadow-md transition-all duration-300 ease-in-out">
              <div>
                <MdSearch className="text-xl text-gray-400" />
              </div>
              {/* <input
                  type="text"
                  placeholder="Recherche ..."
                  className="placeholder:text-gray-400 outline-0 px-2.5 w-full"
                  onChange={(e) => {
                    setSeach(e.target.value)
                    dispatch(getPaginateCategorieAction({search}))
                  }}
                /> */}
              <DebouncedInput
                value={search}
                onChange={(value) => setSeach(value)}
              />
              <div>
                <select
                  onChange={(e) => {
                    setLimit(Number(e.target.value));
                  }}
                  name="filter"
                  id="filter"
                >
                  <option value="1" selected={1 == limit}>
                    1
                  </option>
                  <option value="2" selected={2 == limit}>
                    2
                  </option>
                  <option value="5" selected={5 == limit}>
                    5
                  </option>
                  <option value="10" selected={10 == limit}>
                    10
                  </option>
                </select>
              </div>
              
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 px-3 shadow-md rounded-xs bg-white">
            <div className="w-full flex flex-row justify-between gap-0 border-y-[1px] border-y-gray-300">
              <div className="w-[10%] py-3 px-2">
                <input type="checkbox" className="border-gray-100" />
              </div>
              <div className="w-[10%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Numero</p>
              </div>
              <div className="w-[25%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Nom</p>
              </div>
              <div className="w-[25%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Description</p>
              </div>
              <div className="w-[20%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Image</p>
              </div>
              <div className="w-[10%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Actions</p>
              </div>
            </div>
          </div>
          {categories.items.map((category, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-2 px-3 shadow-md rounded-xs bg-white"
            >
              <div className="w-full flex flex-row justify-between border-y-[1px] border-y-gray-300 items-center">
                <div className="w-[10%] py-3 px-2">
                  <input type="checkbox" className="border-gray-100" />
                </div>
                <div className="w-[10%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out items-center">
                  <p className="text-gray-600 font-medium">{category.id}</p>
                </div>
                <div className="w-[25%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out items-center">
                  <p className="text-gray-600 font-medium">{category.name}</p>
                </div>
                <div className="w-[25%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out items-center">
                  <p className="text-gray-600 font-medium">
                    {category.description}
                  </p>
                </div>
                <div className="w-[20%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                  <img
                    src={category.image}
                    className="w-[50px]"
                    alt={category.description}
                  />
                </div>
                <div className="w-[10%] py-3 px-2 transition-all duration-300 ease-in-out  flex flex-row gap-3">
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="text-red-500 mr-4 hover:text-red-600 text-2xl"
                  >
                    <MdDelete />
                  </button>
                  <button
                    onClick={() => handleUpdate(category.id)}
                    className="text-green-500 hover:text-green-600 text-2xl"
                  >
                    <FiEdit3 />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <Pagination
                currentPage={page}
                limit={categories.pagination.limit}
                totalItems={categories.pagination.totalItems}
                totalPages={categories.pagination.totalPage}
                setCurrentPage={(value) => setPage(value)}
                setPageSize={(value) => setLimit(value)}
              />
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
