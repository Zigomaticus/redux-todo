export const resetter = (store) => (next) => (action) => {
  next(action);
};
