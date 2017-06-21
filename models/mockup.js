// subscribers, teachers, courses

user: [
  {id: 12, role: "Teacher", lastName: "Echo", firstName: "Elrond", courses: [37, 56],
    completedCourses: []},
  {id: 13, role: "Subscriber", lastName: "Foxtrot", firstName: "Ferris", courses: [56],
    completedCourses: [73]}
]

courses: [
  {id: 37, title: "Guitar", price: 5, dateCreated: 6/20/2017,
     description: "learning guitar basics", teacherId: 3847,
     published: false, stripeId: "29347263stripe447",
     subscribers: [44, 55, 66], lessons: [23423, 432523, 42342]}
]

lessons: [
  {id: 23423, title: "Finger Placement", sequence: 1, videoURL: "http://google.com",
    markedComplete: false,
     objective: "I can identify and play middle c", archived: false, published: true}
]
