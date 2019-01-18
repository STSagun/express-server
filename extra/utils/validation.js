let users = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },

  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },

  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  }
];

let validCount = 0;
let invalidCount = 0;

function validateEmail(email) {
  let regex = /^([A-Za-z0-9 \-\.])+\@(successive.tech)$/;
  return regex.test(email);
}

function validateUsers(users) {
  users.forEach(function(user, index) {
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
}

validateUsers(users);
console.log(`${validCount} valid and ${invalidCount} invalid users`);
