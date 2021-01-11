const deathstar = document.getElementById('deathstar');

deathstar.style.animation = "explosion 3s ease-in-out 1s";
setTimeout(() => {
    deathstar.style.backgroundImage = "none";
}, 3000);