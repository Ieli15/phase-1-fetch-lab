// fetchBooks function to fetch data from the API and pass it to renderBooks
function fetchBooks() {
  // Return the fetch call so that tests can access it
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json()) // Convert the response to JSON
    .then((books) => {
      renderBooks(books); // Pass the JSON data to renderBooks
    })
    .catch((error) => console.error("Error fetching books:", error));
}

// renderBooks function to display book titles in the DOM
function renderBooks(books) {
  // Select the DOM element where the list of books will be displayed
  const booksList = document.getElementById("books");

  // Iterate over the books array and create list items for each book
  books.forEach((book) => {
    const li = document.createElement("li"); // Create a new list item element
    li.textContent = book.name; // Set the list item text to the book name
    booksList.appendChild(li); // Append the list item to the booksList
  });
}

// Call fetchBooks when the script is loaded
fetchBooks();
