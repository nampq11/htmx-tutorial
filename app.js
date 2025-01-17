import express from "express";
import createHomePageTeamplate from "./views/index.js";

const app = express();
app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send(createHomePageTeamplate());
});

app.listen(3000, () => {
    console.log("App listening on port 3000");
});