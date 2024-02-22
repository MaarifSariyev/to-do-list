let inputBox = document.getElementById("input-box")
let listContainer = document.querySelector("#list-container")
function addTask(){
    if(inputBox.value === ""){
        alert("please write something");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "&#10006"
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click",function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);