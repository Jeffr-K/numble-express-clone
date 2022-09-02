import chai from "chai";
// import sinon from "sinon";
// @ts-ignore
import faker from "faker";
import bcrypt from "bcrypt";
import { User } from "../src/api/modules/user/user.model";

const expect = chai.expect;

describe('User', () => {
  const userDto = {
    id: 'aaa',
    name: 'test',
    password: 'test',
    email: 'test',
    created_at: 'test',
    updated_at: 'test'
  }

  describe('create', async () => {
    it('should be defined user model', () => {
      const userModel = new User();
      expect(userModel).to.exist;
    });
    it('should be encrypted a user password', () => {
      const userPassword = userDto.password;
      const saltRounds = 10;
      const newUser = {
        id: 'aaa',
        name: 'test',
        password: 'test',
        email: 'test',
        created_at: 'test',
        updated_at: 'test'
      }
      bcrypt.genSalt(saltRounds, function(err: any, salt: any) {
        if (err) throw err;
        bcrypt.hash(userPassword, salt, function(err: any, hash: any) {
          if (err) console.error(err);
          newUser.password = hash;
        });
      });
    console.log(newUser.password);
    expect(newUser.password).not.equal(userPassword);
    });
    it('should be added to the mongodb database', () => {})
    it("Should be publish a access token and refresh token", () => {})
  });
});