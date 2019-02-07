import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import successHandler from '../../libs/routes/successHandler';
import UserRepository from '../../repositories/user/UserRepository';

class Controller {
  public async create(req, res, next) {
    try {
      const { email, userPassword } = req.body;
      const userRepository = new UserRepository();
      const result = await userRepository.userFind({ email });
      const { password } = result;
      bcrypt.compare(userPassword, password, (err, match) => {
        if (match === true) {
          const key = process.env.KEY;
          const token = jwt.sign(
            {
              result,
            },
            key,
            { expiresIn: 15 * 60 },
          );
          res.status(200).send(successHandler(token, email, 200, 'ok'));
        } else {
          next('cannot find password');
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
}
export default new Controller();
