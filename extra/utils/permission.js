const permission = {
  getUsers: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  }
};

function hasPermission(moduleName, role, permissionType) {
  if ( permission[moduleName]['all'].includes(role) ) {
    console.log('true');
  } else {
    console.log(permission[moduleName][permissionType].includes(role))
  }
}

hasPermission("getUsers", "trainee", "write");
