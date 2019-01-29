const validation = {
  post: {
    id: {
      required: true,
      string: true,
      in: ["body"],
      errorMessage: "Id  is required",
      custom: function(value) {

      //  throw { error: "Error Occurred", message: "Message" };

      }
    },
    name: {
      required: true,
      regex: /^[a-zA-Z\\s]*$/,
      in: ["body"],
      errorMessage: "Name is required"
    }
  },
  delete: {
    id: {
      required: true,
      errorMessage: "Id  is required",
      in: ["params"]
    }
  },
  get: {
    skip: {
      required: false,
      default: 0,
      number: true,
      in: ["query"],
      errorMessage: "Skip is invalid"
    },
    limit: {
      required: false,
      default: 10,
      number: true,
      in: ["query"],
      errorMessage: "Limit is invalid"
    }
  },
  put: {
    id: {
      required: true,
      string: true,
      in: ["body"]
    },
    dataToUpdate: {
      in: ["body"],
      required: true,
      isObject: true,
      custom: function(dataToUpdate) {}
    }
  }
};
export default validation;
