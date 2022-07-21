function Student(name, gender, age) {
  return this.name = name,
    this.gender = gender,
    this.age = age;
}
let student1 = new Student('Василий', 'мужской', 19);
let student2 = new Student('Ирина', 'женский', 21);
let student3 = new Student('Юрий', 'мужской', 23);
let student4 = new Student('Наталья', 'женский', 20);
let student5 = new Student('Анна', 'женский', 22);

Student.prototype.setSubject = function(...subjectName) {
  return this.subject = subjectName;
}
Student.prototype.setSubject('Algebra', 'Geometry');

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    return this.marks = mark;
  };
  //  else {
  // //   //return this.marks = [...mark];
  // // }
}
Student.prototype.addMark(5);




Student.prototype.addMarks = function(...mark) {
  return this.marks = mark;
}
Student.prototype.addMarks([2,4,5,2])