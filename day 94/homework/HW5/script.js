class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    startEngine() {
      console.log('Engine started');
    }
  
    stopEngine() {
      console.log('Engine stopped');
    }
  }
  
  const car1 = new Car('Toyota', 'Camry', 2020);
  const car2 = new Car('BMW', 'X5', 2022);
  
  car1.startEngine();
  car2.stopEngine();
  