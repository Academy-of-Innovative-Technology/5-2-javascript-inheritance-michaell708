/* === EXERCISE 1 CODE ALONG === */

class Pet {
  constructor(name, breed) {
      this.name = name;
      this.breed = breed;
      this.show = function() {
          var text = "<p>Your pet's name is " + this.name + ". The pet's breed is " + this.breed + ".</p>";
          return text;
      };
  }
}




class cat extends Pet {
super (name, breed)
};






/* ==== EXERCISE 2 ==== */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.details = function() {
      let detail = `My name is ${this.name} and I am ${this.age} years old.`;    
    return detail;
    }
  }
};

class student extends Person {
  constructor(name, age) {
    super(name, age)
    this.studentdetails = function()
    let studentdetail = `The student's name is ${this.name} and they are ${this.age} old.`
    return studentdetail;
  }
};

class teacher extends Person {
  constructor(name, age) {
    super(name, age)
    this.teacherdetails = function()
    let teacherdetail = `The teacher's name is ${this.name} and they are ${this.age} old.`
    return teacherdetail;
  }
};