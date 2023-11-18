// Identifica a tecla pressionada em busca de uma resposta

corpo.addEventListener("keydown", (e) => {
    if (!e.repeat) {
        console.log(`Key "${e.key}" pressed [event: keydown]`);
        resposta += e.key;
        if(resposta == "sadia"){
            alert("ACERTOU");
        }
    } else {
        console.log(`Key "${e.key}" repeating [event: keydown]`);
    }
});


// Cria um elemento dentro do HTMl passando tambem o valor do id
function addElement(){
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "legal");

    // and give it some content
    const newContent = document.createTextNode("Salve Galerinha");

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("teste");
    document.body.insertBefore(newDiv, currentDiv);
}


/* Funçao sleep, passa-se o parametro em ms e após esse tempo a função resolve
sera concluida */
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}


/* Identifica o mouse em cima de um elemento e chama a função que esperará
o tempo em ms para executar a parte a ser mostrada*/
var mostrado = true;
    cont2.addEventListener("mouseover", (event) => {
        sleep(2000).then(() => {
        if(mostrado)
            addElement();
            mostrado = false;
        })
    });