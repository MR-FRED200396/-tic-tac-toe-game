'use strict'

const player1Switch = document.querySelector('.player1');
const player2Switch = document.querySelector('.player2');
const allBox = document.querySelectorAll('.box');
const arrayForComparisonWithArrayWinner = [[1,2,3]]
// [
    // ,[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
// ]
let arrayCreateDeterminedWinner = []

function callsFunctionCreatorFunction (value){
    creatorFunction(+value)
}

function creatorFunction (boxValue){
    const createElementP= document.createElement('p');
    allBox[boxValue - 1].style.backgroundColor = 'white';
        if (player1Switch.checked == true) {
            createElementP.innerHTML = 'X';
            player2Switch.checked = 'checked';
            arrayCreateDeterminedWinner.push(boxValue)
        } else if (player2Switch.checked == true) {
            createElementP.innerHTML = 'O';
            player1Switch.checked = 'checked';
            arrayCreateDeterminedWinner.push(boxValue * 10)
        }
    allBox[boxValue - 1].append(createElementP);

    if(arrayCreateDeterminedWinner.length === 5){determinedWinnerX(arrayCreateDeterminedWinner)
    }else if(arrayCreateDeterminedWinner.length === 7){determinedWinnerX(arrayCreateDeterminedWinner)
    }else if(arrayCreateDeterminedWinner.length === 9){determinedWinnerX(arrayCreateDeterminedWinner)};
}

function determinedWinnerX(array){
  let winner = [];
  let i = 0;
  while(i < array.length){
    winner.push(array[i])
    i += 2;
  }

  comparison(winner)
}
// let count = 0;

// function comparison(winner){
//     for(let i = 0; i < arrayForComparisonWithArrayWinner.length; i++){
//         for(let k = 0; k < arrayForComparisonWithArrayWinner[i].length; k++){
//             if(winner.includes(arrayForComparisonWithArrayWinner[i][k])){
//               while(count <= 2){
//                 count++;
//               }
//               if(k === 2)count = 0;
//             };
//         }
//     }
//     if(count === 3)alertWinnerX()
// }
function comparison(winner){
    let count = 0;
    for(let i = 0; i < arrayForComparisonWithArrayWinner.length; i++){
        for(let k = 0; k < arrayForComparisonWithArrayWinner[i].length; k++){
            if(winner.includes(arrayForComparisonWithArrayWinner[i][k])){
            count += 1
            console.log(111111);
            console.log(count);
            };
        }
        console.log(count);
        console.log(winner);
    }
    if(count === 3)alertWinnerX()
}

function alertWinnerX(){
    alert('Player 1 (x) Winner')
    // location.reload();    
}


// for(let i = 0; i<3; i++){
//     for(let k = 0; k<3; k++){
//         console.log(i + 'i' +  k + "k");
//     }
// }

    // [1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2],
    // [4,5,6],[4,6,5],[5,6,4],[5,4,6],[6,5,4],[6,4,5],
    // [7,8,9],[7,9,8],[8,7,9],[8,9,7],[9,7,8],[9,8,7],
    // [1,4,7],[1,7,4],[4,1,7],[4,7,1],[7,1,4],[7,4,1],
    // [2,5,8],[2,8,5],[5,2,8],[5,8,2],[8,2,5],[8,5,2],
    // [3,6,9],[3,9,6],[6,9,3],[6,3,9],[9,3,6],[9,6,3],
    // [1,5,9],[1,9,5],[5,9,1],[5,1,9],[9,1,5],[9,5,1],
    // [3,5,7],[3,7,5],[5,3,7],[5,7,3],[7,3,5],[7,5,3]