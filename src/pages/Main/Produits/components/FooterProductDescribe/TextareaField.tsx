import { useField } from "formik";
import React from "react";

type TextareaProps = {
  name: string;
  className: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
const TextareaField = ({ className, ...props }: TextareaProps) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2.5">
      {/* <label htmlFor={props.name}>
        {label}
      </label> */}
      <textarea {...field} {...props} className={className} />
      {meta.error && meta.touched && (
        <div className="text-red-500 text-[14px] ">{meta.error}</div>
      )}
    </div>
  );
};

export default TextareaField;
