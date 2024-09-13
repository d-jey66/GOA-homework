class Animal {
    constructor(name, breed, color, size) {
      this.name = name;
      this.breed = breed;
      this.color = color;
      this.size = size;
    }
  
    bark() {
      return `${this.name} is barking!`;
    }
  
    getSize() {
      return `${this.name} is ${this.size} cm long.`;
    }
  
    getColor() {
      return `${this.name} is ${this.color} in color.`;
    }
  
    getBreed() {
      return `${this.name} is a ${this.breed}.`;
    }
  }
  
  const dog = new Animal('Max', 'German Shepherd', 'Black and Tan', 80);
  console.log(dog.bark());
  console.log(dog.getSize());
  console.log(dog.getColor());
  console.log(dog.getBreed());
  