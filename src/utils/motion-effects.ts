import { TargetAndTransition } from "motion";
import { MotionProps } from "motion/react";

const backInLeft = (duration?: number): MotionProps => ({
  initial: { x: "-100%" },
  whileInView: { x: 0 },
  transition: { duration: duration || 0.5, type: "spring" },
});

const backInRight = (duration?: number): MotionProps => ({
  initial: { x: "100%" },
  whileInView: { x: 0 },
  transition: { duration: duration || 0.5, type: "spring" },
});

const backInTop = (y?: string, duration?: number): MotionProps => ({
  initial: { y: y ?? "-100%" },
  whileInView: { y: 0 },
  transition: { duration: duration || 0.5, type: "spring" },
});

const hoverEffect = (): TargetAndTransition => ({
  scale: 1.2,
  rotate: 5,
  transition: { type: "spring", stiffness: 300 },
});

const tapEffect = (): TargetAndTransition => ({
  scale: 0.9,
  rotate: -5,
  transition: { type: "spring", stiffness: 500 },
});

const animateFlyToCart = (productImg: HTMLImageElement, cartBtn: Element) => {
  const imgRect = productImg.getBoundingClientRect();
  const cartRect = cartBtn.getBoundingClientRect();

  const clone = productImg.cloneNode(true) as HTMLImageElement;
  clone.style.position = "fixed";
  clone.style.left = `${imgRect.left}px`;
  clone.style.top = `${imgRect.top}px`;
  clone.style.width = `${imgRect.width}px`;
  clone.style.height = `${imgRect.height}px`;
  clone.style.zIndex = "9999";
  clone.style.transition = "all 0.8s ease-in-out";
  document.body.appendChild(clone);

  requestAnimationFrame(() => {
    clone.style.left = `${cartRect.left}px`;
    clone.style.top = `${cartRect.top}px`;
    clone.style.width = "0px";
    clone.style.height = "0px";
    clone.style.opacity = "0";
  });

  setTimeout(() => {
    clone.remove();
  }, 800);
};

export {
  backInLeft,
  backInRight,
  backInTop,
  hoverEffect,
  tapEffect,
  animateFlyToCart,
};
