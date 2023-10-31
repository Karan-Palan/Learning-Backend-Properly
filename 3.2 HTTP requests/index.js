import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1>Hello</h1>");
})

app.get("/about", (req,res) => {
    res.send("<h1>Hello1</h1>");
})

app.get("/contact", (req,res) => {
    res.send("<h1>Hello2</h1>");
})

app.listen(port, () => {
    console.log(`Server has started on ${port}`);
});

