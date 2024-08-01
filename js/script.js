// Ini banner
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slide');
    let index = 0;

    function showNextSlide() {
        index = (index + 1) % slideImages.length;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(showNextSlide, 3000);
});

// Ini contact form
function validateForm() {
    const name = document.forms["contact-form"]["full-name"].value;
    const email = document.forms["contact-form"]["email"].value;
    const package = document.forms["contact-form"]["package"].value;


if (name == "" || email == "" || package == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
}

setSenderUI(name, email, package);

return false;
}

function setSenderUI(name, email, package) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-package").innerHTML = package;

}