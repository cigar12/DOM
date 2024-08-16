// // const title = document.getElementById("heading")
// // console.log(title)

// // const listItem = document.getElementsByClassName("list-item")
// console.log(listItem)

// const listTags = document.getElementsByTagName("li")
//  console.log(listTags)

// const container = document.querySelector("div")
// console.log(conatiner)

const title = document.querySelector("#heading");
console.log(title);
title.style.backgroundColor = "Pink"; //inline.style
title.style.color = "Magenta";

const listItems = document.querySelectorAll(".list-item");
console.log(listItems);
for (i = 0; i <= 4; i++) {
  listItems[i].style.color = "blue";
  listItems[i].style.backgroundColor = "cyan";
}

const li = document.createElement("li")
console.log(li)
//add
URL.append(li)

li.setAttribute()
//li.removeattribute()
//for classes (add,remove,toggle,repalce,contains)
li.classList.add("new-class");
