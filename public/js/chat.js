let msg = document.getElementById("msg");

const server = "http://localhost:8000";
let id;
const msgList = [];

readId();
function writeMsg() {
    fetch(server + "/write", {
        method: "POST",
        body: JSON.stringify({
            text: msg.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    msg.value = "";
}

async function readMsg() {
    const response = await fetch(server + "/read/" + id);
    const movies = await response.json();
    console.log(movies);
}

async function readId() {
    const response = await fetch(server + "/id");
    id = parseInt((await response.json()).id);
}

function randMsg() {
    let rand = parseInt(Math.floor(Math.random() * (id + 1)));
    msgList.push(rand);
    if(msgList.length < 3) randMsg();
}