console.log ('test')
let board= [];
let winner = false
let play = ((clickedId)=>{
    let clickedElement = document.getElementById(clickedId)
    let playerSpan = document.getElementById('player');
    if (clickedElement.innerText === 'X' || clickedElement.innerText === 'O'){
        alert ("Please select another square")
    }
    if (playerSpan.innerText === 'X' && clickedElement.innerText =='' ){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    }
    if (playerSpan.innerText === 'O'&& clickedElement.innerText ==''){
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O'
    }
    let tL = board[0];
    let tC = board[1];
    let tR = board[2];
    let mL = board[3];
    let mC = board[4];
    let mR = board[5];
    let bL = board[6];
    let bC = board[7];
    let bR = board[8];

    if (tL !== undefined && tL === tC && tL === tR){ //across the top
        alert (`${tL} is the winner`);
        winner = true;
    }
    if (tL !== undefined && tL === mL && tL === bL){ //down the left
        alert (`${tL} is the winner`);
        winner = true;
    }
    if (tL !== undefined && tL === mC && tL === bR){ //TL to BR
        alert (`${tL} is the winner`);
        winner = true;
    }
    if (tC !== undefined && tC === mC && tC === bC){ // down the middle
        alert (`${tC} is the winner`);
        winner = true;
    }
    if (mL !== undefined && mL === mC && mL === mR){ // across the middle
        alert (`${mL} is the winner`);
        winner = true;
    }
    if (bL !== undefined && bL === bC && bL === bR){ // across the bottom
        alert (`${bL} is the winner`);
        winner = true;
    }
    if (tR !== undefined && tR === mC && tR === bL){ // TR TO BL
        alert (`${tR} is the winner`);
        winner = true;
    }
    if (tR !== undefined && tR === mR && tR === bR){ // Down the right
        alert (`${tR} is the winner`);
        winner = true;
    }
    let boardFull = true;
    for (let i = 0; i <= 8; i++){
        if (board[i] === undefined) {
            boardFull = false;
        }
    }
    if (boardFull === true && winner === false) {
        alert("Cat's game, there is no winner")
    }
});
