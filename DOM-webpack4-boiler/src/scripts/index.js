// working with events

let btn = document.querySelector('#btn');

let para = document.querySelector('#para');

let isShown = false;

btn.addEventListener('click', function() {
    if (isShown) {
        para.style.visibility = 'hidden';
        isShown = false;
        btn.innerHTML = 'SHOW';

    } else {
        para.style.visibility = 'visible';
        isShown = true;
        btn.innerHTML = 'HIDE';

    }

})

// working with Dome: Creating and Deleting DOM


