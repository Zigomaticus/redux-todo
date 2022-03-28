export const extractor =
  (middleware, name = null) =>
  (store) =>
  (next) =>
  (action) => {
    let prevResults;
    const _next = (action) => {
      prevResults = next(action);
      return prevResults;
    };

    const currentResult = middleware(store)(_next)(action);
    const results = {
      ...prevResults,
    };
    name && (results[name] = currentResult);
    return results;
  };
