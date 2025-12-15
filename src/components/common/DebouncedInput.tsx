import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  delay?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

const DebouncedInput: React.FC<Props> = ({
  value,
  onChange,
  delay,
  ...props
}) => {
  const [displayValue, setDisplayValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      if (displayValue !== value) {
        onChange(displayValue);
      }
    }, delay || 500);
    return () => {
      clearTimeout(handler);
    };
  }, [displayValue, onChange, delay, value]);

  return (
    <div>
      <input
        {...props}
        type="text"
        className="placeholder:text-gray-400 outline-0 px-2.5 w-full"
        onChange={(e) => setDisplayValue(e.target.value)}
      />
    </div>
  );
};

export default DebouncedInput;
