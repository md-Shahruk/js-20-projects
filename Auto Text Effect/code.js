
const autoText = document.querySelector(".container");


const text = ["Learner.", "Player.", "Youtuber."];
let textIndex = 0;
let updateIndex = 0;


function updateText(){
    updateIndex ++;
    autoText.innerHTML = ` <h1>I am a ${text[textIndex].slice(0,updateIndex)}</h1>`;
    setTimeout(updateIndex, 400);
    
    if(updateIndex === text[textIndex].length){
        textIndex ++;
        updateIndex = 0;
    }
    setTimeout(updateText,200);
}
updateText();