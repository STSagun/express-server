import UserRepository from '../repositories/user/UserRepository';
const repository = new UserRepository();
function seed() {
  repository.create({
    id: '8949342',
    name: 'saluja',
  });
}
export default seed;
export function deleteData() {
  repository.delete()
  .then((result) => {
    console.log('number of deleted user ', result );
  } );
}
export function UpdateData() {
  repository.update()
  .then((result) => {
    console.log('number of updated user', result);
});
}
