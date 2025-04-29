document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll("nav ul li a");
    let currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
