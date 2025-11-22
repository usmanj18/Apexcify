document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const mainPhoto = document.getElementById('main-photo');

    const lightModeSrc = './assets/picofme.png';
    const darkModeSrc = './assets/picofme1.png';

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        mainPhoto.src = darkModeSrc;
        toggleButton.classList.remove('fa-sun');
        toggleButton.classList.add('fa-moon');
    }

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            mainPhoto.src = darkModeSrc;
            
            toggleButton.classList.remove('fa-sun');
            toggleButton.classList.add('fa-moon');

            localStorage.setItem('theme', 'dark');
        } else {
            mainPhoto.src = lightModeSrc;

            toggleButton.classList.remove('fa-moon');
            toggleButton.classList.add('fa-sun');

            localStorage.setItem('theme', 'light');
        }
    });
});

const menuBtn=document.querySelector("#menu");
const links=document.querySelector(".links");

menuBtn.addEventListener("click",()=>{
    links.classList.toggle('active');
});