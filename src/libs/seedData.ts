import * as bcrypt from 'bcrypt';
import UserRepository from '../repositories/user/UserRepository';
const repository = new UserRepository();
const MongoPassword = process.env.PASSWORD;
export default async () => {
  const res = await repository.userCount();
  if (res === 0) {
      bcrypt.hash(MongoPassword, 10, (err, hash) => {
        console.log('hash', hash);
        repository.create({
        email: 'head.trainer@successive.tech',
        name: 'Head-trainer',
        password: hash,
        role: 'head-trainer',
      });
        repository.create({
        email: 'traineee@successive.tech',
        name: 'rahul',
        password: hash,
        role: 'trainee',
      });
    });
  }
  if (!res) {
    throw {error: 'Some error ocuured in SeedData'};
  }
};
