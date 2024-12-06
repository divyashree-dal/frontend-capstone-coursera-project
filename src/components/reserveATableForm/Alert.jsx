import React, { useRef } from "react";
import { useAlertContext } from "../../context/alertContext";

function Alert() {

  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  if (!isOpen) {
    return null; // Don't render anything if the alert is not open
  }

  return (

    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <div
        className={`w-full max-w-md p-6 rounded-lg shadow-lg ${
          isSuccess ? "bg-green-300" : "bg-red-300"
        }`}
      >
        <div className="text-lg font-bold mb-4" id="alert-title">
          {isSuccess ? "All good!" : "Oops!"}
        </div>
        <div className="mb-6">
          {message}
        </div>
        <div className="flex justify-end">
          <button
            ref={cancelRef}
            onClick={onClose}
            className="px-4 py-2 font-medium text-white bg-gray-700 rounded hover:bg-gray-800"
            aria-label="pop up alert close"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Alert;
