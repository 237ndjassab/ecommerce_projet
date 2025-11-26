import { useField } from 'formik';

interface Props {
  label: string;
  name: string;
  type?: string;
}

const Upload = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <div className="">
        <label htmlFor="myfile" className='text-sm font-medium mb-2'>{label}</label><br />
        <input {...field} {...props} className='text-xs'></input>
      {meta.touched && meta.error && <p className="text-red-500 text-sm">{meta.error}</p>}
    </div>
  );
};

export default Upload;
