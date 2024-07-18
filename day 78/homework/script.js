// element.childNodes
let list = document.getElementById("myList");
let children = list.childNodes;
console.log(children); // NodeList(7) [text, li, text, li, text, li, text]

let container = document.getElementById("container");
let containerChildren = container.childNodes;
console.log(containerChildren); // NodeList(5) [text, p, text, p, text]

// element.firstChild
let firstChild = list.firstChild;
console.log(firstChild); // #text

let firstContainerChild = container.firstChild;
console.log(firstContainerChild); // #text

// element.lastChild
let lastChild = list.lastChild;
console.log(lastChild); // #text

let lastContainerChild = container.lastChild;
console.log(lastContainerChild); // #text

// element.hasChildNodes
let hasChildren = list.hasChildNodes();
console.log(hasChildren); // true

let emptyDiv = document.getElementById("emptyDiv");
let hasEmptyDivChildren = emptyDiv.hasChildNodes();
console.log(hasEmptyDivChildren); // false

// element.nextSibling
let firstListItem = list.firstChild;
console.log(firstListItem); // <li>Item 1</li>

let firstPara = document.getElementById("firstPara");
let secondPara = firstPara.nextSibling;
console.log(secondPara); // <p>Paragraph 2</p>

// element.previousSibling
let lastListItem = list.lastChild.previousSibling;
console.log(lastListItem); // <li>Item 3</li>

let secondParaPrevSibling = secondPara.previousSibling;
console.log(secondParaPrevSibling); // <p>Paragraph 1</p>

// element.parentNode
let listParent = list.parentNode;
console.log(listParent); // <body>...</body>

let firstParaParent = firstPara.parentNode;
console.log(firstParaParent); // <div id="container">...</div>
