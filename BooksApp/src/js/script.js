
'use strict'

render() {
    const thisBooksList = this
    
    for(let book in thisBooksList){
     /* generate HTML based on template */
     const generatedHTML = templates.bookTemplate({
        id: book.id,
        rice: book.price,
        name: book.name,
        image: book.image,
        rating: book.rating,
        details: book.details
     })
     // console.log(generatedHTML)
     /* Create element using utilis.createElementFromHTML */
     thisBooksList.element = utils.createDOMFromHTML(generatedHTML);
     /* Find container of menu */
     const bookContainer = document.querySelector(select.containerOf.book);
     // console.log(menuContainer)
     /* add element to menu container */ 
     bookContainer.appendChild(thisBooksList.element);
    }
}
