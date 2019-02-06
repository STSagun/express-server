import * as mongoose from 'mongoose';
import { stringify } from 'querystring';
import VersionableSchema from '../versionable/VersionableSchema';

export default class UserSchema extends VersionableSchema {
  constructor(option: any) {
    const data = {
      _id: String,
      email: String,
      name: String,
      role: String,
    };
    super(data, option);
  }

}
