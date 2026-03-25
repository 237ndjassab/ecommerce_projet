import {  useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import otpimg from "../../assets/images/otp.png";
import useAppDispatch from "../../hooks/useAppDispatch";
import { toast } from "react-toastify";
import {
  forgotPasswordAction,
  verifyOtpAction,
} from "../../store/auth/actions";

const ConfirmOTP: React.FC  = () => {
  const dispatch = useAppDispatch();
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state ? location.state.email : null;

  useEffect(() => {
    if (!email) {
      navigate("/forgotpwd");
    }
  }, [navigate, email]);
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (otp) {
      const response = await dispatch(verifyOtpAction({ email, otp: otp }));

      if (response.meta.requestStatus === "fulfilled") {
        toast.success("OTP verifié avec succès.");
        navigate("/resetpwd", { state: { email } });
      }

      if (response.meta.requestStatus === "rejected") {
        toast.error("Echec  de verification de l'OTP.");
      }
    } else {
      toast.warning("Veuillez entrer un otp valide.");
    }
  };

  const handleResendOtp = async () => {
    const response = await dispatch(
      forgotPasswordAction({ email: location.state.email })
    );

    if (response.meta.requestStatus === "fulfilled") {
      toast.success("Nouveau OTP envoyer avec succès.");
    }

    if (response.meta.requestStatus === "rejected") {
      toast.error("Echec de demande de réintialisation de mot de passe.");
    }
  };

  return (
    <section className="h-dvh relative overflow-hidden flex justify-center bg-white items-center">
      <div className="flex z-10 bg-white rounded-lg shadow-lg w-[40%] h-[80%]">
        <div className="flex flex-col bg-[#1a1a2b]/15 rounded-l-lg w-full relative">
          <img
            src={otpimg}
            className="absolute w-[300px] -top-20 -left-35"
            alt=""
          />
          <form className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-center p-4 gap-4 w-[60%]">
              <h2 className="font-semibold text-2xl text-center text-[#d62243] mb-2">
                Vérification OTP
              </h2>
              <p className="text-center font-medium text-sm">
                Nous avons envoyé un code sur votre email, veuillez rentrer ce
                code ici
              </p>
              <label htmlFor="otp">Code OTP :</label>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span> - </span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  border: "1px solid #000",
                  borderRadius: "0.375rem",
                  textAlign: "center",
                }}
              />
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-[#d62243] hover:bg-[#ee1e4e] cursor-pointer shadow-lg font-medium text-center rounded-full py-1 text-white w-50"
              >
                Soumettre
              </button>
              <button
                onClick={() => handleResendOtp()}
                className="my-2 font-medium text-[#d62243]"
              >
                Renvoyer le code
              </button>
              <br />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConfirmOTP;
