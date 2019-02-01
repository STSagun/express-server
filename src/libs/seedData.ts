import UserRepository from '../repositories/user/UserRepository';
const repository = new UserRepository();
function seed() {
  repository.create({
    id: '8949342',
    name: 'abcd',
  });
}
export default seed;
export function deleteData() {
  repository.delete();
}
export function UpdateData() {
  repository.update();
}
