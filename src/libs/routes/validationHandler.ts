export default objData => (req, res, next) => {
  const keys = Object.keys(objData);
  keys.forEach(key => {
    const item = objData[key];
    const value = item.in.map(item => {
      return req[item][key];
    });
    if (item && item.required) {
      const validateValue = value.filter(item => item);
      if (validateValue.length !== value.length) {
        next(notFound(`${item.errorMessage}`));
      }
    }
    if (item && item.string) {
      const validateValue = value.filter(item => typeof item == "string");
      if (validateValue.length !== value.length) {
        next(notFound(`type of ID should be string`));
      }
    }
    if (item && item.number) {
      let validateValue1 = value.filter(item => item);
      if (isNaN(validateValue1)) {
        next(notFound("not number type"));
      }
      if (validateValue1 == "") {
        validateValue1 = item.default;
      }
    }
    if (item && item.regex) {
      const validateValue = value.filter(item => item);
      if (!item.regex.test(validateValue)) {
        next(notFound("incorrect format of Name"));
      }
    }
    if (item.isObject) {
      const validateValue = value.filter(item => item);
      const iterate = validateValue.values();
      if (typeof iterate.next().value !== "object") {
        next(notFound("type is not Object"));
      }
    }
    if (item.custom) {
      item.custom(80);
    }
    if (item && item.in) {
      const reqKeys = Object.keys(req[item.in[0]]);
      if (reqKeys.length && !reqKeys.includes(key)) {
        next(notFound("incorrect request"));
      }
    }
  });
  next();
};
function notFound(msg) {
  return { error: "Bad request", message: msg, status: 400 };
}
