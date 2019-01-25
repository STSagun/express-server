import validations from "../../controllers/trainee/validations";
export default objData => (req, res, next) => {
  console.log("validate handler", req.body, req.params, req.query);

  const { name, id } = req.body || req.param || req.query;
  //const { name, id } = req.body;
  console.log(!id);
  if (!id) {
    console.log(objData.id.errorMessage);
    return next({
      error: "Bad request",
      message: objData.id.errorMessage,
      status: 500
    });
  }
  else if(typeof id == 'string') {
   if(typeof id == 'string') {
}
  }

  next();
};
