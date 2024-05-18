import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, onClose }) => {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [open]);
  return (
    <dialog
      ref={dialog}
      className={`fixed inset-0 flex justify-self-center self-center 
      min-w-[35vw] m-0 rounded-xl bg-black bg-opacity-50 backdrop-filter backdrop-blur-xl`}
      onClose={onClose}
    >
      {" "}
      {children}
    </dialog>
  );
};

export default Modal;
