import express from "express";
import createHomePageTeamplate from "./views/index.js";
import BOOKS_DATA from "./data/data.js";
import CreateListTeamplate from "./views/list.js";

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

   res.send(`<li>${title}, ${author}</li>`);
});

app.listen(3000, () => {
    console.log("App listening on port 3000");
});