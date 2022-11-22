
let highlightClassA = 'red-change';
let textBlockA = document.querySelector ('.red');
let switchButtonA = document.querySelector('#one');

switchButtonA.onclick = () => { 
	textBlockA.classList.toggle(highlightClassA); 
};



//
let highlightClassB = 'blue-change';
let textBlockB = document.querySelector ('.blue');
let switchButtonB = document.querySelector('#two');

switchButtonB.onclick = () => {
    textBlockB.classList.toggle(highlightClassB);
};


//
let highlightClassC = 'yellow-change';
let textBlockC = document.querySelector ('.yellow');
let switchButtonC = document.querySelector('#three');

switchButtonC.onclick = () => {
    textBlockC.classList.toggle(highlightClassC);
};


//
let highlightClassD = 'green-change';
let textBlockD = document.querySelector ('.green');
let switchButtonD = document.querySelector('#four');

switchButtonD.onclick = () => {
    textBlockD.classList.toggle(highlightClassD);
}


//
let highlightClassE ='purple-change';
let textBlockE = document.querySelector ('.purple');
let switchButtonE = document.querySelector ('#five');

switchButtonE.onclick = () => {
    textBlockE.classList.toggle(highlightClassE);
}

//
let highlightClassF = 'orange-change';
let textblockF = document.querySelector ('.orange');
let switchButtonF = document.querySelector ('#six');

switchButtonF.onclick = () => {
    textblockF.classList.toggle(highlightClassF);
}
