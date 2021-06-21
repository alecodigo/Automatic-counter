window.onload = init()

function init() {
    document.querySelector('.start').addEventListener('click', Start)
    document.querySelector('.stop').addEventListener('click', Stop)
    document.querySelector('.reset').addEventListener('click', Reset)
    document.querySelector('.capture').addEventListener('click', Capture)
    counter = 0
    id = 0
}

function Start() {
        draw()
        id = setInterval(draw,1000);
        document.querySelector('.start').removeEventListener("click", Start);
}

function draw() {
    counter++
    const display = document.querySelector('#value')
    display.textContent = counter
}

function Stop() {
    clearInterval(id);
    const btnStart = document.querySelector('.start').addEventListener('click', Start)
}

function Reset() {
    counter = 0
    clearInterval(id);
    const display = document.querySelector('#value')
    display.textContent = counter
}

function Capture() {
    const span = document.createElement('span')
    const screen = document.querySelector('.panel')
    screen.appendChild(span)
    span.textContent = counter
}