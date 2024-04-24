const buttons = document.querySelectorAll("form input[type='button']");
const displayInput = document.querySelector("form .display input");
const body = document.body;


body.addEventListener("keydown", (e) => {
    if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        buttons[18].click();
    } else if (e.key == "Backspace" && document.activeElement !== displayInput) {
        e.preventDefault();
        buttons[1].click();
    } else if (e.key === 'R' || e.key === 'r') {
        e.preventDefault();
        buttons[0].click();
    } else {
        buttons.forEach((button) => {
            if (e.key == button.value) {
                e.preventDefault();
                button.click();
            }
        });
    }
});

