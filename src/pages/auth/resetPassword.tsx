import { Formik, Form, type FormikHelpers } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router";
import reset from "../../assets/images/reset.png";
import Password from "../../components/ui/password";
import { useEffect } from "react";
import type { ResetPasswordDto } from "../../types/user";
import { toast } from "react-toastify";
import useAppDispatch from "../../hooks/useAppDispatch";
import { resetPasswordAction } from "../../store/auth/actions";
import { Formik, Form, type FormikHelpers } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router";
import reset from "../../assets/images/reset.png";
import Password from "../../components/ui/password";
import { useEffect } from "react";
import type { ResetPasswordDto } from "../../types/user";
import { toast } from "react-toastify";
import useAppDispatch from "../../hooks/useAppDispatch";
import { resetPasswordAction } from "../../store/auth/actions";

const ResetPassword = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state ? location.state.email : null;

  useEffect(() => {
    if (!email) {
      navigate("/forgotpwd");
    }
  }, [navigate, email]);
const ResetPassword = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state ? location.state.email : null;

  useEffect(() => {
    if (!email) {
      navigate("/forgotpwd");
    }
  }, [navigate, email]);

  const initialValues = {
    email: email,
    password: ""
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Minimum 8 caractères")
      .required("Mot de passe requis"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Les mots de passe ne correspondent pas")
      .required("Confirmation requise"),
  });

  const handleSubmit = async (
    values: ResetPasswordDto,
    formikHelpers: FormikHelpers<ResetPasswordDto>
  ) => {
    formikHelpers.setSubmitting(true);
    const response = await dispatch(resetPasswordAction(values));

    if (response.meta.requestStatus === "fulfilled") {
      navigate("/login");
      toast.success("Mot de passe modifié avec succès.");
    }

    if (response.meta.requestStatus === "rejected") {
      toast.error("Echec de modification de mot de passe.");
    }
    formikHelpers.setSubmitting(false);
  };

  return (
    <section className="h-dvh relative overflow-hidden flex justify-center bg-white items-center">
      <div className="flex z-10 bg-white rounded-lg shadow-lg w-[40%] h-[80%]">
        <div className="flex flex-col bg-[#1a1a2b]/5 rounded-l-lg w-full relative">
          <img
            src={reset}
            className="absolute w-[300px] -top-20 -left-35"
            alt=""
          />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => {
              return (
                <Form
                  autoComplete="off"
                  className="flex flex-col items-center justify-center w-full h-full"
                >
                  <div className="flex flex-col p-4 gap-2 w-[60%]">
                    <h2 className="font-semibold text-2xl text-center text-[#d62243] mb-2">
                      Réinitialisation du mot de passe
                    </h2>
                    <p className="text-center font-medium text-sm">
                      Ravi de vous revoir! Entrez un nouveau mot de passe.
                    </p>
                    <Password
                      label="Mot de passe"
                      name="password"
                      placeholder="Entrez votre mot de passe"
                    />
                    <Password
                      label="Confirmer mot de passe"
                      name="confirmPassword"
                      placeholder="confirmer votre mot de passe"
                    />
                    <button
                      disabled={formik.isSubmitting}
                      type="submit"
                      className="bg-[#d62243] hover:bg-[#ee1e4e] cursor-pointer shadow-lg font-medium rounded-full py-1 my-2 text-white text-center w-full"
                    >
                      {formik.isSubmitting ? "Validation..." : "Valider"}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
