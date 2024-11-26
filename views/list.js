import BOOKS_DATA from "../data/data.js";
import createBookTeamplate from "./book.js";

const CreateListTeamplate = () => /*html*/`
    <ul>
        ${BOOKS_DATA.map((book) => createBookTeamplate(book)).join('')}
    </ul>
`;

export default CreateListTeamplate;