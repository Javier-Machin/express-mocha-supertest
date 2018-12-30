const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

// Assert get root response is correct
// We pass done as it will be an async test
it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found.'
      });
    })
    .end(done);
});


// 
it('should return an array of users including my name', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Javi',
        age: 100
      })
    })
    .end(done);
});

// We pass done as it will be an async test
// it('should return hello world response', (done) => {
//   request(app)
//     .get('/')
//     .expect(200)
//     .expect('Hello world!')
//     .end(done);
// });
