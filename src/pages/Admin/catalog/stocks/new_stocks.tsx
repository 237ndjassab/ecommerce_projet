import  { useEffect } from "react";
import { useNavigate } from "react-router";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import * as Yup from "yup";
import { toast } from "react-toastify";
import {
  FieldArray,
  Form,
  Formik,
  type FormikHelpers,
} from "formik";
import InputField from "../../../Main/Produits/components/FooterProductDescribe/InputField";
import type { EnterProductDto } from "../../../../types/stock";
import { productEnterAction } from "../../../../store/stocks/action";
import useAppSelector from "../../../../hooks/useAppSelector";
import { getAllProduct } from "../../../../store/product/actions";

const New_stocks = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(getAllProduct());
    }, [dispatch]);
  const product = useAppSelector((state) => state.product);

  const initialValues: EnterProductDto = {
    code: "",
    enterAt: "",
    lines: [
      {
        productId: 0,
        quantity: 0,
        price: 0,
      },
    ],
  };
  const validationSchema = Yup.object({
    code: Yup.string()
      .matches(
        /^ENT-(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{2}\|\d+$/,
        "Le code doit respecter le format ENT-JJ-MM-AA|N"
      )
      .required("Le code est obligatoire"),
    enterAt: Yup.string()
      .matches(
        /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
        "La date doit être au format YYYY-MM-DD"
      )
      .required("La date est obligatoire"),
    lines: Yup.array()
      .of(
        Yup.object({
          productId: Yup.number()
            .required("Le produit est obligatoire")
            .min(1, "Le produit est obligatoire"),

          quantity: Yup.number()
            .required("La quantité est obligatoire")
            .min(1, "La quantité doit être au moins 1"),

          price: Yup.number()
            .required("Le prix est obligatoire")
            .min(1, "Le prix doit être au moins 1"),
        })
      )
      .min(1, "Vous devez ajouter au moins une ligne"),
  });
  const handleSubmit = async (
    values: EnterProductDto,
    formikHelpers: FormikHelpers<EnterProductDto>
  ) => {
    formikHelpers.setSubmitting(true);
    const response = await dispatch(productEnterAction(values));

    if (response.meta.requestStatus === "fulfilled") {
      toast.success("nouveau stock ajouté avec succès.");
      formikHelpers.resetForm();
      navigate("/admin/allproducts");
    }

    if (response.meta.requestStatus === "rejected") {
      toast.error("Echec lors de l'ajout du stock.");
    }

    formikHelpers.setSubmitting(false);
  };
  return (
    <div className="w-full min-h-screen px-6 py-4 ">
      <div className="w-full flex flex-col mb-2">
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
                    New Stocks
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
                  <div className="w-[100%] cursor-pointer flex flex-col gap-3.5 items-center p-5 border-[1px] border-gray-200 shadow-md rounded-xs bg-white hover:shadow-md transition-all duration-300 ease-in-out">
                    <div className="w-full flex flex-row items-center justify-between">
                      <p className="text-[#1a1a2b] text-[16px] font-medium">
                        Crucial informations
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label
                        htmlFor="image"
                        className="font-medium text-gray-400"
                      >
                        Unique Code
                      </label>
                      <InputField
                        name="code"
                        className="border border-gray-600 text-gray-600 p-2 rounded w-full outline-0 hover:shadow "
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label
                        htmlFor="image"
                        className="font-medium text-gray-400"
                      >
                        Date d'entrée
                      </label>
                      <InputField
                        name="enterAt"
                        className="border border-gray-600 text-gray-600 p-2 rounded w-full outline-0 hover:shadow "
                      />
                    </div>

                    <FieldArray name="lines">
                      {({ push, remove, form }) => (
                        <div className="w-full flex flex-col gap-4">
                          {form.values.lines &&
                            form.values.lines.length > 0 &&
                            form.values.lines.map((_: unknown, index: number) => (
                              <div
                                key={index}
                                className="flex flex-col gap-3 w-full"
                              >
                                <div className="flex flex-col gap-2 w-full">
                                  <label
                                    htmlFor="productId"
                                    className="font-medium text-gray-400"
                                  >
                                    product
                                  </label>
                                  <select
                                    name={`lines.${index}.productId`}
                                    id="productId"
                                    onChange={formik.handleChange}
                                    className="border border-gray-600 text-gray-600 bg-gray-200 p-2 rounded w-full outline-0 hover:shadow "
                                  >
                                    <option value="">
                                      ~~ Sélectionner une produit ~~
                                    </option>
                                    {product.items.map((item, index) => (
                                      <option key={index} value={item.id}>
                                        {item.name}
                                      </option>
                                    ))}
                                  </select>
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
                                      name={`lines.${index}.price`}
                                      placeholder="Prix"
                                      id="price"
                                      className="border border-gray-600 text-gray-600 bg-gray-200 p-2 rounded outline-0 hover:shadow "
                                    />
                                  </div>
                                  <div className="flex flex-col gap-2 w-1/3">
                                    <label
                                      htmlFor="quantity"
                                      className="font-medium text-gray-400"
                                    >
                                      Quantity
                                    </label>
                                    <InputField
                                      name={`lines.${index}.quantity`}
                                      placeholder="Quantité"
                                      id="quantity"
                                      className="border border-gray-600 text-gray-600 bg-gray-200 p-2 rounded outline-0 hover:shadow "
                                    />
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                  className=" bg-[#fa3253] w-fit hover:bg-[#fa173d] transition-all duration-300 ease-in-out text-white rounded-md cursor-pointer px-2.5 py-1.5  hover:shadow-md text-base flex flex-row justify-center items-center"
                                >
                                  Supprimer
                                </button>
                              </div>
                            ))}
                          <button
                            type="button"
                            className=" bg-[#fa3253] hover:bg-[#fa173d] transition-all duration-300 ease-in-out text-white rounded-md cursor-pointer px-2.5 py-1.5  hover:shadow-md text-base flex flex-row justify-center items-center"
                            onClick={() =>
                              push({ productId: "", quantity: 0, price: 0 })
                            }
                          >
                            + Ajouter un produit
                          </button>
                        </div>
                      )}
                    </FieldArray>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default New_stocks;
