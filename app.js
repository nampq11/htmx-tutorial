import express from "express";
import createHomePageTeamplate from "./views/index.js";
import BOOKS_DATA from "./data/data.js";
import CreateListTeamplate from "./views/list.js";
import createBookTeamplate from "./views/book.js";
import createEditFormTeamplate from "./views/edit.js";

const app = express();
app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send(createHomePageTeamplate());
});

app.get('/books', (req, res) => {
    res.send(CreateListTeamplate(BOOKS_DATA));
})

app.post('/books', (req, res) => {
   const { title, author }  = req.body;
   const id = Math.random().toString();
   if (title && author) {
        BOOKS_DATA.push({ id, title, author });
        res.redirect('/books/' + id);
    }
});

app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    const book = BOOKS_DATA.find(book => book.id === id);

    res.send(createBookTeamplate(book));
});

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const idx = BOOKS_DATA.findIndex(book => book.id === id);
    BOOKS_DATA.splice(idx, 1);

    res.send();
});

app.get("/books/edit/:id", (req, res) => {
    const book = BOOKS_DATA.find(book => book.id === req.params.id);

    res.send(createEditFormTeamplate(book));
});

app.put("/books/:id", (req, res) => {
    const { title, author } = req.body;
    const { id } = rGreateq.params;

    const newBook = { id, title, author };

    const idx = BOOKS_DATA.findIndex(book => book.id === id);
    BOOKS_DATA[idx] = newBook;

    res.send(createBookTeamplate(newBook));
})

app.post('/books/search', (req, res) => {
    const text = req.body.search.toLowerCase();

    const books = BOOKS_DATA.filter(book => book.title.toLowerCase().includes(text));

    res.send(CreateListTeamplate(books));
});

app.listen(3000, () => {
    console.log("App listening on port 3000");
});