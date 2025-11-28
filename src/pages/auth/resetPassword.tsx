import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router';
import reset from '../../assets/images/reset.png'
import Password from '../../components/ui/password';


const ResetPassword =()=>{
  const location = useLocation();
  const navigate = useNavigate();
  // const email = location.state ? location.state.email : null;

  console.log(" location.state", location.state);
  

  // useEffect(() => {
  //   if (!email) {
  //     navigate("/forgotpwd");
  //   }
  // }, [navigate, email]);

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('email requis'),
  });

  const handleSubmit =()=> {
    navigate("/confirmotp")
  };

    return(
    <section className='h-dvh relative overflow-hidden flex justify-center bg-white items-center'>
      <div className='flex z-10 bg-white rounded-lg shadow-lg w-[40%] h-[80%]'>
          <div className='flex flex-col bg-[#1a1a2b]/5 rounded-l-lg w-full relative'>
            <img src={reset} className='absolute w-[300px] -top-20 -left-35' alt="" />
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              <Form autoComplete='off' className='flex flex-col items-center justify-center w-full h-full'>
                <div className='flex flex-col p-4 gap-2 w-[60%]'>
                  <h2 className='font-semibold text-2xl text-center text-[#d62243] mb-2'>Réinitialisation du mot de passe</h2>
                  <p className='text-center font-medium text-sm'>Ravi de vous revoir! Entrez un nouveau mot de passe.</p>
                  <Password label="Mot de passe" name="password" placeholder='Entrez votre mot de passe'/>
                  <Password label="Confirmer mot de passe" name="password" placeholder='confirmer votre mot de passe'/>
                  <Link to='/main' type="submit" className='bg-[#d62243] hover:bg-[#ee1e4e] cursor-pointer shadow-lg font-medium rounded-full py-1 my-2 text-white text-center w-full'>
                      Valider
                  </Link>
                </div>
              </Form>
            </Formik>
          </div>
      </div>
    </section>
  )
}

export default ResetPassword;