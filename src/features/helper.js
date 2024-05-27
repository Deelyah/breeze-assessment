export const makeDeepCopy = (value) => {
  if (!value) return value;
  return JSON.parse(JSON.stringify(value));
};

