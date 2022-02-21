// realm.ts
import {Realm, createRealmContext} from '@realm/react';

class Task extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  service!: string;
  user!: string;
  password!: string;

  static generate(service: string, user: string, password: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      service,
      user,
      password,
      createdAt: new Date()
    };
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'Task',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      service: 'string',
      user: 'string',
      password: 'string',
      createdAt: 'date'
    },
  };
}

export default createRealmContext({schema: [Task]});