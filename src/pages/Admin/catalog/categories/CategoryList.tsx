import React, { useState } from "react";
import NavProducts from "../../../Main/Produits/components/NavProducts";
import { Formik, Form, type FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "../../../Main/Produits/components/FooterProductDescribe/InputField";
import TextareaField from "../../../Main/Produits/components/FooterProductDescribe/TextareaField";
import type { CategoryDto } from "../../../../types/category";
import { createCategory } from "../../../../store/category/actions";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CategoryList = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [preview, setPreview] = useState<string | null>(null);
  const initialValues: CategoryDto = {
    name: "",
    image: "",
    description: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("nom requis"),
    description: Yup.string(),
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
  });
  const handleSubmit = async (
      values: CategoryDto,
      formikHelpers: FormikHelpers<CategoryDto>
    ) => {
      formikHelpers.setSubmitting(true);
      const response = await dispatch(createCategory(values));
  
      if (response.meta.requestStatus === "fulfilled") {
        toast.success("Categorie créée avec succès.");
        formikHelpers.resetForm();
        navigate("/admin/allcategory");
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
            souslien="Allcategories"
            product="Category List"
          />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => {
            return (
              <Form autoComplete="off" className="flex flex-col mb-2 w-full ">
                <div className="flex flex-row justify-between items-center mb-6">
                  <h1 className="font-semibold text-3xl text-[#1a1a2b]">
                    Edit Category
                  </h1>
                  <button type="submit" disabled={formik.isSubmitting} className=" bg-yellow-600 hover:bg-yellow-400 transition-all duration-300 ease-in-out border-[1px] border-gray-200 rounded-md cursor-pointer px-2.5 py-1.5  hover:shadow-md text-base flex flex-row justify-center items-center">
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
                        Slug
                      </label>
                      <input
                        type="file"
                        id="image"
                        onChange={(e) => {
                          const file = e.currentTarget.files?.[0] || null;
                          formik.setFieldValue("image", file);

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

export default CategoryList;
