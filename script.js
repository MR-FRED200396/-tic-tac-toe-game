const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const box7 = document.querySelector('.box7');
const box8 = document.querySelector('.box8');
const box9 = document.querySelector('.box9');

const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
const objektWiner = {};
let arr = [];
let a = 1;

function f1() {
    let p1 = document.createElement('p');
    box1.style.backgroundColor = 'white';
    if (player1.checked == true) {
        p1.innerHTML = 'X';
        player2.checked = 'checked';
        count1 = 1;
        objektWiner.func1 = count1;
        arr.push(a)
    } else if (player2.checked == true) {
        p1.innerHTML = 'O';
        player1.checked = 'checked';
        objektWiner.func1 = count1;
        arr.push(a)
    }
    box1.append(p1);
    if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 3 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 3 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 3 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 3 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 3 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 3
        ){
        alert("Player 1 (x) WINNER")
        location.reload()
      }else if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 0 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 0 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 0 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 0 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 0 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 0
        ){
            alert("Player 2 (o) WINNER")
            location.reload()
        }else if (arr.length === 9){
            alert("The match ended in a draw")
            location.reload()
        }
    return objektWiner;
}
box1.onclick = f1;


function f2() {
    let div = document.createElement('p');
    box2.style.backgroundColor = 'white';
    if (player1.checked == true) {
        div.innerHTML = 'X';
        player2.checked = 'checked';
        count2 = 1;
        objektWiner.func2 = count2;
        arr.push(a)
    } else if (player2.checked == true) {
        div.innerHTML = 'O';
        player1.checked = 'checked';
        objektWiner.func2 = count2;
        arr.push(a)
    }
    box2.append(div);
    if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 3 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 3 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 3 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 3 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 3 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 3
        ){
        alert("Player 1 (x) WINNER")
        location.reload()
      }else if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 0 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 0 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 0 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 0 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 0 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 0
        ){
            alert("Player 2 (o) WINNER")
            location.reload()
        }else if (arr.length === 9){
            alert("The match ended in a draw")
            location.reload()
        }
    return objektWiner;
}
box2.onclick = f2;

function f3() {
    let div = document.createElement('p');
    box3.style.backgroundColor = 'white';
    if (player1.checked == true) {
        div.innerHTML = 'X';
        player2.checked = 'checked';
        count3 = 1;
        objektWiner.func3 = count3;
        arr.push(a)
    } else if (player2.checked == true) {
        div.innerHTML = 'O';
        player1.checked = 'checked';
        objektWiner.func3 = count3;
        arr.push(a)
    }
    box3.append(div);
    if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 3 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 3 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 3 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 3 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 3 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 3
        ){
        alert("Player 1 (x) WINNER")
        location.reload()
      }else if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 0 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 0 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 0 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 0 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 0 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 0
        ){
            alert("Player 2 (o) WINNER")
            location.reload()
        }else if (arr.length === 9){
            alert("The match ended in a draw")
            location.reload()
        }
    return objektWiner;
}
box3.onclick = f3;

function f4() {
    let div = document.createElement('p');
    box4.style.backgroundColor = 'white';
    if (player1.checked == true) {
        div.innerHTML = 'X';
        player2.checked = 'checked';
        count4 = 1;
        objektWiner.func4 = count4;
        arr.push(a)
    } else if (player2.checked == true) {
        div.innerHTML = 'O';
        player1.checked = 'checked';
        objektWiner.func4 = count4;
        arr.push(a)
    }
    box4.append(div);
    if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 3 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 3 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 3 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 3 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 3 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 3
        ){
        alert("Player 1 (x) WINNER")
        location.reload()
      }else if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 0 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 0 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 0 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 0 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 0 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 0
        ){
            alert("Player 2 (o) WINNER")
            location.reload()
        }else if (arr.length === 9){
            alert("The match ended in a draw")
            location.reload()
        }
    return objektWiner;
}
box4.onclick = f4;

function f5() {
    let div = document.createElement('p');
    box5.style.backgroundColor = 'white';
    if (player1.checked == true) {
        div.innerHTML = 'X';
        player2.checked = 'checked';
        count5 = 1;
        objektWiner.func5 = count5;
        arr.push(a)
    } else if (player2.checked == true) {
        div.innerHTML = 'O';
        player1.checked = 'checked';
        objektWiner.func5 = count5;
        arr.push(a)
    }
    box5.append(div);
    if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 3 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 3 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 3 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 3 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 3 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 3
        ){
        alert("Player 1 (x) WINNER")
        location.reload()
      }else if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 0 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 0 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 0 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 0 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 0 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 0
        ){
            alert("Player 2 (o) WINNER")
            location.reload()
        }else if (arr.length === 9){
            alert("The match ended in a draw")
            location.reload()
        }
    return objektWiner;
}
box5.onclick = f5;

function f6() {
    let div = document.createElement('p');
    box6.style.backgroundColor = 'white';
    if (player1.checked == true) {
        div.innerHTML = 'X';
        player2.checked = 'checked';
        count6 = 1;
        objektWiner.func6 = count6;
        arr.push(a)
    } else if (player2.checked == true) {
        div.innerHTML = 'O';
        player1.checked = 'checked';
        objektWiner.func6 = count6;
        arr.push(a)
    }
    box6.append(div);
    if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 3 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 3 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 3 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 3 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 3 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 3
        ){
        alert("Player 1 (x) WINNER")
        location.reload()
      }else if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 0 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 0 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 0 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 0 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 0 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 0
        ){
            alert("Player 2 (o) WINNER")
            location.reload()
        }else if (arr.length === 9){
            alert("The match ended in a draw")
            location.reload()
        }
    return objektWiner;
}
box6.onclick = f6;

function f7() {
    let div = document.createElement('p');
    box7.style.backgroundColor = 'white';
    if (player1.checked == true) {
        div.innerHTML = 'X';
        player2.checked = 'checked';
        count7 = 1;
        objektWiner.func7 = count7;
        arr.push(a)
    } else if (player2.checked == true) {
        div.innerHTML = 'O';
        player1.checked = 'checked';
        objektWiner.func7 = count7;
        arr.push(a)
    }
    box7.append(div);
    if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 3 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 3 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 3 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 3 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 3 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 3
        ){
        alert("Player 1 (x) WINNER")
        location.reload()
      }else if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 0 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 0 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 0 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 0 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 0 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 0
        ){
            alert("Player 2 (o) WINNER")
            location.reload()
        }else if (arr.length === 9){
            alert("The match ended in a draw")
            location.reload()
        }
    return objektWiner;
}
box7.onclick = f7;

function f8() {
    let div = document.createElement('p');
    box8.style.backgroundColor = 'white';
    if (player1.checked == true) {
        div.innerHTML = 'X';
        player2.checked = 'checked';
        count8 = 1;
        objektWiner.func8 = count8;
        arr.push(a)
    } else if (player2.checked == true) {
        div.innerHTML = 'O';
        player1.checked = 'checked';
        objektWiner.func8 = count8;
        arr.push(a)
    }
    box8.append(div);
    if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 3 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 3 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 3 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 3 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 3 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 3
        ){
        alert("Player 1 (x) WINNER")
        location.reload()
      }else if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 0 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 0 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 0 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 0 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 0 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 0
        ){
            alert("Player 2 (o) WINNER")
            location.reload()
        }else if (arr.length === 9){
            alert("The match ended in a draw")
            location.reload()
        }
    return objektWiner;
}
box8.onclick = f8;

function f9() {
    let div = document.createElement('p');
    box9.style.backgroundColor = 'white';
    if (player1.checked == true) {
        div.innerHTML = 'X';
        player2.checked = 'checked';
        count9 = 1;
        objektWiner.func9 = count9;
        arr.push(a)
    } else if (player2.checked == true) {
        div.innerHTML = 'O';
        player1.checked = 'checked';
       objektWiner.func9 = count9;
       arr.push(a)
    }
    box9.append(div);
    console.log(objektWiner);
    if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 3 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 3 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 3 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 3 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 3 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 3 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 3
        ){
        alert("Player 1 (x) WINNER")
        location.reload()
      }else if(
        objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 0 ||
        objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 0 ||
        objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 0 ||
        objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 0 ||
        objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 0 ||
        objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 0 ||
        objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 0
        ){
            alert("Player 2 (o) WINNER")
            location.reload()
        }else if (arr.length === 9){
            alert("The match ended in a draw")
            location.reload()
        }
    return objektWiner;
}
box9.onclick = f9;







// let rezult;
// зробити масив масивів і його перебирати!!!!!!!!!!!!!!!!!!!!!!!!

// function azerty() {
//     async function asyncFunc1() {
//         let a1 = 0;
//         let promise = new Promise(function (rezolve, reject) {
//             function f1() {
//                 let p1 = document.createElement('p');
//                 box1.style.backgroundColor = 'white';
//                 if (player1.checked == true) {
//                     p1.innerHTML = 'X';
//                     player2.checked = 'checked';
//                     a1 = 1;
//                 } else if (player2.checked == true) {
//                     p1.innerHTML = 'O';
//                     player1.checked = 'checked';
//                 }
//                 box1.append(p1);
//                 return a1;
//             }
//             rezolve(f1());
//         });

//         rezult = await promise;
//         console.log(rezult);
//         return rezult;
//     }
//     // console.log(rezult);y NOT WORK!!!!!!!!
//     box1.onclick = asyncFunc1;

//     async function asyncFunc2() {
//         let a2 = 0;
//         let promise2 = new Promise(function (rezolve, reject) {
//             function f2() {
//                 let p1 = document.createElement('p');
//                 box2.style.backgroundColor = 'white';
//                 if (player1.checked == true) {
//                     p1.innerHTML = 'X';
//                     player2.checked = 'checked';
//                     a2 = 1;
//                 } else if (player2.checked == true) {
//                     p1.innerHTML = 'O';
//                     player1.checked = 'checked';
//                 }
//                 box2.append(p1);
//                 return a2;
//             }
//             rezolve(f2());
//         });

//         rezult2 = await promise2;
//         console.log(rezult2);
//         return rezult2;
//     }
//     box2.onclick = asyncFunc2;
// }
// azerty();
// if (qwerty === 1) {
//     alert('sukcesfull');
// }

// function sum() {
//     let b = 2;
//     let sum = qwerty + b;
//     console.log(sum);
// }

// sum();

// 11111111111111111111111111111111111111111111111111111111111111




// else if(
//     objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 2 ||
//     objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 2 ||
//     objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 2 ||
//     objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 2 ||
//     objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 2 ||
//     objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 2 ||
//     objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 2 ||
//     objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 2
//       ){ alert("The match ended in a draw")
//     }else if(
//     objektWiner.func1 + objektWiner.func2 + objektWiner.func3 === 1 ||
//     objektWiner.func4 + objektWiner.func5 + objektWiner.func6 === 1 ||
//     objektWiner.func7 + objektWiner.func8 + objektWiner.func9 === 1 ||
//     objektWiner.func1 + objektWiner.func4 + objektWiner.func7 === 1 ||
//     objektWiner.func2 + objektWiner.func5 + objektWiner.func8 === 1 ||
//     objektWiner.func3 + objektWiner.func6 + objektWiner.func9 === 1 ||
//     objektWiner.func1 + objektWiner.func5 + objektWiner.func9 === 1 ||
//     objektWiner.func3 + objektWiner.func5 + objektWiner.func7 === 1
//     ){ alert("The match ended in a draw")}