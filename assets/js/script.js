const add = document.querySelector("#add");
const textInput = document.querySelector("#text-input");

const iconPlus = document.querySelector("#add #plus");
const iconCheck = document.querySelector("#add #check");

let state = "idle"; // "idle" | "adding"

add.onclick = () => {
    if (state == "idle") {
        iconPlus.style.display = "none";
        iconCheck.style.display = "block";

        textInput.classList.add("show");

        state = "adding";
    } else {
        const text = textInput.value;
        
        iconPlus.style.display = "block";
        iconCheck.style.display = "none";

        // do logic

        textInput.value = "";
        textInput.classList.remove("show");

        state = "idle";
    }
};