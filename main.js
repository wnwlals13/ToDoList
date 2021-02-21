'use strict';
const list = document.querySelector('.list');
const ul = document.querySelector('.items');
const addBtn = document.querySelector('.foot_button');
const shopping = document.querySelector('.foot_input');


/**
 * 가능하면 주석의 의도를 작성해라
 */
//함수 추가됨 - 내 코드에 함수없었음
function onAdd() {
    //1. 사용자가 입력한 텍스트를 받아옴
    const text = shopping.value;
    if (text === '') {
        shopping.focus();
        return;
    }
    //2. 새로운 아이템을 만듬 (텍스트 + 삭제 버튼) -> 함수 생성함
    const item = createItem(text);
    //3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
    ul.appendChild(item);
    // 3 + 1
    // 새로 추가된 아이템으로 스크롤링 
    item.scrollIntoView({block : 'center'});

    //4. text input을 초기화한다. -> 자동 포커스
    shopping.value = '';
    shopping.focus();
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item_row');

    const item = document.createElement('div');
    item.setAttribute('class','item');

    const span = document.createElement('span');
    span.setAttribute('class','item_name');
    span.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','item_delete');
    deleteBtn.innerHTML = `
    <i class="fas fa-trash-alt"></i>
    `;
    deleteBtn.addEventListener('click', () => {
        ul.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class','item_divider');

    item.appendChild(span);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
})
//input에서 eneter키를 누르면 입력되기
shopping.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
});

// addBtn.addEventListener('click', ()=> {
//     if (shopping.value !== '') {
//         const addLi = document.createElement('li');
//         addLi.setAttribute('class','item_row');
//         addLi.innerHTML = `
//         <div class="item">
//             <span class="item_name">${shopping.value}</span>
//             <button class="item_delete"><i class="fas fa-trash-alt"></i></button>
//         </div>
//         <div class="item_divider"></div>
//         `;
//         ul.appendChild(addLi);
//         shopping.value = '';

//         const shoplist = document.querySelectorAll('.item_row');
//         const trash = document.querySelectorAll('.item_delete');
//         for (let i = 0; i< trash.length; i++){
//             trash[i].addEventListener('click', ()=> {
//                 console.log(trash[i]);
//                 addLi.remove(shoplist[i]);
//             });
//         }
//     }
// });


