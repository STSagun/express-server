import { IPermission } from "./interface";
const headTrainer: string = "head-trainer";
const trainer: string = "trainer";
const trainee: string = "trainee";
export const permission: IPermission = {
  "Traineee": {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  }
};
