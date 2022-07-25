function Student(name, gender, age) {
  return this.name = name,
    this.gender = gender,
    this.age = age;
}
const student1 = new Student('Василий', 'мужской', 19);
const student2 = new Student('Ирина', 'женский', 21);
const student3 = new Student('Юрий', 'мужской', 23);
const student4 = new Student('Наталья', 'женский', 20);
const student5 = new Student('Анна', 'женский', 22);

Student.prototype.setSubject = function(subjectName) {
  return this.subject = subjectName;
}
Student.prototype.setSubject('Algebra');
Student.prototype.setSubject('Geometry');

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    this.marks = [];
    return this.marks.push(mark);
  } else {
      return this.marks.push(mark);
   }  
  };
student1.addMark(5);
student1.addMark(4);
student2.addMark(3);


Student.prototype.addMarks = function(...marks) {
    return this.marks = marks;
}
student1.addMarks(4, 5)
student2.addMarks(2, 3)

Student.prototype.getAverage = function() {
  let marksSum = this.marks.reduce((acc, mark) => acc + mark, 0);
  this.average = marksSum / this.marks.length;
  return this.average;
}

student1.getAverage();
student2.getAverage();

Student.prototype.exclude = function(reason) {
  this.excluded = reason;
  for (mark in this.marks) {
    if (mark <=3) {
      delete this.marks;
      delete this.subject;
    }
  } return this.excluded;
}

student2.exclude('Low marks');
