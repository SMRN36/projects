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
let headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
headerTitle.style.borderBottom = 'solid 4px #000';

//getElementsByClassname
let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'green';
for(let i=0; i<items.length;i++){
    items[i].style.backgroundColor = '#f4f4f4';
    items[i].style.fontWeight = 'bold';
    items[i].style.color = 'green';
}