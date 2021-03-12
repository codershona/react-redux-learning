// document.body.style.border = "5px solid red";

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

if (urlParams.has('q')) {
    const searchQuery = urlParams.get('q');

  let xhr = new XMLHttpRequest();

  xhr.onload = function () {
      let results = Array.from(this.responseXML.getElementsByClassName('result'))
  }
}




