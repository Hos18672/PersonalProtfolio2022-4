let worksList = data.works;
let educationList = data.educations;
let projectsList = data.projects;
let skillsList = data.skills;
/* ----------------------- set User Data ------------------------ */

/* ------------------ set aboutMe Data  -------------------- */

let aboutDescription = document.querySelector(".about-description");
aboutDescription.innerHTML = data.aboutMe;

/* ----------------------- set Contact Data ------------------------ */

let tel = document.querySelector(".telefon");
let email = document.querySelector(".email");
tel.innerHTML = '<i class="fa-solid fa-phone"></i>' + data.tel;
email.innerHTML = '<i class="fa-solid fa-envelope"></i>' + data.Email;



/* ----------------------- set Projects Data ------------------------ */

function setProjectsData(data) {
  let projects = document.querySelector(".projects-list");

  data.forEach((item) => {
    let li = document.createElement("li");
    if (item.webLink) {
      li.innerHTML = `<time class="time">${item.date}</time>
            <div  class="project-item">
              <img class="portfolio-img" src=${encodeURI(item.img)} alt="${item.title}" aria-label="${item.title}"  title="${item.title}" />
              <h2>${item.title} </h2>
              <p>
              ${item.description} 
              </p>     
              <a href="${item.webLink}">Live</a>
              <span><a href="${item.githubLink}"> Code </a></span>
              <div>
                <div onClick='itemOnClickT("${item.githubLink}")'> <i class="fa-brands fa-twitter-square"></i></div>
                <div onClick='itemOnClickF("${item.githubLink}")'> <i class="fa-brands fa-facebook-square"></i></div>
              </div>
            </div> `;
    } else {
      li.innerHTML = `<time class="time">${item.date}</time>
            <div class="project-item">
              <img class="portfolio-img" src=${encodeURI(item.img)} alt="${item.title}" aria-label="${item.title}"  title="${item.title}"/>
              <h2>${item.title} </h2>
              <p id="project-details">
              ${item.description} 
              </p>    
              <span><a href="${item.githubLink}"> Code </a></span>
              <span data-text=${item.githubLink} id="gitHubLink"></span> 
              <div>
                <div onClick='itemOnClickT("${item.githubLink}")'> <i class="fa-brands fa-twitter-square"></i></div>
                <div onClick='itemOnClickF("${item.githubLink}")'> <i class="fa-brands fa-facebook-square"></i></div>
              </div>
            </div> `;
    }

    li.classList.add("project-list-item");
    li.setAttribute("role", "treeitem")
    li.setAttribute("tabindex", "0")
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
    div.setAttribute("tabindex", "0")
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
    div.setAttribute("tabindex", "0")
    worksList.appendChild(div);
  });
}

/* ----------------------- set Works Data ------------------------ */

function setSkillsData(data) {
  let skills = document.querySelector(".skills");
  data.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `<img src=${encodeURI(item.img)} alt=${item.title} />
                        <span> ${item.title}</span>`;
    div.classList.add("skill");
    skills.appendChild(div);
  });
}

setProjectsData(projectsList);
setWorksData(worksList);
setEducationsData(educationList);
setSkillsData(skillsList);
