
var cont = document.querySelector("#contador");
let novo = document.querySelector("#novo");
var resposta = "";

function addElement(){
    const newDiv = document.createElement("div");
    const newSpan = document.createElement("span");
    newDiv.setAttribute("id", "arrombado");
    newSpan.setAttribute("id", "querClicar");

    // and give it some content
    const newContent = document.createTextNode("Não clica seu arrombado");

    // add the text node to the newly created div
    newDiv.appendChild(newSpan);
    newSpan.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentElement = document.getElementById("novo");
    document.body.insertBefore(newDiv, currentElement);
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

var mostrado = true;
cont2.addEventListener("mouseover", (event) => {
    sleep(3500).then(() => {
        if(mostrado)
            addElement();
            mostrado = false;
    })
});