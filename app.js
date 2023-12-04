const express = require("express");
const fs = require("fs");

const stat = require("./stat.json");
const app = express();
const port = 8000;

let fileId = stat.id;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());

app.get("/", (req, res) => {
    res.send("");
});

app.post("/write", (req, res) => {
    fs.writeFile(`./data/${++fileId}.json`, JSON.stringify(req.body), function (err) {
        if (err) throw err;
    });
    refreshStat();
    res.json({ id: `${fileId}` });
    res.end;
});

app.get("/read/:id", (req, res) => {
    let file = require(`./data/${req.params.id}.json`);
    res.json(file);
    res.end();
});

app.get("/id", (req, res) => {
    res.json({ id: `${fileId}` });
    res.end();
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

function refreshStat() {
    fs.writeFile('stat.json', `{"id": ${fileId}}`, function (err) {
        if (err) throw err;
    });
}