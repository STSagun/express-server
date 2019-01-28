import validations from "../../controllers/trainee/validations";
export default objData => (req, res, next) => {
  console.log("validate handler", req.body, req.params, req.query);
  const keys = Object.keys(objData);
  let skip = req.query.skip;
  let limit = req.query.limit;

  keys.forEach(key => {
    const item = objData[key];
    const value = item.in.map(item => {
      return req[item][key];
    });
    if (item && item.required) {
      const validateValue = value.filter(item => item);
      if (validateValue.length !== value.length) {
        next({
          error: "Bad request",
          message: `${item.errorMessage}` || "required values",
          status: 500
        });
      }
    }
    if (item && item.string) {
      const validateValue = value.filter(item => item);
      const iterate = validateValue.values();
      if (typeof iterate.next().value !== "string") {
        next({
          error: "Bad request",
          message: "type" || `${value}`,
          status: 500
        });
      }
    }
    if (item && item.number) {
      const validateValue = value.filter(item => item);
      const iterate = validateValue.values();

      if (typeof iterate.next().value !== "number") {
        next({
          error: "Bad request",
          message: "type" || `${value}`,
          status: 500
        });
      }
    }
    if (item && item.regex) {
      const validateValue = value.filter(item => item);
      if (!item.regex.test(validateValue)) {
        next({
          error: "Bad request",
          message: `${key}incorrect format`,
          status: 500
        });
      }
    }
    if (item.isObject) {
      const validateValue = value.filter(item => item);
      const iterate = validateValue.values();

      if (typeof iterate.next().value !== "object") {
        next({
          error: "Bad request",
          message: "type" || `${key}`,
          status: 500
        });
      }
    }

    if (skip === "" && limit === "") {
      return (skip = 0), (limit = 10);
    }
    if (item.custom) {
      item.custom(80);
    }

    if (item && item.in) {
      if (!(Object.keys(req.body).length === 0)) {
        if (item.in.toString() !== "body") {
          next({
            error: "Bad request",
            message: "incorrect parameter1 request",
            status: 500
          });
        }
      }
      if (!(Object.keys(req.param).length === 0)) {
        if (item.in.toString() !== "params") {
          next({
            error: "Bad request",
            message: "incorrect parameter2 request",
            status: 500
          });
        }
      }
      if (!(Object.keys(req.query).length === 0)) {
        if (item.in.toString() !== "query") {
          next({
            error: "Bad request",
            message: "incorrect parameter3 request",
            status: 500
          });
        }
      }
    }
  });

  next();
};

