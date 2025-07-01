import { skillsData } from "./assets/skillsData.js";
import { profileData } from "./assets/profileData.js";
import { projectsData } from "./assets/projectsData.js";

const skillsContainer = document.getElementById("skills");
const profileContainer = document.getElementById("profile");
const projectsContainer = document.getElementById("projects");

let skillsArr = skillsData.map((skill) => {
  let bgColor = skill.color
    ? `background-color: ${skill.color}4d;`
    : `background: ${skill.gradient};`;
  return `
        <div class='badge' style='width: ${skill.width}px; ${bgColor}'>
            <img src='./svgs/${skill.name.toLowerCase()}.svg'/>
            <span>${skill.name}</span>
        </div>`;
});
skillsContainer.innerHTML = skillsArr.join("");

profileContainer.innerHTML = `
      <img class="avatar" src="assets/avatar.png" />
        <h4 class="name imp">${profileData.name}</h4>
        <p class="op-5">${profileData.designation}</p>
        <div class='flex'><div class="loc">
          <img src='./svgs/pin.svg' />
          <span style="padding-top: 2px">${profileData.location}</span>
        </div>
        <div class="grad">
          <img src='./svgs/gre.svg' />
          <span style="padding-top: 2px">${profileData.graduationDate}</span>
        </div></div>
        `;

const projectsArr = projectsData.map(
  (project) => `
      <div class="project-item">
        <h4 class="imp">${project.name}</h4>
        <p>${project.desc}</p>
        <div class="project-footer">
          <p>${project.year}</p>
          <div>
            ${
              project.repoLink
                ? `<a href="${project.repoLink}"><img src="svgs/github.svg" alt="" /></a>`
                : ""
            }
            ${
              project.viewLink
                ? `<a href="${project.viewLink}"><img src="svgs/popup.svg" alt="" /></a>`
                : ""
            }
          </div>
        </div>
      </div>
  `
);
projectsContainer.innerHTML = projectsArr;
console.log(projectsData);
