import BOOKS_DATA from "../data/data.js";
import createBookTeamplate from "./book.js";

const CreateListTeamplate = (books) => /*html*/`
    <ul>
        ${books.map((book) => createBookTeamplate(book)).join('')}
    </ul>
`;

export default CreateListTeamplate;