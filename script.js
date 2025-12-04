let books = [];

const IMAGE_URL = "https://m.media-amazon.com/images/I/712I8P3inL._SY522_.jpg";

// Add Book
function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;

  if (!title || !author) {
    alert("Please fill all fields");
    return;
  }

  const newBook = {
    title,
    author,
    category,
    imageUrl: IMAGE_URL
  };

  books.push(newBook);
  displayBooks(books);

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
}

// Render Books
function displayBooks(list) {
  const container = document.getElementById("bookContainer");
  container.innerHTML = "";

  list.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${book.imageUrl}" alt="Book Image">
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Category: ${book.category}</p>
      <button class="delete-btn" onclick="deleteBook(${index})">Delete</button>
    `;

    container.appendChild(card);
  });
}

// Delete Book
function deleteBook(index) {
  books.splice(index, 1);
  displayBooks(books);
}

// Sorting
function sortAZ() {
  books.sort((a, b) => a.title.localeCompare(b.title));
  displayBooks(books);
}

function sortZA() {
  books.sort((a, b) => b.title.localeCompare(a.title));
  displayBooks(books);
}

// Filtering
function filterBooks() {
  const selected = document.getElementById("filter").value;

  if (selected === "All") {
    displayBooks(books);
  } else {
    const filtered = books.filter(book => book.category === selected);
    displayBooks(filtered);
  }
}
