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
    
    const ratingBgc = thisBooksList.determineRatingBgc(rating)
    const ratingWidth = book.rating * 10
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
            if(!book.details[filter]){
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

determineRatingBgc = function

determineRatingBgc(rating){
    let background = '';

    if(rating < 6){
        background = 'linear-gradient(to bottom, #fefcea 0%, #f1da36 100%)'
    }
    else if(rating > 6 && rating <= 8){
        background = 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)'
    }
    else if(rating > 8 && rating <=9){
        background = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)'
    }
    else{
        background = 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)'
    }
    return background
}


render()

initActions()

}