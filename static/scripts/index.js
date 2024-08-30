function reiniciarDisplays() {
    home = document.getElementById("home");
    home.style.display = "none";

    aboutMe = document.getElementById("about-me");
    aboutMe.style.display = "none";
}

function ativaHome() {
    reiniciarDisplays();

    home = document.getElementById('home');
    home.style.display = 'block';
}

function ativaAboutMe() {
    reiniciarDisplays();

    aboutMe = document.getElementById('about-me');
    aboutMe.style.display = 'block';
}