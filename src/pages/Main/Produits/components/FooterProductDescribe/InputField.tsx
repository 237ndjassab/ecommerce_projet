import { useField } from 'formik'
import React from 'react'

type InputProps = {
  name : string,
  className: string
} & React.InputHTMLAttributes<HTMLInputElement>
const InputField = ({className, ...props}: InputProps) => {
  const [field, meta] = useField(props)
  return (
    <div className='flex flex-col gap-2.5'>
      {/* <label htmlFor={props.name}>
        {label}
      </label> */}
      <input type="text" {...field} {...props} className={className} />
      {meta.error && meta.touched && (
        <div className='text-red-500 text-[14px] '>{meta.error}</div>
      )}
    </div>
  )
}

export default InputField