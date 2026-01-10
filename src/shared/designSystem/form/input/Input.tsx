/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FC, InputHTMLAttributes } from "react";
import { FaStarOfLife } from "react-icons/fa";

type TInputVariation = "primary" | "disabled" | "error";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variation?: TInputVariation;
  error?: string;
  disabled?: boolean;
  label?: string;
  labelHtmlFor?: string;
  required?: boolean;
}

export const Input: FC<IInputProps> = ({
  variation = "primary",
  error = "",
  disabled = false,
  label = "",
  labelHtmlFor = "",
  required = false,
  ...rest
}) => {
  return (
    <>
      {label && (
        <div className="flex gap-1">
          <label
            htmlFor={labelHtmlFor}
            className="text-lg font-semibold text-gray-800"
          >
            {label}
          </label>
          {required && <FaStarOfLife size={"8px"} color="red" />}
        </div>
      )}

      <input
        className={`p-2 border ${
          error
            ? "border-red-500 rounded focus:outline-red-500"
            : "border-violet-500 rounded focus:outline-violet-500"
        }`}
        disabled={disabled}
        {...rest}
      />

      <span>
        {error && <p className="h-1 mt-1 text-sm text-red-600">{error}</p>}
      </span>
    </>
  );
};
