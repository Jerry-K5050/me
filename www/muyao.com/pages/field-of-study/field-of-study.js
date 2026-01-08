const logoImg = document.querySelector(".logo");

function fetchCoursework() {
    fetch('./field-of-study.json')
    .then(res => {
        if (!res.ok) {
            throw new Error("network response was not ok");
        }
        return res.json();
    })
    .then(jsonCourseObj => {
        const coursework = document.querySelector(".coursework");
        const courseworkList = coursework.querySelector("ul");

        for (var year in jsonCourseObj) {
            for (var semester in jsonCourseObj[year]) {
                var courses = jsonCourseObj[year][semester]; 
                for (let i = 0; i < courses.length; i++) { //this length?
                    var course = courses[i];
                    var courseHTMLString = `
                        <li>
                            <p>${course.course_full_name} (${course.course_code}) credits: ${course.credit}</p>
                        </li>
                    `;

                    courseworkList.innerHTML += courseHTMLString;
                    
                }
                
            }
            
        }
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}

function logoToHomepage(){
    logoImg.addEventListener("click", () => {
        window.location.href = "../../index.html";
    });
}


fetchCoursework();
logoToHomepage();
