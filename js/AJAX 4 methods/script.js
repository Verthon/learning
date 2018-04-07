const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const xhrBtn = document.getElementById('xhr'),
      fetchBtn = document.getElementById('fetch'),
      jqueryBtn = document.getElementById('jquery'),
      axiosBtn = document.getElementById('axios'),
      quote = document.getElementById('quote');

//XHR


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
  
  console.log(xhr.response.status);
});
