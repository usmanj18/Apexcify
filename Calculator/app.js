let input = document.querySelector("#screen");
let btn = document.querySelectorAll("button");
let string = "";

btn.forEach(button => {
    button.addEventListener("click", (e) => {
        handleInput(e.target.innerHTML);
    });
});

function handleInput(value) {
    if (value === "=") {
        try {
            string = eval(string) || "";
        } catch {
            string = "Error";
        }
        input.value = string;
    } else if (value === "AC") {
        string = "";
        input.value = string;
    } else if (value === "DEL") {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        string += value;
        input.value = string;
    }
}

document.addEventListener("keydown", (e) => {
    if ((e.key >= "0" && e.key <= "9") || e.key === "." || e.key === "%") {
        handleInput(e.key);
    } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
        handleInput(e.key);
    } else if (e.key === "Enter") {
        handleInput("=");
    } else if (e.key === "Backspace") {
        handleInput("DEL");
    } else if (e.key.toLowerCase() === "c") {
        handleInput("AC");
    }
});