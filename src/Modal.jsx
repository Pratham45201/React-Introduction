import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  /**
   * As react keeps rendering all the time it is not sufficient to directly access dom elements.
   * Therefore we use useRef to access dom elements which is an efficient way to access dom elements.
   * This elRef keeps pointing to the same "div" that we gave it here across all the renders.
   */
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
