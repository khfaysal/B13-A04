//Int btn:
const interviewBtns = document.querySelectorAll(".btn-interview");
const rejectedBtns = document.querySelectorAll(".btn-rejected");

const interviewDes = document.querySelector(".interviewCount");
const rejectedDes = document.querySelector(".rejectedCount");

interviewBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = btn.closest("div.relative");
    const statusInt = card.dataset.status;
    if (statusInt === "interview") return;
    else if (statusInt === "rejected") {
      rejectedDes.innerText = parseInt(rejectedDes.innerText) - 1;
    }

    interviewDes.innerText = parseInt(interviewDes.innerText) + 1;
    card.dataset.status = "interview";
  });
});

rejectedBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = btn.closest("div.relative");
    const statusRej = card.dataset.status;

    if (statusRej === "rejected") return;
    else if (statusRej === "interview") {
      interviewDes.innerText = parseInt(interviewDes.innerText) - 1;
    }

    rejectedDes.innerText = parseInt(rejectedDes.innerText) + 1;
    card.dataset.status = "rejected";
  });
});

// document
//   .querySelectorAll(".btn-interview")
//   .addEventListener("click", function () {
//     const addInterview = document.querySelectorAll(".interviewCount");
//     const currentValue = parseInt(addInterview.innerText) || 0;

//     addInterview.innerText = currentValue + 1;
//   });

// //Rej btn:
// document
//   .querySelectorAll(".btn-rejected")
//   .addEventListener("click", function () {
//     const addRejected = document.querySelectorAll(".rejectedCount");
//     const currentValueR = parseInt(addRejected.innerText) || 0;

//     addRejected.innerText = currentValueR + 1;
//   });
