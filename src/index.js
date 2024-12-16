export const clsx = (...args) => {
  const cls = "";
  args.map((item) => {
    cls && (cls += " ");
    cls += mapClass(item);
  });
  return cls;
};

const mapClass = (value) => {
  let cls = "";
  if (typeof value === "string") {
    cls += value;
  } else if (typeof value === "number") {
    cls += value.toString();
  } else {
    Object.entries(value).forEach(([key, value]) => {
      if (value) {
        if (cls) cls && (cls += " ");
        cls += key;
      }
    });
  }
  return cls;
};

export default clsx;
