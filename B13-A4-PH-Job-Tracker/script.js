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

const btnAll = document.getElementById("btn-all");
const btnAccept = document.getElementById("btn-accept");
const btnReject = document.getElementById("btn-reject");

function filterCards(status) {
  const allCard = document.querySelectorAll("div.relative");

  allCard.forEach((card) => {
    const cardStatus = card.dataset.status || "none";

    if (status === "all") {
      card.style.display = "block";
    } else if (status === "interview" && cardStatus === "interview") {
      card.style.display = "block";
    } else if (status === "rejected" && cardStatus === "rejected") {
      card.style.display = "block";
    } else if (status !== "all") {
      card.style.display = "none";
    }
  });
}

btnAll.addEventListener("click", () => filterCards("all"));
btnAccept.addEventListener("click", () => filterCards("interview"));
btnReject.addEventListener("click", () => filterCards("rejected"));
