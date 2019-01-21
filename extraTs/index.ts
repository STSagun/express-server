import { IUsers } from "./interface";
const users: IUsers[] = [
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
console.log("---------------diamond pattern-----------------");

EquilateralTriangle(10);
console.log("---------------Etriangle pattern-----------------");
hasPermission("getUsers", "head-trainer", "write");
hasPermission("getUsers1", "head-trainer", "write");
console.log("-----------------Permission------------------");
validateUsers(users);
console.log("-----------------Validation------------------");
