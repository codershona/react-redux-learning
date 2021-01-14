import createStore from './createStore';
import reducer from './reducer';
import createListItem from './createListItem';

let init = []
if (localStorage.getItem('bookmarks')) {
    init = JSON.parse(localStorage.getItem('bookmarks'))
}


export const store = createStore(reducer, init)

console.log(store)

/*
SUBSCRIBE for all bookmarks list

store.subscribe(() => {
    console.log(store.getState())
})

*/

window.onload = function() {
    const urlInput = document.getElementById('urlInput')
    const favoriteBookmarks = document.getElementById('favoriteBookmarks')
    const allBookmarks = document.getElementById('allBookmarks')

    if (store.getState().length > 0) {
        store.getState().forEach(bookmark => {
            let li = createListItem(bookmark)
            allBookmarks.appendChild(li)
        })
        store.getState().forEach(bookmark => {
            if (bookmark.isFav) {
             let li = createListItem(bookmark)
             favoriteBookmarks.appendChild(li)
 
            }
         })

    }
   
    urlInput.onkeypress = function(event) {
        if (event.key === 'Enter') {
            const url = event.target.value
            const name = nameFromUrl(url)

            const isFav = false

            const id = UUID()

            store.dispatch({
                type: 'ADD_BOOKMARK',
                payload: {
                    url, name, isFav, id
                }

            })
            localStorage.setItem('bookmarks', JSON.stringify(store.getState()))
            event.target.value = ''

            /* console.log(name) */
        
             
          /*
            const li = createListItem({url, name, isFav, id})
            
             console.log(li) 
            allBookmarks.appendChild(li)
            event.target.value = ''
            */

        }
    }

    store.subscribe(() => {
        allBookmarks.innerHTML = null
        store.getState().forEach(bookmark => {
            let li = createListItem(bookmark)
            allBookmarks.appendChild(li)
        })
    })

    store.subscribe(() => {
        favoriteBookmarks.innerHTML = null
        store.getState().forEach(bookmark => {
           if (bookmark.isFav) {
            let li = createListItem(bookmark)
            favoriteBookmarks.appendChild(li)

           }
        })
    })

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