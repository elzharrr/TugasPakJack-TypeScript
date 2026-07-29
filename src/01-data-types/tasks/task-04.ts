/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type library = {
    ISBN : number,
    Title: string,
    author: string,
    totalpages: number,
    category: string,
    available: boolean
}

const book1 = {
    ISBN : 65455,
    Title: "Orang-orangan",
    author: "elzhar",
    totalpages: 123,
    category: "Fantasy",
    available: true
}

const book2 = {
    ISBN : 7564,
    Title: "Dia",
    author: "elzhar",
    totalpages: 142,
    category: "Romance",
    available: true
}

const book3 = {
    ISBN : 2531 ,
    Title: "Kamu",
    author: "elzhar",
    totalpages: 6452,
    category: "Slice of Life",
    available: false
}

const book = [book1,book2,book3]
book.forEach(book => {
    console.log(book)
});