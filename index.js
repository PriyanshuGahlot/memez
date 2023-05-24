let nextBtn = document.getElementById("nextBtn");
let shareBtn = document.getElementById("shareBtn");
let image = document.getElementById("image");

let currMeme = "";

fetch("https://meme-api.com/gimme")
    .then(responce=>responce.json())
    .then(data=>{
        image.src=data.url;
        currMeme = data.url;
    });

nextBtn.addEventListener("click",nextMene);
shareBtn.addEventListener("click",shareMene);

function nextMene(){
    fetch("https://meme-api.com/gimme")
    .then(responce=>responce.json())
    .then(data=>{
        image.src = data.url;
        currMeme = data.url;
    });
}

function shareMene(){
    // if(navigator.share){
    //     navigator.share({text:currMeme})
    // }
    window.open("https://wa.me/?text="+"look at this meme "+currMeme);
}