//Working Demo https://codepen.io/Verthon/pen/bvQaYO



const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const xhrBtn = document.getElementById('xhr'),
      fetchBtn = document.getElementById('fetch'),
      jqueryBtn = document.getElementById('jquery'),
      axiosBtn = document.getElementById('axios'),
      quote = document.getElementById('quote');

//-------------------XHR---------------------------


xhrBtn.addEventListener('click', function(){
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      const data = JSON.parse(xhr.responseText);
      quote.innerText = data;
    }
  }
  xhr.open("GET", url);
  xhr.send();
  
});

//-------------------------fetch---------------------

fetchBtn.addEventListener('click', function(){
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateQuote)
    .catch(printError)
  
  function handleErrors(request){
    if(!request){
    throw Error(request.status);
    }
    return request;
  }
  
  function parseJSON(request){
    return request.json();
  }
  
  function updateQuote(data){
    quote.innerHTML = data;
  }
  
  function printError(error){
    console.log(error)
  }
});

//---------------------jquery-------------------------

$(jqueryBtn).click(function(){
  $.getJSON(url, function(json){
    quote.innerHTML = json;
  });
})

//---------------------axios---------------------------

axiosBtn.addEventListener('click', function(){
  axios.get(url)
    .then(updateDom)
    .catch(errorHandler)
  
  function updateDom(data){
    quote.innerHTML = (data.data);
  }
  
  function errorHandler(error){
    console.log(error);
  }
});