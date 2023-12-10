

let msg = document.getElementById("msg");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");

const server = "http://localhost:8000";
let id;
let msgList = [1,2,3];
randMsg();

function writeMsg() {
    let successMsg = document.getElementById("success-animation");
    successMsg.style.display = 'block';

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
    
    setTimeout(function() {
        location.reload();
    }, 3000);
}

function readMsg() {
    fetch(server + "/read/" + msgList[0])
    .then((response) => response.json())
    .then((result) => {
        text1.textContent = result.text;
    });
    fetch(server + "/read/" + msgList[1])
    .then((response) => response.json())
    .then((result) => {
        text2.textContent = result.text;
    });
    fetch(server + "/read/" + msgList[2])
    .then((response) => response.json())
    .then((result) => {
        text3.textContent = result.text;
    });
}

function readId() {
    fetch(server + "/id")
    .then((response) => response.json())
    .then((result) => {
        id = parseInt(result.id);
    });
}

function randMsg() {
    fetch(server + "/id")
    .then((response) => response.json())
    .then((result) => {
        id = parseInt(result.id);
        msgList = [];
        for(let i = 0; msgList.length < 3; ++i) {
            let rand;
            rand = parseInt(Math.floor(Math.random() * id));
            rand++;
            let isDup = false;
            for(let j = 0; j < msgList.length; ++j) {
                if(rand == msgList[j]) {
                    isDup = true;
                    break;
                }
            }
            if(isDup) continue;
            msgList.push(rand);
        }
        readMsg();
    });
}