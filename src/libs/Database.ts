import * as mongoose from "mongoose";

class Database {
  open(mongo) {
    return new Promise(function(resolve, reject) {
      mongoose
        .connect(
          mongo,
          { useNewUrlParser: true }
        )
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
  }
  disconnect() {
    mongoose.disconnect();
  }
}
export default new Database();
