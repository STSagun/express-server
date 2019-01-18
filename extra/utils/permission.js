const getUsers = "getUsers"
const headTrainer = "head-trainer"
const trainer = "trainer"
const trainee = "trainee"
const permission = {
  getUsers: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
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

hasPermission("getUsers", "head-trainer", "write");
