const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="book-list">
          <!-- book list here later -->
           <button hx-get="/books" hx-target=".book-list">Show books</button>
           <!-- <button hx-get="/books" hx-swap="beforeend", hx-target=".book-list"></button> -->
           <!-- <button hx-get="/books" hx-swap="afterend", hx-target=".book-list"></button> -->
           <!-- <button hx-get="/books" hx-swap="outerHTML", hx-target=".book-list"></button> -->
            <!-- <button hx-get="/books" hx-swap="innerHTML", hx-target=".book-list"></button> -->
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <form>
            <input 
              id = "title"
              type="text"
              name="title"
              placeholder="title"
            />
            <input 
              id = "author"
              type="text"
              name="author"
              placeholder="author"
            />
            <button 
              hx-post="./books"
              hx-target=".book-list ul" 
              hx-swap="beforeend"
              hx-on:click="Console.log('new book added', event)"
              hx-on::after-request="document.querySelector('form').reset()"
              >Add</button>
          </form>
          <!-- form template here later -->
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;