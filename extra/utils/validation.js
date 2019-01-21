import { default as validateEmail } from "./helpers";

export default function validateUsers(users1) {
  let validCount = 0;
  let invalidCount = 0;
  users1.forEach(function(user, index) {
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
