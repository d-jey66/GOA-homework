class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
  
    study() {
      return `${this.name} is studying.`;
    }
  }
  
  const student1 = new Student('Nino', 22, 'A');
  console.log(student1.greet());
  console.log(student1.study());
  