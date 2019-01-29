export interface IPermission {
  [Traineee: string]: {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
  }
}
