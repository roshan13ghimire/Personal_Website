function navSlide() {
    const lines = document.querySelector(".lines");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    lines.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
                document.getElementById('hide1').style.display = 'block';
                document.getElementById('hide2').style.display = 'block';
                document.getElementById('hide3').style.display = 'block';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                document.getElementById('hide1').style.display = 'none';
                document.getElementById('hide2').style.display = 'none';
                document.getElementById('hide3').style.display = 'none';
            }
        });

        lines.classList.toggle("toggle");
    });
    
}




navSlide();