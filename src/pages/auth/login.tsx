import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import login from '../../assets/images/login.png'
import Input from '../../components/ui/input';
import Password from '../../components/ui/password';


const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('email requis'),
    password: Yup.string().required('Mot de passe requis'),
  });

  const handleSubmit =()=> {
    navigate("/main")
  };

    return(
    <section className='h-dvh relative overflow-hidden flex justify-center bg-white items-center'>
      <div className='flex z-10 bg-white rounded-lg shadow-lg w-[60%] h-[80%]'>
          <div className='flex flex-col bg-[#1a1a2b]/15 rounded-l-lg w-1/2'>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              <Form autoComplete='off' className='flex flex-col items-center justify-center w-full h-full'>
                <div className='flex flex-col p-4 gap-2 w-[80%]'>
                  <h2 className='font-semibold text-2xl text-center text-[#d62243] mb-2'>Connexion</h2>
                  <Input label="Email" name="email" placeholder='Entrez votre email' type='email'/>
                  <Password label="Mot de passe" name="password" placeholder='Entrez votre mot de passe'/>
                  <Link to='/forgotpwd' className='my-1 text-xs text-[#d62243] hover:text-[#ec345f]'>Mot de passe oublié?</Link>
                  <button type="submit" className='bg-[#d62243] hover:bg-[#ee1e4e] cursor-pointer shadow-lg font-medium rounded-full py-1 my-2 text-white w-full'>
                      Se connecter
                  </button>
                  <div className='text-sm text-center'>
                    <p className='mb-2 mt-2'>Vous n'avez pas encore de compte?</p>
                    <Link to='/signin' className='text-[#d62243] hover:text-[#ec345f]'>Créez-en un!</Link>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
          <div className='flex flex-col px-8 text-white bg-[#1a1a2b] rounded-r-lg justify-center items-center gap-3 w-1/2'>
            <h1 className='text-2xl font-semibold'>Welcome back!</h1>
            <p>Let's connect and Shop!</p>
            <img src={login} alt="" />
          </div>
      </div>
    </section>
  )
};

export default Login;