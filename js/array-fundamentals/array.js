var empty = [];
console.log(empty.length);
// logs 0, it creates empty array, but there is no values in it so 0,

var commas = [, , ,];
console.log(commas.length);
// logs 3 in modern browsers and 4 in ancient browsers(IE 8 and lower);