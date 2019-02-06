import UserRepository from '../repositories/user/UserRepository';
const repository = new UserRepository();
function seed() {
  repository.userCount().then((result) => {
    if (result === 0) {
      repository.create({
        email: 'head.trainer@successive.tech',
        name: 'Head-trainer',
        role: 'head-trainer',
      });
      repository.create({
        email: 'traineee@successive.tech',
        name: 'rahul',
        role: 'trainee',
      });
    }
  });
}
export default seed;
