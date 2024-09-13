class Animal {
    constructor(name) {
      this.name = name;
    }
  
    getAction(action) {
      return `${this.name} ${action}.`;
    }
  }
  
  const dog = new Animal('Max');
  console.log(dog.getAction('is barking'));
  
  const cow = new Animal('Bella');
  console.log(cow.getAction('is mooing'));
  