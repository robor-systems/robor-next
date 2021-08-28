export const opacityVariants = {
  invisible: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export const scaleVariants = {
  invisible: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};
export const translateVariants = {
  invisible: { opacity: 0, scale: 0, x: -100 },
  visible: {
    opacity: 1,
    scale: 1,
    x: [200, 0],
  },
};
export const existanceVariants = {
  invisible: { opacity: 0 },
  visible: {
    opacity: 1,

    y: [20, 0],
  },
};
export const gradientVariants = {
  invisible: { opacity: 0 },
  visible: (bg) => ({
    opacity: 1,

    background: `linear-gradient(to top right, ${bg} ,transparent)`,
  }),
};
