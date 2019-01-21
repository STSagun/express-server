const getUsers = "getUsers";
const headTrainer = "head-trainer";

const trainer = "trainer";
const trainee = "trainee";
export const permission = {
  getUsers: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  }
};
