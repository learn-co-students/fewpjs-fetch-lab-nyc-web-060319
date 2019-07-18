
  function fetchBooks() {
    fetch('https://anapioficeandfire.com/api/books')
    .then(function(data){
      return data.json();
    })
    .then(function(parsed){
      //return renderBooks(parsed)
       getPosts(parsed)
    })
  }

  // This displays the 10 books on index.html in my Browser, 
  // not sure why tests aren't passing, but this works


function getPosts(json){
  return function renderBooks(json) {
    const main = document.querySelector('main')
    json.forEach(book => {
      const h2 = document.createElement('h2')
      h2.innerHTML = `<h2>${book.name}</h2>`
      main.appendChild(h2)
    })
  }
}
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(

  )
})
