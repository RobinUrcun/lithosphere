export const selectStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
  }),
  option: (styles) => ({ ...styles, color: "grey" }),
  dropdownIndicator: (style) => ({
    ...style,
    color: "grey",
    svg: {
      fill: "grey",
    },
  }),
};
