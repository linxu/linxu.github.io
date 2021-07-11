import React from "react";
import { useSelector } from "react-redux";
import { selectMessage } from "../state/MessageSlice";

export const Error = () => {
  const message = useSelector(selectMessage);
  return (
    <>
      {message.error !== undefined && (
        <div>
          {message.error}
        </div>
      )}
    </>
  );
};
