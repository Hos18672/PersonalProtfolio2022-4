import { user } from "../js/db.js";

let worksList = user.works;
let educationList = user.educations;
let projectsList = user.projects;
/* ----------------------- set User Data ------------------------ */

/* ------------------ set aboutMe Data  -------------------- */

let aboutDescription = document.querySelector(".about-description");
aboutDescription.innerHTML = user.aboutMe;

/* ----------------------- set Contact Data ------------------------ */

let tel = document.querySelector(".telefon");
let email = document.querySelector(".email");
tel.innerHTML = '<i class="fa-solid fa-phone"></i>' + user.tel;
email.innerHTML = '<i class="fa-solid fa-envelope"></i>' + user.Email;

/* ----------------------- set Projects Data ------------------------ */

function setProjectsData(data) {
  let projects = document.querySelector(".projects-list");

  data.forEach((item) => {
    let li = document.createElement("li");
    if (item.webLink) {
      li.innerHTML = `<time class="time">${item.date}</time>
            <div class="project-item">
              <img class="portfolio-img" src=${item.img.src}/>
              <h2>${item.title} </h2>
              <p>
              ${item.description} 
              </p>     
              <a href="${item.webLink}">Live</a>
              <span><a href="${item.githubLink}"> Code </a></span>
            </div> `;
    } else {
      li.innerHTML = `<time class="time">${item.date}</time>
            <div class="project-item">
              <img class="portfolio-img" src=${item.img.src}/>
              <h2>${item.title} </h2>
              <p>
              ${item.description} 
              </p>     
              <span><a href="${item.githubLink}"> Code </a></span>
            </div> `;
    }

    li.classList.add("project-list-item");
    projects.appendChild(li);
  });
}

/* ----------------------- set Works Data ------------------------ */

function setWorksData(data) {
  let worksList = document.querySelector(".works-items");
  data.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `<time class="timeOne">${item.date}</time>
            <div class="work-one item">
              <h2 >${item.title}</h2>
              <p>
              ${item.description}
              </p>
            </div>`;
    div.classList.add("work-item");
    worksList.appendChild(div);
  });
}

/* ----------------------- set Education Data ------------------------ */

function setEducationsData(data) {
  let worksList = document.querySelector(".education-items");
  data.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `<time class="timeOne">${item.date}</time>
            <div class="work-one item">
              <h2 >${item.title}</h2>
              <p>
              ${item.description}
              </p>
            </div>`;
    div.classList.add("education-item");
    worksList.appendChild(div);
  });
}

setProjectsData(projectsList);
setWorksData(worksList);
setEducationsData(educationList);
