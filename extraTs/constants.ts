import { IPermission } from "./interface";
export const getUsers: string = "getUsers";
export const getUsers1: string = "getUsers1";
const headTrainer = "head-trainer";
const trainer: string = "trainer";
const trainee: string = "trainee";
export const permission: IPermission = {
  getUsers: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  },
  getUsers1: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  }
};
