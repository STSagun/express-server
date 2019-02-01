import { IPermission } from './interface';
const headTrainer: string = 'head-trainer';
const trainer: string = 'trainer';
const trainee: string = 'trainee';
export const permission: IPermission = {
  Traineee: {
    all: [headTrainer],
    delete: [],
    read: [trainee, trainer],
    write: [trainer],
    },
  User: {
    all: [headTrainer],
    delete: [],
    read: [trainee, trainer],
    write: [trainer],
    },
};
