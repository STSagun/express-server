import { IUsers } from "./../interface";
import { default as validateEmail } from "./helpers";

export default function validateUsers(users: IUsers[]): void {
  let validCount = 0;
  let invalidCount = 0;
  users.forEach(function(user) {
    const { traineeEmail, reviewerEmail } = user;
    if (validateEmail(traineeEmail)) {
      validCount++;
      console.log(traineeEmail, "valid user");
    } else {
      invalidCount++;
      console.log(traineeEmail, "invalid user");
    }
    if (validateEmail(reviewerEmail)) {
      validCount++;
      console.log(reviewerEmail, "valid user");
    } else {
      invalidCount++;
      console.log(reviewerEmail, "invalid user");
    }
  });
  console.log(`${validCount} valid and ${invalidCount} invalid users`);
}
