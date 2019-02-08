export default (objData) => (req, res, next) => {
  const keys = Object.keys(objData);
  keys.forEach((key) => {
    const items = objData[key];
    const value = items.in.map((item) => {
      return req[item][key];
    });
    if (items && items.required) {
      const validateValue = value.filter((item) => item);
      if (validateValue.length !== value.length) {
        next(notFound('Something is required'));
      }
    }
    if (items && items.string) {
      const validateValue = value.filter((item) => item);
      const iterate = validateValue.values();
      if (typeof iterate.next().value !== 'string') {
        next(notFound('type is not String'));
      }
    }
    if (items && items.number) {
      let validateValue1 = value.filter((item) => item);
      if (isNaN(validateValue1)) {
        next(notFound('not number type'));
      }
      if (validateValue1 === '') {
        validateValue1 = items.default;
      }
    }
    if (items && items.regex) {
      const validateValue = value.filter((item) => item);
      if (!items.regex.test(validateValue)) {
        next(notFound('incorrect format regex'));
      }
    }
    if (items.isObject) {
      const validateValue = value.filter((item) => item);
      if (typeof validateValue !== 'object') {
        next(notFound('type is not Object'));
      }
    }
    if (items.custom) {
      items.custom(80);
    }
    if (items && items.in) {
      const reqKeys = Object.keys(req[items.in[0]]);
      if (!reqKeys.length && reqKeys.includes(key)) {
        next(notFound('incorrect request'));
      }
    }
  });
  next();
};
function notFound(msg) {
  return { error: 'Bad request', message: msg, status: 400 };
}
