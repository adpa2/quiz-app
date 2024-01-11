const form = document.querySelector("form");
const preloader = document.querySelector(".load");

form.addEventListener("submit", e => {
    let data = [];
    e.preventDefault();
    const username = e.target['username'].value;
    const email = e.target['email'].value;

    data.push(username);
    data.push(email);

    localStorage.setItem('formData', JSON.stringify(data));

    document.querySelector(".registration-form").style.display = "none";
    preloader.style.display = "block";

    setTimeout(() => {
        window.location.href = "/quiz-app/quiz.html";
    }, 5000);




});



// const data = [];
// ["kygeb", "guku@mailinator.com"];


