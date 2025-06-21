document.documentElement.setAttribute('data-theme', 'light');

function switchTheme(e) {
    document.documentElement.removeAttribute('data-theme');
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        console.log("!!");
        }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    } 
}

window.addEventListener("DOMContentLoaded", (event) => {
    const toggleSwitch = document.getElementById("switch");
    toggleSwitch.addEventListener('change', switchTheme, false);
})