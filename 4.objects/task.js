function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age;
}
const student1 = new Student('Василий', 'мужской', 19);
const student2 = new Student('Ирина', 'женский', 21);
const student3 = new Student('Юрий', 'мужской', 23);
const student4 = new Student('Наталья', 'женский', 20);
const student5 = new Student('Анна', 'женский', 22);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}
Student.prototype.setSubject('Algebra');
Student.prototype.setSubject('Geometry');

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    this.marks = [];
  } this.marks.push(mark);
  };
student1.addMark(5);
student1.addMark(4);
student2.addMark(3);


Student.prototype.addMarks = function(...marks) {
  if (this.marks === undefined) {
    this.marks = [];
  } this.marks.push(...marks);
}
student1.addMarks(4, 5)
student2.addMarks(2, 3)

Student.prototype.getAverage = function() {
  let marksSum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return average = marksSum / this.marks.length;
  
}

student1.getAverage();
student2.getAverage();

Student.prototype.exclude = function(reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
}

student2.exclude('Low marks');
