const createEditFormTeamplate = (book) => /*html*/`
    <form>
        <input 
            name="title"
            placeholder="title"
            value="${book.title}" 
            type="text"
        />
        <input
            name="author"
            placeholder="author"
            value="${book.author}" 
            type="text"
        />
        <button>Confirm</button>
    </form>
`;

export default createEditFormTeamplate;