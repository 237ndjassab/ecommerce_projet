import React, { useEffect, useState } from "react";
import NavProducts from "../../../Main/Produits/components/NavProducts";
import { useNavigate } from "react-router";
import { Formik, Form, type FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "../../../Main/Produits/components/FooterProductDescribe/InputField";
import TextareaField from "../../../Main/Produits/components/FooterProductDescribe/TextareaField";
import { getAllCategory } from "../../../../store/category/actions";
import useAppSelector from "../../../../hooks/useAppSelector";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import type { ProductDto } from "../../../../types/product";
import { createProduct } from "../../../../store/product/actions";
import { toast } from "react-toastify";

const ProductsList = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const initialValues: ProductDto = {
    name: "",
    images: { image: "", gallery: [] },
    price: 0,
    quantity: 0,
    categoryId: 0,
    description: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("nom requis"),
    description: Yup.string(),
    price: Yup.number().required(),
    categoryId: Yup.number().required(),
    images: Yup.object().shape({
      image: Yup.mixed<File>()
        .required("Image requise")
        .test(
          "fileType",
          "Type du fichier non supporté (jpg, jpeg, png, webp)",
          (value) => {
            if (value) {
              const supportedFormats = [
                "image/jpg",
                "image/jpeg",
                "image/png",
                "image/webp",
              ];
              return supportedFormats.includes(value.type);
            } else {
              return false;
            }
          }
        )
        .test("fileSize", "Fichier trop grand", (value) => {
          const maxSizeInBytes = 2 * 1024 * 1024;
          if (value) {
            return value.size <= maxSizeInBytes;
          } else {
            return false;
          }
        }),
      gallery: Yup.array()
        .of(
          Yup.mixed<File>().test(
            "fileType",
            "Type du fichier non supporté (jpg, jpeg, png, webp)",
            (value) => {
              if (!value) return false;
              return [
                "image/jpeg",
                "image/jpg",
                "image/png",
                "image/webp",
              ].includes(value.type);
            }
          )
        )
        .min(1, "Ajoute au moins une image à la galerie"),
    }),
  });
  const handleSubmit = async (
    values: ProductDto,
    formikHelpers: FormikHelpers<ProductDto>
  ) => {
    formikHelpers.setSubmitting(true);
    const response = await dispatch(createProduct(values));

    if (response.meta.requestStatus === "fulfilled") {
      toast.success("Categorie créée avec succès.");
      formikHelpers.resetForm();
      navigate("/admin/allproducts");
    }

    if (response.meta.requestStatus === "rejected") {
      toast.error("Echec de creation de la categorie.");
    }

    formikHelpers.setSubmitting(false);
  };
  return (
    <div className="w-full min-h-screen px-6 py-4 ">
      <div className="w-full flex flex-col mb-2">
        <div className="w-full flex flex-row justify-start">
          <NavProducts
            lien="Admin"
            souslien="Allproducts"
            product="Product List"
          />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => {
            console.log(formik.errors);
            console.log("formik.values: ", formik.values);
            return (
              <Form autoComplete="off" className="flex flex-col mb-2 w-full ">
                <div className="flex flex-row justify-between items-center mb-6">
                  <h1 className="font-semibold text-3xl text-[#1a1a2b]">
                    Edit Product
                  </h1>
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className=" bg-[#fa3253] hover:bg-[#fa173d] transition-all duration-300 ease-in-out text-white rounded-md cursor-pointer px-2.5 py-1.5  hover:shadow-md text-base flex flex-row justify-center items-center"
                  >
                    {formik.isSubmitting ? "creation..." : " créer"}
                  </button>
                </div>
                <div className="w-full flex flex-row gap-5 p-5 border-[1px] border-gray-100 shadow-md rounded-xs bg-white hover:shadow-md transition-all duration-300 ease-in-out">
                  <div className="w-[60%] cursor-pointer flex flex-col gap-3.5 items-center p-5 border-[1px] border-gray-200 shadow-md rounded-xs bg-white hover:shadow-md transition-all duration-300 ease-in-out">
                    <div className="w-full flex flex-row items-center justify-between">
                      <p className="text-[#1a1a2b] text-[16px] font-medium">
                        Basic information
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label
                        htmlFor="image"
                        className="font-medium text-gray-400"
                      >
                        Name
                      </label>
                      <InputField
                        name="name"
                        className="border border-gray-600 text-gray-600 p-2 rounded w-full outline-0 hover:shadow "
                      />
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <label
                        htmlFor="image"
                        className="font-medium text-gray-400"
                      >
                        category
                      </label>
                      <select
                        name="categoryId"
                        id=""
                        onChange={(e) => {
                          const value = e.currentTarget.value
                          if(value){
                            formik.setFieldValue(
                              "categoryId",
                              parseInt(value)
                            );
                          }
                        }}
                        className="border border-gray-600 text-gray-600 bg-gray-200 p-2 rounded w-full outline-0 hover:shadow "
                      >
                        <option value="">
                          ~~ Sélectionner une catégorie ~~
                        </option>
                        {categories.items.map((item, index) => (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <label
                        htmlFor="image"
                        className="font-medium text-gray-400"
                      >
                        Slug
                      </label>
                      {/* input image */}
                      <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={(e) => {
                          const file = e.currentTarget.files?.[0] || null;
                          formik.setFieldValue("images.image", file);

                          // Générer le preview
                          if (file) {
                            const url = URL.createObjectURL(file);
                            setPreview(url);
                          } else {
                            setPreview(null);
                          }
                        }}
                        className="border border-gray-600 text-gray-600 bg-gray-200 p-2 rounded w-full outline-0 hover:shadow "
                      />

                      {/* input gallery */}
                      <input
                        type="file"
                        id="gallery"
                        name="gallery"
                        multiple
                        onChange={(e) => {
                          const files = e.currentTarget.files || null;
                          formik.setFieldValue(
                            "images.gallery",
                            Array.from(files || [])
                          );

                          // Générer le preview
                          // if (file) {
                          //   const url = URL.createObjectURL(file);
                          //   setPreview(url);
                          // } else {
                          //   setPreview(null);
                          // }
                        }}
                        className="border border-gray-600 text-gray-600 bg-gray-200 p-2 rounded w-full outline-0 hover:shadow "
                      />
                      <ErrorMessage
                        name="image"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label
                        htmlFor="image"
                        className="font-medium text-gray-400"
                      >
                        Description
                      </label>
                      <TextareaField
                        name="description"
                        rows={4}
                        className="border border-gray-600 text-gray-600 bg-gray-200 p-2 rounded w-full outline-0 hover:shadow "
                      />
                    </div>
                    <div className="flex flex-row gap-2 w-full">
                      <div className="flex flex-col gap-2 w-1/3">
                        <label
                          htmlFor="price"
                          className="font-medium text-gray-400"
                        >
                          Price
                        </label>
                        <InputField
                          name="price"
                          id="price"
                          className="border border-gray-600 text-gray-600 bg-gray-200 p-2 rounded outline-0 hover:shadow "
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-1/3">
                        <label
                          htmlFor="price"
                          className="font-medium text-[#fa3253]"
                        >
                          Quantity
                        </label>
                        <InputField
                          name="quantity"
                          disabled
                          id="quantity"
                          className="border border-red-300 text-white bg-[#fa3253] p-2 rounded outline-0 hover:shadow "
                        />
                      </div>
                      {/* <div className="flex flex-col gap-2 w-1/3">
                        <label
                          htmlFor="categoryID"
                          className="font-medium text-gray-400"
                        >
                          CategoryID
                        </label>
                        <InputField
                          name="categoryID"
                          id="categoryID"
                          className="border border-gray-600 text-gray-600 bg-gray-200 p-2 rounded outline-0 hover:shadow "
                        />
                      </div> */}
                    </div>
                  </div>
                  {preview && (
                    <div className="w-[40%] cursor-pointer flex flex-col gap-3.5 items-center p-5 border-[1px] border-gray-200 shadow-md rounded-xs bg-white hover:shadow-md transition-all duration-300 ease-in-out">
                      <p className="text-sm text-gray-700 mb-1">Aperçu :</p>
                      <img
                        src={preview}
                        alt="Prévisualisation"
                        className="w-70 h-70 object-cover rounded shadow"
                      />
                    </div>
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default ProductsList;
