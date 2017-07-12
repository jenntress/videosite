//   blog/config/database-seeder.js
//  (use this so we don't spend a bunch of time creating data)

const faker = require('faker');
const Course = require('../models/course');
const Lesson = require('../models/lesson');


//****LESSONS****
module.exports = () => {
  Lesson.remove(err => {
    if(err) {
      console.error(err, "ERROR DELETING LESSONS")
    } else {
      console.log("OLD LESSONS DELETED... MAKING NEW ONES")
    }
  })

for (var i = 0; i < 20; i++){
  var someNewLesson = new Lesson({
    title: faker.lorem.words(),
    sequence: faker.lorem.sentence(),
    videoURL: faker.commerce.price(),
    objective: faker.internet.url(),
    markedComplete: faker.random.boolean()
  });

someNewLesson.save();
}
}
