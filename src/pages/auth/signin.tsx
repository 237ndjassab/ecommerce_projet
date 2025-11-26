import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import shop from '../../assets/images/shop.png'
import Input from '../../components/ui/input';
import Upload from '../../components/ui/uploadInput';
import Password from '../../components/ui/password';

const Signin = () => {
  const navigate = useNavigate();

  const initialValues = {
    nom: '',
    prenom: '',
    email: '',
    profil: '',
    password: '',
  };

  const validationSchema = Yup.object({
    nom: Yup.string().required('nom requis'),
    prenom: Yup.string().required('prénom requis'),
    email: Yup.string().required('email requis'),
    profil: Yup.mixed().required('photo requise'),
    password: Yup.string().min(8, 'Minimum 8 caractères').required('Mot de passe requis'),
  });

  const handleSubmit =()=>{
    navigate("/main")
  }

  return(
    <section className='h-dvh relative overflow-hidden flex justify-center bg-white items-center'>
      <div className='flex z-10 bg-white rounded-lg shadow-lg w-[60%] h-[85%]'>
          <div className='flex flex-col px-8 text-white bg-[#1a1a2b] rounded-l-lg justify-center items-center gap-3 w-1/2'>
            <h1 className='text-2xl font-semibold'>Hey welcome!</h1>
            <p>Create your account and let's Shop!</p>
            <img src={shop} alt="" />
          </div>
          <div className='flex flex-col bg-[#1a1a2b]/15 rounded-r-lg w-1/2'>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              <Form autoComplete='off' className='flex flex-col justify-center items-center w-full h-full'>
                <div className='flex flex-col justify-center py-4 gap-2 w-[80%]'>
                  <h2 className='font-semibold text-2xl text-center text-[#d62243] mb-2'>Inscription</h2>
                  <Input label="Nom" name="nom" placeholder='Entrez votre nom' type='text'/>
                  <Input label="Prénom" name="Prenom" placeholder='Entrez votre prénom' type='text'/>
                  <Input label="Email" name="email" placeholder='Entrez votre email' type='email'/>
                  <Upload label='Profil' name="profile" type="file" />
                  <Password label="Mot de passe" name="password" placeholder='Entrez votre mot de passe'/>
                  <button type="submit" className='bg-[#d62243] hover:bg-[#ee0e42] cursor-pointer shadow-lg font-medium rounded-full py-1 mt-2 text-white w-full'>
                      S'inscrire
                  </button>
                  <div className='text-sm text-center'>
                    <p className='mb-1'>Vous avez déja un compte?</p>
                    <Link to='/login' className='text-[#d62243] hover:text-[#ec2151]'>Connectez-vous</Link>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
      </div>
    </section>
  )
}

export default Signin;