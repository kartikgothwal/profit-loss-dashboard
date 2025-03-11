import { JSX } from "react";
import { IButtonProps } from "../../types";

const Button: ({ onClick, Text }: IButtonProps) => JSX.Element = ({
  onClick,
  Text,
}: IButtonProps): JSX.Element => {
  return (
    <button
      className="mt-2 px-4 py-1 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 transition"
      onClick={onClick}
    >
      {Text}
    </button>
  );
};

export default Button;
