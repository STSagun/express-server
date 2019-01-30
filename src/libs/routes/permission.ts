import { permission } from "../constants";
export default function hasPermission(
  moduleName: string,
  role: string,
  permissionType: string
): boolean {
  if (permission[moduleName]["all"].includes(role)) {
    return true
  } else {
    return(permission[moduleName][permissionType].includes(role));
  }
}
