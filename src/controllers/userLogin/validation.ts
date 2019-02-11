const validation = {
  post: {
    email: {
      errorMessage: 'email  is required',
      in: ['body'],
      regex: /^[\w-\.]+@(successive.tech)$/,
      required: true,
    },
    userPassword: {
      errorMessage: 'Password is required',
      in: ['body'],
      required: true,
    },
  },
};
export default validation;
