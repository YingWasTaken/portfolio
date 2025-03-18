window.onload = function() {
    const switchContainer = document.getElementById("toggleSwitch");
    const slider = document.querySelector(".slider");

    let isToggled = false; // false en index | true en alternativo
    let currentPage = window.location.pathname;
    console.log("Current page: " + currentPage);
    if (currentPage == "/indexAlternativo.html") {
        switchContainer.classList.add("active");
        isToggled = true;
    }

            switchContainer.addEventListener("click", () => {
                isToggled = !isToggled;
    
                if (isToggled) {
                    switchContainer.classList.add("active");
                    setTimeout(() => {
                        window.location.href = "indexAlternativo.html";
                    }, 300); 
                } else {
                    switchContainer.classList.remove("active");
                    setTimeout(() => {
                        window.location.href = "index.html";
                    }, 300);
                }
            });

}

