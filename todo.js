const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addtask() {
    if (inputbox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.textContent = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
    }
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false);
