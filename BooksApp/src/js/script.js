{
'use strict'

render = function

render(){
    const thisBooksList = this

    for(let book of thisBooksList.data){
    /* generate HTML based on template */
     const generatedHTML = templates.bookTemplate({
        id: book.id,
        rice: book.price,
        name: book.name,
        image: book.image,
        rating: book.rating,
        details: book.details
     })
     console.log('generatedHTML', generatedHTML)
     /* Create element using utilis.createElementFromHTML */
     thisBooksList.element = utils.createDOMFromHTML(generatedHTML);
     /* Find container of book */
     const bookContainer = document.querySelector(select.containerOf.book);
      console.log('bookContainer', bookContainer)
     /* add element to book container */ 
     bookContainer.appendChild(thisBooksList.element);
    }
}

initActions = function


initActions(){
const thisBooksList = this

favoriteBooks = []
    
    thisBooksList.bookContainer.addEventListener('dbclick', function(event){
        event.preventDefault()

        const image = event.target.offsetParent
        bookId = image.getAttribute('data-id')
    
        if(!book.favoriteBooks.includes(bookId)){
            image.classList.add('favorite')
            thisBooksList.favoriteBooks.push(bookId)
        }
        else {
            image.classList.remove('favorite')
            const indexOfBooks = favoriteBooks.indexOf(bookId)
            thisBooksList.favoriteBooks.splice(indexOfBooks, 1)
        }
    })

}

render()

initActions()

}