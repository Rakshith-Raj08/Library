// Define the Book class
class Book {
    constructor(title, author, description) {
        this.title = title;
        this.author = author;
        this.description = description;
    }

    render() {
        return `
            <div class="book">
                <h2>${this.title}</h2>
                <p><strong>Author:</strong> ${this.author}</p>
                <p>${this.description}</p>
                <button onclick="deleteBook(this)">Delete</button>
            </div>
        `;
    }
}

// Handle form submission to add a new book
document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const description = document.getElementById('description').value;

    const newBook = new Book(title, author, description);
    document.getElementById('books').innerHTML += newBook.render();

    // Clear the form
    document.getElementById('book-form').reset();
});

// Function to delete a book
function deleteBook(button) {
    button.parentElement.remove();
}
