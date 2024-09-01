//1
const mainContent = document.getElementById("main-content");
console.log(mainContent);
//2
const children = mainContent.children;
console.log(children);
//3
const renderElements = document.getElementsByClassName("render");
for (let i = 0; i < renderElements.length; i++) {
    console.log(renderElements[i].innerHTML);
}

//4
document.getElementById("first-name").value = "Alex";
//5
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";

//6
const formContentNode = document.getElementById("form-content");
console.log(formContentNode.nodeType);

//7
const lastNameNode = document.getElementById("lastName");
console.log(lastNameNode.nodeType);
console.log(lastNameNode.firstChild.nodeType);
//8
lastNameNode.textContent = "Last Name: Smith";
//9
const firstChild = mainContent.firstElementChild;
const lastChild = mainContent.lastElementChild;
console.log(firstChild);
console.log(lastChild);
// 10
const nextSibling = lastNameNode.nextElementSibling;
const previousSibling = lastNameNode.previousElementSibling;
console.log(nextSibling);
console.log(previousSibling);

// 11
const emailNode = document.getElementById("email");
console.log(emailNode.parentNode);
console.log(emailNode.parentNode.nodeType);
