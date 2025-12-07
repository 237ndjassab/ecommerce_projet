import { Formik, Form, type FormikHelpers } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import login from "../../assets/images/login.png";
import Input from "../../components/ui/input";
import Password from "../../components/ui/password";
import useAppDispatch from "../../hooks/useAppDispatch";
import type { LoginDto } from "../../types/user";
import { loginAction } from "../../store/auth/actions";
import { toast } from "react-toastify";

const Login = () => {
  // Permet de rediriger l'utilisateur vers une autre page
  const navigate = useNavigate();

  // Récupère le dispatch Redux via un hook personnalisé
  const dispatch = useAppDispatch();

  // Les valeurs initiales du formulaire
  const initialValues: LoginDto = {
    email: "",
    password: "",
  };

  // Validation du formulaire avec Yup
  const validationSchema = Yup.object({
    email: Yup.string().email("Email invalide").required("email requis"),
    password: Yup.string().required("Mot de passe requis"),
  });

  // Fonction exécutée lors du submit du formulaire
  const handleSubmit = async (
    values: LoginDto,
    formikHelpers: FormikHelpers<LoginDto>
  ) => {
    // Indique à Formik que l’envoi est en cours (désactive le bouton)
    formikHelpers.setSubmitting(true);

    // Exécute l'action Redux d'authentification
    const response = await dispatch(loginAction(values));

    // Si tout s’est bien passé
    if (response.meta.requestStatus === "fulfilled") {
      toast.success("Utilisateur connecté avec succès.");
      navigate("/home"); // Redirection après connexion
    }

    // Si la connexion échoue
    if (response.meta.requestStatus === "rejected") {
      toast.error("Echec de connexion.");
    }

    // Fin de l’état "isSubmitting"
    formikHelpers.setSubmitting(false);
  };

  return (
    <section className="h-dvh relative overflow-hidden flex justify-center bg-white items-center">
      <div className="flex z-10 bg-white rounded-lg shadow-lg w-[60%] h-[80%]">

        {/* Partie gauche : formulaire de connexion */}
        <div className="flex flex-col bg-[#1a1a2b]/15 rounded-l-lg w-1/2">

          <Formik
            initialValues={initialValues}        // valeurs par défaut
            validationSchema={validationSchema}  // règles de validation
            onSubmit={handleSubmit}              // logic lors du submit
          >
            {(formik) => (
              <Form
                autoComplete="off"
                className="flex flex-col items-center justify-center w-full h-full"
              >
                <div className="flex flex-col p-4 gap-2 w-[80%]">

                  <h2 className="font-semibold text-2xl text-center text-[#d62243] mb-2">
                    Connexion
                  </h2>

                  {/* Champ Email */}
                  <Input
                    label="Email"
                    name="email"
                    placeholder="Entrez votre email"
                    type="email"
                  />

                  {/* Champ Mot de passe */}
                  <Password
                    label="Mot de passe"
                    name="password"
                    placeholder="Entrez votre mot de passe"
                  />

                  {/* Lien mot de passe oublié */}
                  <Link
                    to="/forgotpwd"
                    className="my-1 text-xs text-[#d62243] hover:text-[#ec345f]"
                  >
                    Mot de passe oublié?
                  </Link>

                  {/* Bouton envoyer */}
                  <button
                    type="submit"
                    disabled={formik.isSubmitting} // désactivé pendant l’envoi
                    className="bg-[#d62243] hover:bg-[#ee1e4e] cursor-pointer shadow-lg font-medium rounded-full py-1 my-2 text-white w-full"
                  >
                    {formik.isSubmitting
                      ? "Connexion en cours..."
                      : "Se connecter"}
                  </button>

                  {/* Lien vers l'inscription */}
                  <div className="text-sm text-center">
                    <p className="mb-2 mt-2">
                      Vous n'avez pas encore de compte?
                    </p>
                    <Link
                      to="/register"
                      className="text-[#d62243] hover:text-[#ec345f]"
                    >
                      Créez-en un!
                    </Link>
                  </div>

                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Partie droite : zone visuelle */}
        <div className="flex flex-col px-8 text-white bg-[#1a1a2b] rounded-r-lg justify-center items-center gap-3 w-1/2">
          <h1 className="text-2xl font-semibold">Welcome back!</h1>
          <p>Let's connect and Shop!</p>
          <img src={login} alt="" />
        </div>

      </div>
    </section>
  );
};

export default Login;
