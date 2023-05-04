import { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import closeIcon from "../Svg/optimized/times.svg";

export interface DrawerProps {
  title: string;
  show: boolean;
  maskClosable?: boolean;
  onClose?: () => void;
}

const Drawer = ({ show, title, children, maskClosable, onClose }: PropsWithChildren<DrawerProps>) => {
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
    <Transition
      show={show}
      enter="transition-transform duration-300"
      leave="transition-transform duration-300"
      enterFrom="translate-x-[100%] w-4/5"
      enterTo="translate-x-[0] w-4/5"
      leaveFrom="translate-x-[0] w-4/5"
      leaveTo="translate-x-[100%] w-4/5"
      beforeEnter={() => {
        if (!document.body.contains(container.current)) {
          document.body.style.overflow = "hidden";
          document.body.appendChild(container.current);
        }
      }}
      afterLeave={() => {
        if (document.body.contains(container.current)) {
          document.body.removeChild(container.current);
          document.body.style.overflow = "auto";
        }
      }}
    >
      <div className="bg-white h-screen w-full px-5 py-4 flex flex-col">
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
    </Transition>,
    container.current
  );
};

export default Drawer;