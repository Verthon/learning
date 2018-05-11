const Person = function(name, surname){
  this.name = name;
  this.surname = surname;
  this.hey = () => console.log(`Hey! ${name} ${surname}`);
}

const jurr = new Person('jurr', 'unknown');

jurr.hey();
