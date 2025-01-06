let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");

let taskArea = document.querySelector(".textArea-cont");

let addBtnFlag = false;

let mainCont = document.querySelector('.main-cont')

// let modalTaskColor = "black";

// Modal popup open and Close

addBtn.addEventListener("click", function () {
  addBtnFlag = !addBtnFlag;
  if (addBtnFlag) {
    modalCont.style.display = "flex";
  } else {
    // Hide The modal pop up
    modalCont.style.display = "none";
  }
});

// function to create the Ticket

function createTicket(task, id) {
  const ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `<div class="ticket-color"></div>
             <div class="ticket-id">${id}</div>
             <div class="task-area">${task}</div>
              <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
              </div>`;

              mainCont.appendChild(ticketCont)


}

// get data for the ticket on modal event

modalCont.addEventListener("keydown", function (e) {
  if (e.key == "Shift") {
    const task = taskArea.value;
    const id = shortid();
    console.log(task, " -> ", id);

    //  create the task ticket
    createTicket(task , id)
    modalCont.style.display = 'none'
    addBtnFlag = false
  }
});