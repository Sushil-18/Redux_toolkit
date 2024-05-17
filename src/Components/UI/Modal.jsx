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
  return createPortal(
    <dialog
      ref={dialog}
      className={`min-w-[35vw]  border-0 rounded-xl backdrop-filter backdrop-blur-md`}
      onClose={onClose}
    >
      {" "}
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
