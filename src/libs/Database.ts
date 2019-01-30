import * as mongoose from "mongoose";

class Database {
<<<<<<< HEAD
 static open(mongo) {
=======
  static open(mongo) {
>>>>>>> 1bf46a002c994a0c382991f1b255c33bc6959a03
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
<<<<<<< HEAD
  static disconnect() {
=======
 static disconnect() {
>>>>>>> 1bf46a002c994a0c382991f1b255c33bc6959a03
    mongoose.disconnect();
  }
}
export default  Database;
