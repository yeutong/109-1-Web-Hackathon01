var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
var clicked_node;
input.value = ''
color.value = '#b0b0b0'

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function() {
        if (clicked_node) {
            clicked_node.removeAttribute("style");
        } 
        this.style.backgroundColor = "#000000";
        this.style.color = 'white';
        clicked_node = this;
    });
}

function addText() {
    if (clicked_node) {
        var text = document.createElement('DIV');
        text.textContent = input.value;
        text.style.color = color.value;
        clicked_node.appendChild(text);
        // clicked_node.innerHTML = clicked_node.innerHTML + '<span>' + input.value + '</span>';
        input.value = '';
    }
}

button.addEventListener("click", addText);

input.addEventListener("keydown", ({key}) => {
    if (key === "Enter") {
        addText();
    };
});


//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}