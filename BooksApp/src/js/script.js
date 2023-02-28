{
    'use strict';
  
    const select = {
      containerOf: {
        book: '.books-list',
        filters: '.filters',
        images: '.book__image'
      },
    };
  
    const templates = {
      bookTemplate: Handlebars.compile(document.querySelector('#template-book').innerHTML)
    };
  
    class BooksList {
      constructor() {
        const thisBooksList = this;
        thisBooksList.initData();
        thisBooksList.getElements();
        thisBooksList.render();
        thisBooksList.initActions();
        thisBooksList.filterBooks();
      }
  
      initData() {
        const thisBooksList = this;
        this.data = dataSource.books;
        thisBooksList.favoriteBooks = [];
        thisBooksList.filters = [];
      }
  
      getElements() {
        const thisBooksList = this;
        thisBooksList.bookContainer = document.querySelector(select.containerOf.book);
        thisBooksList.booksFilter = document.querySelector(select.containerOf.filters);
      }
  
      render() {
        const thisBooksList = this;
  
        for (let book of thisBooksList.data) {
          /* generate HTML based on template */
          const generatedHTML = templates.bookTemplate({
            id: book.id,
            price: book.price,
            name: book.name,
            image: book.image,
            rating: book.rating,
            details: book.details,
            ratingWidth: book.rating * 10,
            ratingBgc: thisBooksList.determineRatingBgc(book.rating)
          });
  
          console.log('generatedHTML', generatedHTML);
          /* Create element using utilis.createElementFromHTML */
          thisBooksList.element = utils.createDOMFromHTML(generatedHTML);
  
          /* add element to book container */
          thisBooksList.bookContainer.appendChild(thisBooksList.element);
        }
      }
  
      initActions() {
        const thisBooksList = this;
  
        thisBooksList.bookContainer.addEventListener('dblclick', function (event) {
          event.preventDefault();
  
          const image = event.target.offsetParent;
          const bookId = image.getAttribute('data-id');
  
          if (!thisBooksList.favoriteBooks.includes(bookId)) {
            image.classList.add('favorite');
            thisBooksList.favoriteBooks.push(bookId);
          }
          else {
            image.classList.remove('favorite');
            const indexOfBooks = thisBooksList.favoriteBooks.indexOf(bookId);
            thisBooksList.favoriteBooks.splice(indexOfBooks, 1);
          }
        });
  
        thisBooksList.booksFilter.addEventListener('change', function (callback) {
          const clickedElement = callback.target;
          if (clickedElement.tagName == 'INPUT' && clickedElement.type == 'checkbox' && clickedElement.name == 'filter') {
            if (clickedElement.checked) {
              thisBooksList.filters.push(clickedElement.value);
            }
            else {
              const indexOfFilters = thisBooksList.filters.indexOf(clickedElement.value);
              thisBooksList.filters.splice(indexOfFilters, 1);
            }
            thisBooksList.filterBooks();
          }
        });
      }
  
      filterBooks() {
        const thisBooksList = this;
        for (let book of dataSource.books) {
          let shouldBeHidden = false;
  
          for (let filter of thisBooksList.filters) {
            if (!book.details[filter]) {
              shouldBeHidden = true;
              break;
            }
          }
          const bookImage = thisBooksList.bookContainer.querySelector('.book__image[data-id="' + book.id + '"]');
          if (shouldBeHidden == true) {
            bookImage.classList.add('hidden');
          }
          else {
            bookImage.classList.remove('hidden');
          }
        }
      }
  
      determineRatingBgc(rating) {
        let background = '';
  
        if (rating < 6) {
          background = 'linear-gradient(to bottom, #fefcea 0%, #f1da36 100%)';
        }
        else if (rating > 6 && rating <= 8) {
          background = 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
        }
        else if (rating > 8 && rating <= 9) {
          background = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
        }
        else {
          background = 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
        }
        return background;
      }
    }
  
    new BooksList();
  
  }