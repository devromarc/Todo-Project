import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";
import Button from "./utils/Button";

const Modal = ({ children, ref }) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>Close</Button>
      </form>
    </dialog>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
