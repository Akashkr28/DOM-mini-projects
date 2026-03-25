const parent = document.getElementById("parent")
const child = document.getElementById("child")
const body = document.body;

// body.addEventListener("click" , function(){
//     console.log("Body Clicked")
// }, true)

// parent.addEventListener("click" , function(){
//     console.log("Parent Clicked")
// }, true)

// child.addEventListener("click" , function(){
//     console.log("Child Clicked")
// }, true)

// body.addEventListener("click" , function(){
//     console.log("Body Clicked")
// }, false)



// Event Capturing -> true: Event flows from Top to Bottom
// Event Bubbling -> false: Event flows from Bottom to Top
// Event Phases -> There are three types of Event Phases: 
    // 1. Capturing Phase: Top to Bottom
    // 2. Target Phase
    // 3. Bubbling Phase

// Assignment - Blog on Event Bubbling and Event Capturing in DOM: Event Phases
// Task - e.stopImmediatePropagation(), momitorEvent(), closest()

// child.addEventListener("click", fumction(event){
//     event.stopPropagation();
//     console.log('child clicked')
// })

//------------------------------------------------------------------------------------

// Event delegation

const items = document.querySelectorAll("li")

// Here I have to multiple event listener
items.forEach((item) => {
    item.addEventListener('click', () => {
        console.log(item.textContent)
    })
})

const list = document.getElementById("list")

list.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        console.log(e.target.textContent)
    }
})