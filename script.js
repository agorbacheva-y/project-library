// Initialize empty array to hold favorites
const faveBooks = [];

// Get references to html elements
const container = document.getElementById("container");
const genre = document.getElementById("filter__genre--dropdown");
const date = document.getElementById("sort__date--dropdown");
const favorites = document.getElementsByClassName("filter__fave--btn");
const showAll = document.getElementsByClassName("filter__all--btn");
const faveBtn = document.getElementsByClassName("card__btn");
const twentyFirst = document.getElementsByClassName("filter__twentyFirstCentury--btn");
const searchBar = document.getElementById("search");

// Function to load cards
const loadBooks = (array) => {
  container.innerHTML="";

  array.forEach((book) => {
    container.innerHTML += `
    <div class="card">
      
      <div class="card__info">
        <div>
          <button class="card__btn" onClick='addToFaves("${book.title.replace("'", "")}")'>
            <i class="fa-regular fa-heart"></i>
          </button>
          <h3>${book.title}</h3>
          <p>by ${book.author}</p>
        </div>

        <div class="card__info--deets">
          <p>Year: ${book.year}</p>
          <p>Rating: ${book.rating}</p>
        </div>

        <div>
          <p>${book.genre}</p>
          <p class="desc">${book.description}</p>
        </div>
      </div>
      <img class="card__img" src=${book.image} alt=${book.title} >
    </div>
    `;
  });

};

// Filter by genre
const filterGenre = () => {
  const value = genre.value;

  if (value === "all") {
    loadBooks(bookArray);
  } else  {
    const filteredGenreList = bookArray.filter((book) => book.genre === value);
    loadBooks(filteredGenreList);
    console.log(filteredGenreList);
  }
};
console.log(bookArray)

// Add book to fave list when click on heart
const addToFaves = (item) => {
  const heartIcon = document.getElementsByClassName("fa-heart");
  console.log(bookArray);
  console.log(item.toString());
  const index = bookArray.findIndex((book) => book.title.replace("'", "") === item);

  // add book title to faveBooks array
  if (faveBooks.includes(item)) {
    return;
  } else {
    faveBooks.push(item);
  }
  console.log(faveBooks);

  // change regular heart to solid heart if title is in the faveBooks array
  for (let i = heartIcon.length - 1; i >= 0; i--) {
    if (faveBooks.includes(item)) {
      heartIcon[index].classList.remove("fa-regular");
      heartIcon[index].classList.add("fa-solid");
    }
  }

// !!! I get a syntax error when i click on the heart for only two of the
// books (Harry Potter and Hitchhiker's Guide) and therefore the hearts
// do not change to solid color. I cannot figure out why this happens ???
// I looked over the array, no syntax errors found. i looked over the function, no
// errors I could find that would affect just these two books...

// DEBUG: apostrophe in book title was causing syntax error
// SOLUTION: remove apostrophe from title when adding to faves list 
  
};

// Filter favorites btn
const filterFave = () => {
  const filteredFaveList = bookArray.filter((book) => faveBooks.includes(book.title));
  const heartIcon = document.getElementsByClassName("fa-heart");

  loadBooks(filteredFaveList);

  // show solid heart for filtered favorited books
  filteredFaveList.forEach(() => {
    for (let i = 0; i < filteredFaveList.length; i++) {
      heartIcon[i].classList.remove("fa-regular");
      heartIcon[i].classList.add("fa-solid");
    }
  });
};

// Show all (btn next to favorites btn)
const filterAll = () => {
  loadBooks(bookArray);
};

// Sort alphabetically by author
const sortAuthor = () => {
  const orderedAuthor = bookArray.sort(function(a, b) {
    return a.author.localeCompare(b.author);
  })
  loadBooks(orderedAuthor);
};

// Sort alphabetically by title
const sortTitle = () => {
  const orderedTitle = bookArray.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  })
  loadBooks(orderedTitle);
};

// Filter 21st century
const filterTwentyFirst = () => {
  const filteredTwentyFirstList = bookArray.filter((book) => book.year >= 2000);
  loadBooks(filteredTwentyFirstList);
};

// Function to filter and sort books by date and rating and abc
const sortDate = () => {
  const value = date.value;

if (value === "old to new") {
    const orderedOld = bookArray.sort((a, b) => a.year - b.year);
    loadBooks(orderedOld);
  } else if (value === "new to old") {
    const orderedNew = bookArray.sort((a, b) => b.year - a.year);
    loadBooks(orderedNew);
  } else if (value === "highest") {
    const orderedHighest = bookArray.sort((a, b) => b.rating - a.rating);
    loadBooks(orderedHighest);
  } else {
    const orderedLowest = bookArray.sort((a, b) => a.rating - b.rating);
    loadBooks(orderedLowest);
  }
};

// Search bar
const search = () => {
  const searchInput = searchBar.value.toLowerCase();
  const filteredOutput = bookArray.filter((book) => {
    const matchTitle = book.title.toLowerCase().includes(searchInput);
    const matchAuthor = book.author.toLowerCase().includes(searchInput);
    return matchTitle || matchAuthor;
  });

  loadBooks(filteredOutput);
};

// Load all cards
loadBooks(bookArray);

// Apply event listeners
genre.addEventListener("change", filterGenre);
date.addEventListener("change", sortDate);
favorites[0].addEventListener("click", filterFave);
twentyFirst[0].addEventListener("click", filterTwentyFirst);
showAll[0].addEventListener("click", filterAll);
searchBar.addEventListener("input", search);
