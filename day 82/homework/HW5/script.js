// getElementById
const container = document.getElementById('container');
console.log(container);

const first = document.getElementById('first');
console.log(first);

const second = document.getElementById('second');
console.log(second);

// getElementsByClassName
const boxes = document.getElementsByClassName('box');
console.log(boxes);
console.log(boxes[0]);
console.log(boxes[1]);
console.log(boxes[2]);

// getElementsByTagName
const listItems = document.getElementsByTagName('li');
console.log(listItems);
console.log(listItems[0]);
console.log(listItems[1]);
console.log(listItems[2]);

// querySelector
const wrapper = document.querySelector('.wrapper');
console.log(wrapper);

const firstText = document.querySelector('.text');
console.log(firstText);

const pInsideWrapper = wrapper.querySelector('.text');
console.log(pInsideWrapper);

// querySelectorAll
const allPosts = document.querySelectorAll('.post');
console.log(allPosts);
console.log(allPosts[0]);
console.log(allPosts[1]);
console.log(allPosts[2]);

// children
const parent = document.getElementById('parent');
const children = parent.children;
console.log(children);
console.log(children[0]);
console.log(children[1]);
console.log(children[2]);

// firstElementChild
const list = document.getElementById('list');
const firstChild = list.firstElementChild;
console.log(firstChild);

const secondChild = firstChild.nextElementSibling;
console.log(secondChild);

// lastElementChild
const box = document.getElementById('box');
const lastChild = box.lastElementChild;
console.log(lastChild);

const secondLastChild = lastChild.previousElementSibling;
console.log(secondLastChild);

// nextElementSibling
const container1 = document.getElementById('container1');
const firstPara = container.children[0];
const secondPara = firstPara.nextElementSibling;
console.log(secondPara);

const thirdPara = secondPara.nextElementSibling;
console.log(thirdPara);

// previousElementSibling
const article = document.querySelector('article');
const contentPara = article.children[1];
const introPara = contentPara.previousElementSibling;
console.log(introPara);

const conclusionPara = contentPara.nextElementSibling;
console.log(conclusionPara);
