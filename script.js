document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    });

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your message!");
        form.reset();
    });
});
