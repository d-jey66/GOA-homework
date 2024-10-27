class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dinosaur extends Animal {
    constructor(name) {
      super(name); 
    }
  
    roar() {
      console.log(`${this.name} roars loudly!`);
    }
  }
  
  const rex = new Dinosaur('Rex');
  rex.speak();
  rex.roar();  
  