import React, { ReactNode } from "react";

interface Props {
  closeAlert: () => void;
  children: ReactNode;
}

const Alert = ({ closeAlert, children }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible ">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={closeAlert}
      ></button>
    </div>
  );
};

export default Alert;
