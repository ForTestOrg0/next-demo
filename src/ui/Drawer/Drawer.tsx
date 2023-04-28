import { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import Image from "next/image"
import closeIcon from "../Svg/optimized/times.svg";

export interface DrawerProps {
  title: string;
  open: boolean;
  maskClosable?: boolean;
  onClose?: () => void;
}

const Drawer = ({ open, title, children, maskClosable, onClose }: PropsWithChildren<DrawerProps>) => {
  const nodeRef = useRef(null);
  const container = useRef<HTMLDivElement>(document.createElement("div"));

  container.current.className = "fixed top-0 left-0 w-screen h-screen flex items-center justify-end z-30";
  container.current.style.background = "rgba(48,43,60,0.4)";

  useEffect(
    () => () => {
      if (document.body.contains(container.current)) {
        document.body.removeChild(container.current);
        document.body.style.overflow = "auto";
      }
    },
    []
  );

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (e.target === e.currentTarget && maskClosable && onClose) {
        onClose();
      }
    };
    const mask = container.current;

    mask.addEventListener("click", listener);

    return () => mask.removeEventListener("click", listener);
  }, [maskClosable, onClose]);

  return createPortal(
    <CSSTransition
      in={open}
      nodeRef={nodeRef}
      unmountOnExit
      onEnter={() => {
        if (!document.body.contains(container.current)) {
          document.body.style.overflow = "hidden";
          document.body.appendChild(container.current);
        }
      }}
      onExited={() => {
        if (document.body.contains(container.current)) {
          document.body.removeChild(container.current);
          document.body.style.overflow = "auto";
        }
      }}
      timeout={300}
      classNames="fade-drawer"
    >
      <div ref={nodeRef} className="bg-white h-screen w-4/5 px-5 py-4 flex flex-col">
        {/* header */}
        <div className="flex items-center justify-between">
          <h3 className="text-semibold text-sm uppercase">{title}</h3>
          <button
            className="flex items-center justify-center w-8 h-8 rounded-full hover:outline-none focus-visible:outline-none active:bg-gray-800/10 transition-transform active:scale-95"
            onClick={onClose}
          >
            <Image alt="..." src={closeIcon} className="w-4 h-4" />
          </button>
        </div>

        {children}
      </div>
    </CSSTransition>,
    container.current
  );
}

export default Drawer;