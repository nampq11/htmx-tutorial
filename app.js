import express from "express";
import createHomePageTeamplate from "./views/index.js";
import BOOKS_DATA from "./data/data.js";
import CreateListTeamplate from "./views/list.js";
import createBookTeamplate from "./views/book.js";

const app = express();
app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send(createHomePageTeamplate());
});

app.get('/books', (req, res) => {
    res.send(CreateListTeamplate());
})

app.post('/books', (req, res) => {
   const { title, author }  = req.body;
   const id = Math.random().toString();
   BOOKS_DATA.push({ id, title, author });

   res.redirect('/books/' + id);
});

app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    const book = BOOKS_DATA.find(book => book.id === id);

    res.send(createBookTeamplate(book));
});

app.listen(3000, () => {
    console.log("App listening on port 3000");
});