export interface IPermission {
  [getUsers: string]: {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
  };

}
export interface IUsers {
  traineeEmail: string;
  reviewerEmail: string;
}
