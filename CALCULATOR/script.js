let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
    scrollDisplayToEnd();
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
    scrollDisplayToEnd();
}

function calculateResult() {
    try {
        display.value = eval(display.value);
        if (display.value === Infinity) {
            display.value = 'Error';
        }
    } catch (error) {
        display.value = 'Error';
    }
    scrollDisplayToEnd();
}

function scrollDisplayToEnd() {
    display.setSelectionRange(display.value.length, display.value.length);
}

// Enable keyboard input
document.addEventListener('keydown', function (event) {
    const key = event.key;

    // Handle numeric keys, operators, and special keys
    if (/[0-9/*\-+.=]|Enter|Backspace|Delete|Escape/.test(key)) {
        event.preventDefault();

        switch (key) {
            case 'Enter':
                calculateResult();
                break;
            case 'Backspace':
                backspace();
                break;
            case 'Delete':
            case 'Escape':
                clearDisplay();
                break;
            default:
                appendToDisplay(key);
        }
    }
});
