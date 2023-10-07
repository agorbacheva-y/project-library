const bookArray = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    rating: 4.5,
    description:
      'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
    image: './books-images/to-kill-a-mockingbird.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Science Fiction',
    rating: 4.4,
    description:
      'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
    image: './books-images/1984.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
    image: './books-images/pride-and-prejudice.jpg'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    rating: 4,
    description:
      'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    rating: 4.6,
    description:
      'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
    image: './books-images/the-hobbit.jpg'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    rating: 4.7,
    description:
      'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
    image: "./books-images/harry-potter-and-the-sorcerer.jpg"
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    rating: 4.1,
    description:
      'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
    image: './books-images/moby-dick.jpg'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    rating: 4.55,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/the-lord-of-the-rings.jpg'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    genre: 'Horror',
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'Fantasy',
    rating: 4.15,
    description:
      'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
    image: './books-images/the-chronicles-of-narnia.jpg'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    genre: 'Mystery',
    rating: 3.8,
    description:
      'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    genre: 'Science Fiction',
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    genre: 'Mystery',
    rating: 4.1,
    description:
      'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    genre: 'Dystopian',
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: './books-images/unknown.jpg'
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    genre: 'Science Fiction',
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry',
    year: 1993,
    genre: 'Dystopian',
    rating: 4.12,
    description:
      'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
    image: './books-images/unknown.jpg'
  },
];

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
          <button class="card__btn" onClick="addToFaves('${book.title}')">
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
        </div>
      </div>
      <img class="card__img" src=${book.image} alt=${book.title} >
    </div>

    <div class="overlay"> 
      <p>${book.description}</p>
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

// Add book to fave list when click on heart
const addToFaves = (item) => {
  const heartIcon = document.getElementsByClassName("fa-heart");
  const index = bookArray.findIndex((b) => b.title === item);

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

  //!!! I get a syntax error when i click on the heart for only two of the
  // books (Harry Potter and Hitchhiker's Guide) and therefore the hearts
  // do not change to solid color. I cannot figure out why this happens ???
  
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