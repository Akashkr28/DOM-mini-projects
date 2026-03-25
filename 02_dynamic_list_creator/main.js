const input =  document.getElementById("itemInput")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("list")

addBtn.addEventListener("click", () => {
    // For Validation if there is no task throw alert - Please Enter Task and Try Again
    if(input.value === "") {
        alert("Please Enter Task and Try Again!")
        return;
    }

    // Creation of list of Task
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");

    li.textContent = input.value;

    delBtn.addEventListener("click", () => {
        li.remove();
    });

    // Adding Task in List
    li.appendChild(delBtn)
    list.appendChild(li)

    // After task added placeholder becomes empty again
    input.value = ""
})