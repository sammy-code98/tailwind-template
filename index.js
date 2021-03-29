
let x = document.getElementById('navbar-btn')
window.onload = (e) => {
    x.style.display = 'none'
}

function navBar() {
    if (x.style.display === 'block') {
        x.style.display = 'none'
    } else {
        x.style.display = 'block'
    }
}
