window.addEventListener("load", function () {
    const switchContainer = document.getElementById("toggleSwitch");
    const slider = document.querySelector(".slider");
    const body = document.body;
    const logo = document.getElementById("logo");
    const homeImage = document.getElementById("home-img");
    const mainTitle = document.getElementById("main-title");
    const name = document.getElementById("name");
    const description = document.getElementById("description");
    const imagenLogo = document.getElementById("imagen-logo");
    const textAnimation = document.getElementById("text-animation");

    const homeContent = document.getElementById("home-content");

    let isToggled = false; // false en index | true en alternativo
    let currentPage = window.location.pathname;
    console.log("Current page: " + currentPage);
    if (currentPage == "/indexAlternativo.html") {
        switchContainer.classList.add("active");
        isToggled = true;
    }

    switchContainer.addEventListener("click", () => {
        isToggled = !isToggled;

        updateContent();



        setTimeout(() => {
            if (isToggled) {
                switchContainer.classList.add("active");
                document.documentElement.style.setProperty("--bg-color", "#070707");
                document.documentElement.style.setProperty("--second-bg-color", "#181818");
                document.documentElement.style.setProperty("--text-color", "#ffffff");
                document.documentElement.style.setProperty("--main-color", "#f51735");
                document.documentElement.style.setProperty("--anti-color", "#3FFA5EFF");
                
            } else {
                switchContainer.classList.remove("active");
                document.documentElement.style.setProperty("--bg-color", "#070707");
                document.documentElement.style.setProperty("--second-bg-color", "#181818");
                document.documentElement.style.setProperty("--text-color", "#ffffff");
                document.documentElement.style.setProperty("--main-color", "#3FFA5EFF");
                document.documentElement.style.setProperty("--anti-color", "#f51735");
                
            }
        }, 300);
    });

    function updateContent() {
        updateLogo();
        updateText();
        updateImage();
    }

    function updateLogo() {
        logo.classList.add("fade-out");

        setTimeout(() => {
            if (isToggled) {
                logo.innerHTML = "Ying<span>Was</span>Taken";
            } else {
                logo.innerHTML = "Pablo<span>Casamian</span>Estudios";

            }

            logo.classList.remove("fade-out");
            logo.classList.add("fade-in");

            setTimeout(() => {
                logo.classList.remove("fade-in");
            }, 500);
        }, 500); 
    }

    function updateText() {
        mainTitle.classList.add("fade-out");
        name.classList.add("fade-out");
        description.classList.add("fade-out");
        textAnimation.classList.add("fade-out");
        homeContent.classList.add("fade-out");
        setTimeout(() => {
            if (!isToggled) {
                mainTitle.textContent = "Hola, soy Pablo Casamian";
                name.textContent = "Pablo Casamian";
                description.textContent = "Me gusta escalar y programar a partes iguales, resolver cosas es la razón por la que me levanto cada día.";
            } else {
                mainTitle.textContent = "Hola, soy YingWasTaken";
                name.textContent = "YingWasTaken";
                description.textContent = "Desde pequeño he utilizado este pseudónimo en la red, siento que es una parte fundamental de mi, de mi esencia, aquí guardo la parte más alocada de mi vida.";
            }

                mainTitle.classList.remove("fade-out");
                name.classList.remove("fade-out");
                description.classList.remove("fade-out");
                textAnimation.classList.remove("fade-out");
                homeContent.classList.remove("fade-out");
                mainTitle.classList.add("fade-in");
                name.classList.add("fade-in");
                description.classList.add("fade-in");
                textAnimation.classList.add("fade-in");
                homeContent.classList.add("fade-in");
            setTimeout(() => {
                mainTitle.classList.remove("fade-in");
                name.classList.remove("fade-in");
                description.classList.remove("fade-in");
                textAnimation.classList.remove("fade-in");
                homeContent.classList.remove("fade-in");
            }, 500);
        }, 500);
       
    }

    function updateImage() {
        homeImage.classList.add("fade-out");
        setTimeout(() => {
            if (!isToggled) {
                imagenLogo.src = "images/logoP.png"; 
            } else {
                imagenLogo.src = "images/logoY.png"; 
            }
    
            homeImage.classList.remove("fade-out");
            homeImage.classList.add("fade-in");
    
            setTimeout(() => {
                homeImage.classList.remove("fade-in");
            }, 500);
        }, 500);
    }
});