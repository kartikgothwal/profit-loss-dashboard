import React, { JSX } from "react";
import { ErrorComponentProps } from "../types";

const ErrorComponent: React.FC<ErrorComponentProps> = ({
  message = "Something went wrong!",
  onRetry,
}: ErrorComponentProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg shadow-md">
      <p className="text-sm font-semibold">{message}</p>
      {onRetry && (
        <button
          className="mt-2 px-4 py-1 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 transition"
          onClick={onRetry}
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorComponent;
