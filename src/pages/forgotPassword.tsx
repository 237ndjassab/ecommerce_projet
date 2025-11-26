import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../components/input';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import forgot from '../assets/images/forgotpwd.png'

const ForgotPassword =()=>{
  const navigate = useNavigate();

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
          <div className='flex flex-col bg-[#1a1a2b]/15 rounded-l-lg w-full relative'>
            <img src={forgot} className='absolute w-[300px] -top-40 -left-35' alt="" />
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              <Form autoComplete='off' className='flex flex-col items-center justify-center w-full h-full'>
                <div className='flex flex-col p-4 gap-4 w-[60%]'>
                  <h2 className='font-semibold text-2xl text-center text-[#d62243] mb-2'>Mot de passe oublié?</h2>
                  <p className='text-center font-medium text-sm'>Pas d'inquiétude, veuillez entrez l'email associé à votre compte.</p>
                  <Input label="Email" name="email" placeholder='Entrez votre email' type='email'/>
                  <button type="submit" className='bg-[#d62243] hover:bg-[#ee1e4e] cursor-pointer shadow-lg font-medium rounded-full py-1 text-white w-full'>
                      Soumettre
                  </button>
                  <div className='text-sm text-center'>
                    <p className='mb-2 mt-2'>Vous n'avez pas encore de compte?</p>
                    <Link to='/signin' className='text-[#d62243] hover:text-[#ec345f]'>Créez-en un!</Link>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
      </div>
    </section>
  )
}

export default ForgotPassword;