import { useField } from "formik";
import React from "react";

type CheckboxProps = {
  label?: string;
  name: string;
  className: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const CheckboxField = ({ label, className, ...props }: CheckboxProps) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-3">
      <div className={className}>
        <input
        type="checkbox"
        {...field}
        {...props}
        name={props.name}
        id={props.name}
        className="border-gray-100"
      />
      <label htmlFor={props.name} className="font-medium">{label}</label>
      </div>
      {meta.error && meta.touched && (
        <div className="text-red-500 text-[14px] ">{meta.error}</div>
      )}
    </div>
  );
};

export default CheckboxField;
