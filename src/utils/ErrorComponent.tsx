import React from "react";
import { AlertTriangle } from "lucide-react";

interface ErrorComponentProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
  message = "Something went wrong!",
  onRetry,
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg shadow-md">
      <AlertTriangle className="w-6 h-6 mb-2 text-red-700" />
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
