const fullName = document.querySelector(".name");
const lname = document.querySelector(".lname");
const gender = document.querySelector(".gender");
const pronoun = document.querySelector(".pronoun");
const dob = document.querySelector(".dob");
const education = document.querySelector(".education");
const mbti = document.querySelector(".mbti");

const logoImg = document.querySelector(".logo");

const btn = document.getElementById('btn1');
const aud = document.getElementById('aud1');

function fetchIndex(){
    fetch('./index.json')
        .then((res) => {return res.json()})
        .then((data) => {
            //wtf does it give me a deprecated mark
            fullName.textContent = "name: " + data.name;
            lname.textContent = "legal name: " + data.lname;
            gender.textContent = "gender: " + data.gender;
            pronoun.textContent = "pronoun: " + data.pronoun;
            dob.textContent = "date of birth: " + data.dob;
            education.textContent = "education: " + data.education;
            mbti.textContent = "MBTI personality: " + data.mbti;
        });
}

function logoToHomepage(){
    logoImg.addEventListener("click", () => {
        window.location.href = "./index.html";
    });
}

btn.addEventListener('click', () => {
    if (aud.paused) {
        aud.play();
        btn.classList.add('playing');
    } 
    else {
        aud.pause();
        btn.classList.remove('playing');
    }
});
aud.addEventListener('ended', () => btn.classList.remove('playing'));

fetchIndex();
logoToHomepage();
