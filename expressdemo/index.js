const express = require("express");

const app = express();
const bodyParser = require("body-parser");

// parse application/json
app.use(bodyParser.json())
/*
app.use((req, res, next) => {
    console.log("Hellooooo")
    next();
})*/

const books = [{
    id: 1,
    name: "The Alchemist",
    author: "Paulo Choelo",
    language: "Portugeese"
}, {
    id: 2,
    name: "Brida",
    author: "Paulo Choelo",
    language: "Portugeese"
}, {
    id: 3,
    name: "The monk who sold ferrari",
    author: "Robin Sharma",
    language: "English"
}];

app.get("/books", (req, res) => {
    res.json({ data: books })
})

app.get("/book/:id", (req, res) => {
    let book = books.filter((item) => {
        return item.id == req.params.id;
    })
    res.json({ data: book })
})

app.get("/book", (req, res) => {

    let book = books.filter((item) => {
        return item.language == req.query.language;
    })
    res.json({ data: book })
})

app.post("/books", (req, res) => {
    books.push(req.body);
    res.json({ message: "Book Added" })

})

app.use(express.static('public'))

app.listen(3000, () => {
    console.log("Server listening  on port 3000")
})