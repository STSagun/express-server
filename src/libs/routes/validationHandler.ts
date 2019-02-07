export default (objData) => (req, res, next) => {
  const keys = Object.keys(objData);
  keys.forEach((key) => {
    const item = objData[key];
    const value = item.in.map((items) => {
      return req[items][key];
    });
    if (item && item.required) {
      const validateValue = value.filter((items) => item);
      if (validateValue.length !== value.length) {
        next(notFound(`${item.errorMessage}`));
      }
    }
    if (item && item.string) {
      const validateValue = value.filter((items) => item);
      const iterate = validateValue.values();
      if (typeof iterate.next().value !== 'string') {
        next(notFound('type is not String'));
      }
    }
    if (item && item.number) {
      let validateValue1 = value.filter((items) => item);
      if (isNaN(validateValue1)) {
        next(notFound('not number type'));
      }
      if (validateValue1 === '') {
        validateValue1 = item.default;
      }
    }
    if (item && item.regex) {
      const validateValue = value.filter((items) => item);
      console.log(validateValue);
      if (!item.regex.test(validateValue)) {
        next(notFound('incorrect format of Name'));
      }
    }
    if (item.isObject) {
      const validateValue = value.filter((items) => item);
      if (typeof validateValue !== 'object') {
        next(notFound('type is not Object'));
      }
    }
    if (item.custom) {
      item.custom(80);
    }
    if (item && item.in) {
      const reqKeys = Object.keys(req[item.in[0]]);
      if (reqKeys.length && !reqKeys.includes(key)) {
        next(notFound('incorrect request'));
      }
    }
  });
  next();
};
function notFound(msg) {
  return { error: 'Bad request', message: msg, status: 400 };
}
