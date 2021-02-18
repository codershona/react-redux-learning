import { store } from './app';

const createListItem = bookmark => {
    const li = document.createElement('li')
    li.className = 'list-group-item d-flex'

   const img = document.createElement('img')
   img.alt = `//logo.clearbit.com/${bookmark.name}`
   img.alt = bookmark.name
   img.className = 'avatar'

   const text = document.createElement('p')
   text.className = 'lead ml-4'
   text.innerHTML = bookmark.name
   text.style.cursor = 'pointer'
   text.onclick - function () {
       window.open(bookmark.url, '_blank')
   }


   const icons = document.createElement('div')
   icons.className = 'ml-auto'


   const fav = document.createElement('span')
   const i = document.createElement('i')

   i.className = `${bookmark.isFav ? 'fas' : 'far'} fa-heart`

    fav.appendChild(i)
    fav.onclick = function() {
      store.dispatch({
          type: 'TOGGLE_BOOKMARK',
          payload: bookmark.id
      })
      localStorage.setItem('bookmarks', JSON.stringify(store.getState()))
    }

    // TODO: need to add event listener


  const remove = document.createElement('span')

  remove.innerHTML = `<i class="fa fa-trash"></i>`
  remove.className = 'mx-3'

  remove.onclick = function () {
      store.dispatch({
          type: 'REMOVE_BOOKMARK',
          payload: bookmark.id
      })
      localStorage.setItem('bookmarks', JSON.stringify(store.getState()))
  }

  
  icons.append(fav, remove)

  li.append(img, text, icons)

    return li

}


export default createListItem;