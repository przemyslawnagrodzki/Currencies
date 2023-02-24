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
    console.log('favorite books', favoriteBooks)

    const booksFilter = document.querySelector(select.containerOf.filters)
    booksFilter.addEventListener('click', function(callback){
        const clickedElement = callback.target
            if(clickedElement.tagName == 'INPUT' && clickedElement.type == 'checkbox' && clickedElement.name == 'filter'){
                console.log(value, 'value')
            }
            if(clickedElement.input == 'checked'){
                thisBooksList.filters.push(clickedElement.value)
            }
            else {
                const indexOfFilters = filters.indexOf(clickedElement.value)
                thisBooksList.filters.splice(indexOfFilters, 1)
            }
        })

        
    }

filterBooks = function

filterBooks(){
    const thisBooksList = this
      
    for(let book of dataSource.books){
        let shouldBeHidden = false
        const bookImage = document.querySelector(select.containerOf.images + '[data-id = "' + book.id + '"]')
        for(let filter of thisBooksList.filters){
            if(!book.details){
                shouldBeHidden = true 
                break
            }
            if(shouldBeHidden = true){
                
                bookImage.classList.add('hidden')
            }
            else{
                bookImage.classList.remove('hidden')
            }
        }
    }
}

filters = []


render()

initActions()

}