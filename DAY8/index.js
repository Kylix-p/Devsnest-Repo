// const board = document.querySelector("#board");
// console.log(board);

// const CELL_COUNT = 100;
// const state = {};

// // for (let i = 0; i < CELL_COUNT; i = i + 1) {
// //   const cell = document.createElement("div");
// //   cell.classList.add("cell");
// //   cell.addEventListener("click", e => handleClick(e, i));
// //   board.appendChild(cell);
// // }

// console.log(board);

// const handleClick = (e, index) => {
//   const element = e.target;
//   if (state[index]) {
//     element.style.background = "purple";
//     delete state[index];
//   } 
//   else {
//     state[index] = "selected";
//     element.style.background = "rgb(154, 154, 243)";
//   }
// };
const boxEl = document.querySelectorAll(".cell");
boxEl.forEach((bo) => bo.addEventListener("click", () => { bo.classList.toggle("cell-selected"); }));