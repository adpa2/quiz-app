import {questions} from "./questions.js";

const question = document.querySelector(".quiz__question");
let questionID = question.getAttribute("data-question");
const questionText = question.querySelector("h3");

const answerContainer = question.nextElementSibling;
const answers = answerContainer.querySelectorAll(`input[name=q-${questionID}]`);
const buttonNext = document.querySelector("button");

const timeHolder = document.querySelector(".quiz__question_timer");

const preloader = document.querySelector(".load");

let interval;

let time = 60000;
const timeCountdown = () => {
    let time = 60000;
    interval = setInterval(() => {
        time -= 1000;
        if (time >= 0) {
            timeHolder.textContent = `${time / 1000}`;
        } else {
            clearInterval(interval);
            document.querySelector(".quiz").style.display = "none";
            preloader.style.display = "block";

            setTimeout(() => {
                window.location.href = "/quiz-app/summary.html";
            }, 5000);
        }
    }, 1000)
}

const updateContent = () => {
    questionText.textContent = questions[`${questionID}`].question;
    answers.forEach((element, index) => {
        if (index === 0) {
            element.nextElementSibling.textContent = questions[`${questionID}`].optionA;
        } else if (index === 1) {
            element.nextElementSibling.textContent = questions[`${questionID}`].optionB;
        } else if (index === 2) {
            element.nextElementSibling.textContent = questions[`${questionID}`].optionC;
        } else {
            element.nextElementSibling.textContent = questions[`${questionID}`].optionD;
        }
    })
}

window.onload = () => {
    const formData = JSON.parse(localStorage.getItem("formData"));
    question.setAttribute("data-question", questionID);
    const dataAttribute = question.getAttribute("data-question");
    if (dataAttribute === "0") {
        timeCountdown();
    }

    updateContent();
};

const getQuestion = () => {
    clearInterval(interval);
    time = 60000;
    answers.forEach((element) => {
        console.log(element);
        element.name = `q-${questionID}`;
    })
    questionID++;
    question.setAttribute("data-question", questionID);


    timeCountdown();
    updateContent();
};

buttonNext.addEventListener("click", getQuestion);

