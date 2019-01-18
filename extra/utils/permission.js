import { permission } from "../constants";
export default function hasPermission(moduleName, role, permissionType) {
  if (permission[moduleName]["all"].includes(role)) {
    console.log("true");
  } else {
    console.log(permission[moduleName][permissionType].includes(role));
  }
}
