document.getElementsByTagName('h1')[0].innerHTML = "New text"
// document.getElementById("test").innerHTML = "Even newer text"

let color_button = document.getElementById('color-button')
console.log(color_button)

function color_change() {
    let header_text = document.getElementsByTagName('h1')[0].innerHTML
    if (header_text = 'New Text') {
        document.getElementsByTagName('h1')[0].className = 'color-change'
    }
}

color_button.addEventListener('click', color_change);

// Add a new button using JS
let button = document.createElement('button');
let button_display = document.createElement('h2')
// Add inner text to the button
button.innerHTML = "I am alive!";
document.body.append(button)

button.addEventListener('click', function () {
    button_display.innerHTML = "More JavaScript info here...";
    document.body.append(button_display)
})

// Grabbing copied text and place into clipboard
const source = document.querySelector('div.source')
source.addEventListener('copy', (event) => {
    console.dir(event)
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toLowerCase());
    event.preventDefault()
})

// Grab form data from a submit event
const form = document.querySelector('#testDataForm');

// Add event listener for submit event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let query_first = document.querySelector('#first-name');
    let query_last = document.querySelector('#last-name');
    let first_name = event.path[0][0].value; 
    let last_name = event.path[0][1].value;
    console.log(event.path);
    console.log(first_name, last_name);
    if (query_first.value == "asdf") {
        console.log('Hello');
    } else {
        console.log('Wrong password');
    }
    // console.log(`This came from the query selector: ${query_first.value} ${query_last.value}`)
})  