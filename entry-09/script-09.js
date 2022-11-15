
let highlightClassA = 'cool-red';
let textBlockA = document.querySelector ('.warm-red');
let switchButtonA = document.querySelector('#one');

switchButtonA.onclick = () => { 
	textBlockA.classList.toggle(highlightClassA); 
};




let highlightClassB = 'warm-blue';
let textBlockB = document.querySelector ('.cool-blue');
let switchButtonB = document.querySelector('#two');

switchButtonB.onclick = () => {
    textBlockB.classList.toggle(highlightClassB);
};



let highlightClassC = 'cool-yellow';
let textBlockC = document.querySelector ('.warm-yellow');
let switchButtonC = document.querySelector('#three');

switchButtonC.onclick = () => {
    textBlockC.classList.toggle(highlightClassC);
};