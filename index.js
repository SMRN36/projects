// console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

//getElementById
//let headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
//headerTitle.style.borderBottom = 'solid 4px #000';

//getElementsByClassname
//let items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'Hello 2';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'green';
//for(let i=0; i<items.length;i++){
 //   items[i].style.backgroundColor = '#f4f4f4';
 //   items[i].style.fontWeight = 'bold';
 //   items[i].style.color = 'green';
//}

//getElementsByTagName
//let li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent = 'Hello 2';

//li[2].style.backgroundColor = 'green';

//for(let i=0;i<li.length;i++){
//    li[i].style.fontWeight = 'bold';
//}

//let parent = document.getElementsByClassName('list-group')[0];
//let newLi = document.createElement("li");
//newLi.textContent = "New Item";
//parent.appendChild(newLi);

//let li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[4].textContent = 'Hello 2';

//li[4].style.backgroundColor = 'yellow';
//li[4].style.fontWeight = 'bold';


//querySelector
//let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// //let SecondItem = document.querySelector('.list-group-item:nth-child(2)');
// //SecondItem.style.backgroundColor = 'green';

// //let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// //thirdItem.style.visibility = "hidden";

// //querySelectorAll
// let SecondItem = document.querySelectorAll('.list-group-item:nth-child(2)');
// SecondItem[0].style.color = 'green';

// let odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
// }


//parentElement
let itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'hello 1';
//firstChild
console.log(itemList.firstChild);

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

//lastChild
console.log(itemList.lastChild);

//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";

//createElement
//create new div
let newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';
//add id
newDiv.id = 'hello1';
//add atrr
newDiv.setAttribute('title', 'Hello Div');
//create text node
let newDivText = document.createTextNode('HEllo world');
//add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
let item1 = document.querySelector('.list-group-item:nth-child(1)');

console.log(newDiv);

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);

let anotherDiv = document.createElement('div');
//add class
anotherDiv.className = 'hello';
//add id
anotherDiv.id = 'hello1';
//add atrr
anotherDiv.setAttribute('title', 'Hello Div');
//create text node
let anotherDivText = document.createTextNode('HEllo world');
//add text to div
anotherDiv.appendChild(anotherDivText);
anotherDiv.style.fontSize = '30px';
item1.parentNode.insertBefore(anotherDiv, item1);
