window.addEventListener("load", init)

function init() {

    const KEPLISTA = ["kepek/DSC7365.jpg", "kepek/DSC7515.jpg", "kepek/DSC7444.jpg", "kepek/DSC7025.jpg"];

    const KEPEKHELYE = document.querySelector("article");
    console.log(KEPEKHELYE);

    for(let i=0; i<KEPLISTA.length; i++) {
        KEPEKHELYE.innerHTML += `<div><img src="${KEPLISTA[i]}"></img></>`;
    }
    
    const KISKEPEK = document.querySelectorAll("article div img");

    for(let i=0; i<KISKEPEK.length; i++) {
        KISKEPEK[i].addEventListener("click",csere);;
    }

    function csere() {
        console.log(event.target.src);
        const NAGYKEP = document.querySelector("section div img");
        console.log(NAGYKEP);
        NAGYKEP.src=event.target.src;
    }

    const GOMBOK = document.querySelectorAll("button");

}

