const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('Spies example', () => {
  const db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy('Javi', 100);
    expect(spy).toHaveBeenCalledWith('Javi', 100);
  });

  it('should call saveUser with user object', () => {
    const email = 'javi@example.com';
    const password = '123abc';
    
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});