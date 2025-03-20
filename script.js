function highlight() {
    // Change all <strong> elements to green
    document.querySelectorAll("strong").forEach(el => {
        el.style.color = "rgb(0, 128, 0)";
    });
}

function return_normal() {
    // Revert all <strong> elements to black
    document.querySelectorAll("strong").forEach(el => {
        el.style.color = "rgb(0, 0, 0)";
    });
}