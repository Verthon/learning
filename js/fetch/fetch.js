const url = 'https://randomuser.me/api/';
const btn = document.querySelector('#btn');
const fullname = document.querySelector('#fullname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const city = document.querySelector('#city');
const avatar = document.querySelector('#avatar');
btn.addEventListener('click', function(){
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updatedProfile)
    .catch(printError)  
});

function handleErrors(request){
  if(!request){
    throw Error(request.status);
  }
  return request;
}

function parseJSON(request){
  console.log(request);
  return request.json();
}

function updatedProfile(data){
 
  fullname.innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`;
  
  username.innerHTML = `${data.results[0].login.username}`;
  
  email.innerHTML = `${data.results[0].email}`; 
  
  city.innerHTML = `${data.results[0].location.city}`;
  
  avatar.setAttribute("src", data.results[0].picture.medium);
}

function printError(error){
  console.log(error);
}