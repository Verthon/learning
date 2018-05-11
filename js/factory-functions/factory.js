const createPerson = (name, surname) => {
  const hey = () => console.log(`Hey! ${name} ${surname}`);
  return {name, surname, hey};
}

const jurr = createPerson('jurr', 'unknown');

jurr.hey();