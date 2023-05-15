const colorSection = document.getElementById("colorSection");

// todo: Inputs
const noteTitle = document.getElementById("noteTitle");
const writeNote = document.getElementById("writeNote");

// todo: Buttons
const color = document.getElementsByName("color");
const saveBtn = document.getElementById("saveBtn");

// todo: Cards
const cards = document.getElementById("cards");
const card = document.getElementById("card");
const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
let myArr = [];

// saveBtn.addEventListener("click", () => {
//   if (noteTitle.value == 0) {
//     return alert("Please fill note title!");
//   } else if (noteTitle.value.length > 22) {
//     return alert("Title must be lower than 22!");
//   } else if (writeNote.value == 0) {
//     return alert("Please write a note!");
//   }
//   const newCard = document.createElement("div");
//   const newcardTitle = document.createElement("div");
//   newcardTitle.setAttribute("id","cardTitle")

//   for (let i = 0; i < color.length; i++) {
//     if (color[0].checked == true) {
//       newCard.innerHTML = `
//                 <div id="cardTitle" style="background-color: #f06292">
//                 <h3 id="title">${noteTitle.value}</h3>
//                 <i class="fa-solid fa-trash-can"></i>
//               </div>
//               <p id="paragraph">${writeNote.value}</p>
//       `;

//       newCard.style.borderTopColor = "#f06292";
//       newCard.style.borderRightColor = "#f06292";
//       newCard.style.borderBottomColor = "#f06292";
//       newCard.style.borderLeftColor = "#f06292";
//     } else if (color[1].checked == true) {
//       newCard.innerHTML = `
//                 <div id="cardTitle" style="background-color: #ba68c8">
//                 <h3 id="title">${noteTitle.value}</h3>
//                 <i class="fa-solid fa-trash-can"></i>
//               </div>
//               <p id="paragraph">${writeNote.value}</p>
//       `;

//       newCard.style.borderTopColor = "#ba68c8";
//       newCard.style.borderRightColor = "#ba68c8";
//       newCard.style.borderBottomColor = "#ba68c8";
//       newCard.style.borderLeftColor = "#ba68c8";
//     } else if (color[2].checked == true) {
//       newCard.innerHTML = `
//                 <div id="cardTitle" style="background-color: #4fc3f7">
//                 <h3 id="title">${noteTitle.value}</h3>
//                 <i class="fa-solid fa-trash-can"></i>
//               </div>
//               <p id="paragraph">${writeNote.value}</p>
//       `;

//       newCard.style.borderTopColor = "#4fc3f7";
//       newCard.style.borderRightColor = "#4fc3f7";
//       newCard.style.borderBottomColor = "#4fc3f7";
//       newCard.style.borderLeftColor = "#4fc3f7";
//     } else if (color[3].checked == true) {
//       newCard.innerHTML = `
//                 <div id="cardTitle" style="background-color: #ffd54f">
//                 <h3 id="title">${noteTitle.value}</h3>
//                 <i class="fa-solid fa-trash-can"></i>
//               </div>
//               <p id="paragraph">${writeNote.value}</p>
//       `;

//       newCard.style.borderTopColor = "#ffd54f";
//       newCard.style.borderRightColor = "#ffd54f";
//       newCard.style.borderBottomColor = "#ffd54f";
//       newCard.style.borderLeftColor = "#ffd54f";
//     } else if (color[4].checked == true) {
//       newCard.innerHTML = `
//                 <div id="cardTitle" style="background-color: #aed581">
//             <h3 id="title">${noteTitle.value}</h3>
//             <i id="remove" class="fa-solid fa-trash-can"></i>
//           </div>
//           <p id="paragraph">${writeNote.value}</p>
//       `;

//       newCard.style.borderTopColor = "#aed581";
//       newCard.style.borderRightColor = "#aed581";
//       newCard.style.borderBottomColor = "#aed581";
//       newCard.style.borderLeftColor = "#aed581";
//     }
//   }

//   let obj = {
//     title: noteTitle.value,
//     paragraph: writeNote.value,
//   };

//   cards.append(newCard);
//   myArr.push(obj);
//   noteTitle.value = "";
//   writeNote.value = "";
//   newCard.classList.add("");
// });

saveBtn.addEventListener("click", () => {
  if (noteTitle.value == 0) {
    return alert("Please fill note title!");
  } else if (noteTitle.value.length > 22) {
    return alert("Title must be lower than 22!");
  } else if (writeNote.value == 0) {
    return alert("Please write a note!");
  }

  let obj = {
    title: noteTitle.value.trim(),
    note: writeNote.value.trim(),
  };

  // todo: Creating new card and setting id to "card"
  const newCard = document.createElement("div");
  newCard.setAttribute("id", "card");

  // todo: Creating new cardTitle and setting id to "cardTitle"
  const newCardTitle = document.createElement("div");
  newCardTitle.setAttribute("id", "cardTitle");

  // todo: Creating new h3,removeBtn and p element in this card
  const cardH3 = document.createElement("h3");
  cardH3.textContent = noteTitle.value;

  const removeBtn = document.createElement("i");
  removeBtn.setAttribute("class", "fa-solid fa-trash-can");

  const cardP = document.createElement("textarea");
  cardP.textContent = writeNote.value;

  for (let i = 0; i < color.length; i++) {
    if (color[0].checked == true) {
      newCardTitle.style.backgroundColor = "#f06292";
      newCard.style.borderColor = "#f06292";
    } else if (color[1].checked == true) {
      newCardTitle.style.backgroundColor = "#ba68c8";
      newCard.style.borderColor = "#ba68c8";
    } else if (color[2].checked == true) {
      newCardTitle.style.backgroundColor = "#4fc3f7";
      newCard.style.borderColor = "#4fc3f7";
    } else if (color[3].checked == true) {
      newCardTitle.style.backgroundColor = "#ffd54f";
      newCard.style.borderColor = "#ffd54f";
    } else if (color[4].checked == true) {
      newCardTitle.style.backgroundColor = "#aed581";
      newCard.style.borderColor = "#aed581";
    }
  }

  // todo: adding this items to cardTitle
  newCardTitle.append(cardH3, removeBtn);

  // todo: adding cardTitle and paragraph to new card
  newCard.append(newCardTitle, cardP);

  // todo: adding new card to Cards
  cards.append(newCard);

  removeBtn.addEventListener("click", () => {
    const text = "Are you sure?";
    if (confirm(text) == true) {
      newCard.remove();
    } else {
      return;
    }
  });

  // todo: reseting values length to 0
  noteTitle.value = "";
  writeNote.value = "";
});

const defaultRemove = document.getElementById("remove");

defaultRemove.addEventListener("click", () => {
  const text = "Are you sure?";
  if (confirm(text) == true) {
    card.remove();
  } else {
    return;
  }
});
