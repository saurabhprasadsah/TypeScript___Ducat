// id 
// let heading = document.getElementById('heading')

// to get the content of selected tag/element
// console.log(heading.innerText);
// console.log(heading.innerHTML);

// to set the content of selected tag/element
// heading.innerText = "Hello world from DOM"
// heading.innerHTML = "Hello world from DOM <button>Button</button>"

// to get the id of selected tag/element
// console.log(heading.id)

// to set the id of selected tag/element
// heading.id = "test"

// to get the class of selected tag/element
// console.log(heading.className)

// to set the class of selected tag/element
// heading.className = "red"

// to set the inline style of selected tag/element
// heading.style.backgroundColor = 'red'

// to remove selected tag/element from the html or DOM
// heading.remove()

// class
// let paragraphs = document.getElementsByClassName('red');

// console.log(paragraphs);
// // paragraphs[0].className = ""
// paragraphs[0].innerHTML = "Hi there"


// tag/element
// let tags = document.getElementsByTagName('p');

// for (const tag of tags) {
//     tag.innerHTML = "Hi there"    
// }

// // querySelector
// // tag
// let paragraph = document.querySelector('p');
// console.log(paragraph);
// paragraph.innerHTML = "hi there"

// // class
// let paragraph = document.querySelector('.red');
// console.log(paragraph);
// paragraph.innerHTML = "hi there"

// // id
// let paragraph = document.querySelector('#heading');
// console.log(paragraph);
// paragraph.innerHTML = "hi there"

// querySelectorAll
// tag
// let paragraph = document.querySelectorAll('p');
// console.log(paragraph);
// paragraph[0].innerText = "hi there"
// paragraph[1].remove()

// class
// let paragraph = document.querySelectorAll('.red');
// console.log(paragraph);
// paragraph[0].innerText = "hi there"
// paragraph[1].className = ""

// id
// let heading = document.querySelectorAll('#heading');
// console.log(heading);
// heading[0].innerText = "hi there"

// element

// let h1  = document.createElement('h1')
// h1.innerText = "Hello from DOM Element"
// h1.id = "h1"
// h1.className = "red"

// let root = document.getElementById('root')
// root.append(h1)
// root.prepend(h1)

// traversing
// parent
// let paragraph = document.getElementById('paragraph');

// console.log(paragraph.parentNode);
// console.log(paragraph.parentElement);

// console.log(paragraph.parentElement.parentElement.
//     parentElement.parentElement.parentElement);

// paragraph.parentElement.style.backgroundColor = "red"
// paragraph.parentElement.style.color = "white"
// paragraph.parentElement.style.height = "500px"
// paragraph.parentElement.remove()

// children
// let list = document.getElementById('list')

// console.log(list);
// console.log(list.childNodes);// textnodes and elements
// console.log(list.children); // elements

// siblings
// previousSiblings
// let button = document.getElementById('button')
// // console.log(button);

// console.log(button.previousSibling); // textnode or element
// console.log(button.previousElementSibling); // element

// console.log(button.previousElementSibling.previousElementSibling.
//     previousElementSibling.previousElementSibling);

// nextSiblings
let button = document.getElementById('button')

console.log(button);

console.log(button.nextSibling); // textnode or element
console.log(button.nextElementSibling); // element

console.log(button.nextElementSibling.nextElementSibling.
    nextElementSibling.nextElementSibling.nextElementSibling);




