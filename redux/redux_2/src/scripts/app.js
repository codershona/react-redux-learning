import createStore from './createStore';
import reducer from './reducer';
import createListItem from './createListItem';


const store = createStore(reducer)

window.onload = function() {
    const urlInput = document.getElementById('urlInput')
    const favoriteBookmarks = document.getElementById('favoriteBookmarks')
    const allBookmarks = document.getElementById('allBookmarks')


   
    urlInput.onkeypress = function(event) {
        if (event.key === 'Enter') {
            const url = event.target.value
            const name = nameFromUrl(url)

            const isFav = false

            const id = UUID()

            /* console.log(name) */


            const li = createListItem({url, name, isFav, id})
            
            /* console.log(li) */
            allBookmarks.appendChild(li)
            event.target.value = ''

        }
    }

}

/*  https://google.com/redux  */

/* regex: /:\/\/(.[^/]+)/  */

function nameFromUrl(url) {
    return url.match(/:\/\/(.[^/]+)/)[1]
}

function UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;

}