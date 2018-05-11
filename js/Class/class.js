//ES 6 Class

class Drone {
  //constructor helps with passing data to class
  constructor(id, name) {
    //instance variables, 
    this.id = id;
    this.name = name;
    
  }
}

//creating new instance of 'Drone' class
let drone = new Drone (4, "drone");

console.log(`${drone.id} - ${drone.name} `);