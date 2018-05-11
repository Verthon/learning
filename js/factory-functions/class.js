class Person {
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }
  hey(){
    console.log(`Hey! ${this.name} ${this.surname}`);
  }
}

const jurr = new Person('jurr', 'unknown');
jurr.hey();