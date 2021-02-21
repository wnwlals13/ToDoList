"use strict";
const head = document.querySelector(".head");
const nav = document.querySelector(".nav");
const items = document.querySelector(".items");
const foot_input = document.querySelector(".foot_input");
const btn = document.querySelector(".foot_button");

/* 오늘 날짜 */
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();
let day = today.getDay();
const week = ["일", "월", "화", "수", "목", "금", "토", "일"];
head.innerHTML = `
    ${year}년 ${month}월 ${date}일 
    <div class="day">${week[day]}요일</div>
`;

/* 할일 */
let count = 0;
function countItem(count) {
  nav.innerHTML = `할 일 ${count <= 0 ? 0 : count}개 남음`;
}

let num = 1;
/* 리스트 추가 */
function onAdd() {
  const shoppingItem = foot_input.value;
  const li = makeItem(shoppingItem);
  items.append(li);
  foot_input.value = "";
  foot_input.focus();
  count += 1;
  countItem(count);
}

let id = 0; // UUID나중에 써보깅!
function makeItem(shoppingItem) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
  <div class="item">
    <input id="${id}" class="checkbox" type="checkbox"/>
    <label class="inputLabel" for="${id}" data-id=${id} >${shoppingItem}</label>
    <button class="item_delete"><i class="fas fa-trash" data-id=${id}></i></button>
  </div>
    `;
  id++;
  return itemRow;
}

btn.addEventListener("click", () => {
  foot_input.value && onAdd();
});

foot_input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    foot_input.value && onAdd();
  }
});

// 이벤트 위임
items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  const name = event.target.nodeName;
  // delete
  if (id && event.target.nodeName == "I") {
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
    toBeDeleted.remove();
    count -= 1;
    countItem(count);
  }

  // checked
  if (event.target.checked == true) {
    count -= 1;
  }
  //unchecked
  if (event.target.checked == false) {
    count += 1;
  }
  countItem(count);
});
