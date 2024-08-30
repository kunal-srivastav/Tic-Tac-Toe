let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let showmsg = document.querySelector(".showmsg");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterens = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const enabledbtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    count = 0;
    showmsg.classList.add("hide");
  }
};

const disabledbtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.style.color = "red";
      box.innerText = "O";
      turnO = false;
    } else {
      box.style.color = "blue";
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = "true";
    count++;

    checkWinner();
    notWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterens) {
    pos1Val = boxes[pattern[0]].innerText;
    pos2Val = boxes[pattern[1]].innerText;
    pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        msg.innerText = `Congratulation , The Winner is ${pos1Val}`;
        showmsg.classList.remove("hide");
        disabledbtn();
      }
    }
  }
};

const notWinner = () => {
  if (count === 9) {
    msg.innerText = "Game was Draw";
    showmsg.classList.remove("hide");
  }
};

newBtn.addEventListener("click", enabledbtn);
resetbtn.addEventListener("click", enabledbtn);
