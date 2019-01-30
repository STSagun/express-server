import * as mongoose from "mongoose";

class Database {
 static open(mongo) {
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
  static disconnect() {
    mongoose.disconnect();
  }
}
export default  Database;
