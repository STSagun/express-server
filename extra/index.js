const users = [
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
import { diamond, EquilateralTriangle } from "./patterns";
import { hasPermission, validateUsers } from "./utils";

diamond(10);
EquilateralTriangle(10);
hasPermission("getUsers", "head-trainer", "write");
validateUsers(users);
