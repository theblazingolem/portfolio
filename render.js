import { skillsData } from "./assets/skillsData.js";
import { profileData } from "./assets/profileData.js";
import { projectsData } from "./assets/projectsData.js";
import { expData } from "./assets/expData.js";

const skillsContainer = document.getElementById("skills");
const profileContainer = document.getElementById("profile");
const projectsContainer = document.getElementById("projects");
const expContainer = document.getElementById("exp");

document.getElementById("about").textContent = profileData.about;

function renderBadge(skill, iconOnly = false) {
    if (iconOnly) {
        return `<img class='icon-badge' src='./svgs/${skill.toLowerCase()}.svg'/>`;
    } else {
        let bgColor = skill.color
            ? `background-color: ${skill.color}4d;`
            : `background: ${skill.gradient};`;
        return `
            <div class='badge' style='${bgColor}'>
              <img src='./svgs/${skill.name.toLowerCase()}.svg'/>
              <span>${skill.name}</span>
            </div>`;
    }
}

let skillsArr = skillsData.map((skill) => renderBadge(skill, false));
skillsContainer.innerHTML = skillsArr.join("");

profileContainer.innerHTML = `
      <img class="avatar" src="assets/avatar.png" />
        <h4 class="name imp">${profileData.name}</h4>
        <p class="op-5">${profileData.designation}</p>
        ${
            profileData.location
                ? `<div class='flex'><div class="loc">
                    <img src='./svgs/pin.svg' />
                    <span style="padding-top: 2px">${profileData.location}</span>
                   </div>`
                : ""
        }
        <div class="grad">
          <img src='./svgs/gre.svg' />
          <span style="padding-top: 2px">${profileData.graduationDate}</span>
        </div></div>
        <div class="grad">
          <img src='./svgs/cal.svg' />
          <span style="padding-top: 2px">${
              new Date().getFullYear() - profileData.experience
          }+ years Experience</span>
        </div></div>
        <a class='git-btn' href="mailto:blzng.dev@gmail.com">Get in Touch</a>
        <div class='social-links'>
          <a href="${
              profileData.github
          }"><img src="svgs/github.svg" alt="" /></a>
          <a href="${profileData.x}"><img src="svgs/x.svg" alt="" /></a>
        </div>
        `;

projectsContainer.innerHTML = projectsData
    .map(
        (project) => `
      <div class="card-item">
        <div class='sp-btw'>
          <h4 class="imp">${project.name}</h4>
          <div class='tech'>${project.tech
              .map((sk) => renderBadge(sk, true))
              .join("")}</div>
        </div>
        <p>${project.desc}</p>
        <div class="card-footer">
          <p>${project.year}</p>
          <div>
            ${
                project?.repoLink
                    ? `<a href="${project.repoLink}"><img src="svgs/github.svg" alt="" /></a>`
                    : ""
            }
            ${
                project?.viewLink
                    ? `<a href="${project.viewLink}"><img src="svgs/popup.svg" alt="" /></a>`
                    : ""
            }
          </div>
        </div>
      </div>
  `
    )
    .join("");

expContainer.innerHTML = expData
    .map(
        (item) => `
      <div class="card-item">
        <div class='sp-btw'>
          <h4 class="imp">${item.as}</h4>
          <p class='tech'>at ${item.at}</p>
        </div>
        <p>${item.desc}</p>
        <div class="card-footer">
          <p>${item.from} - ${item.to}</p>
          <div>
            ${
                item?.repoLink
                    ? `<a href="${item.repoLink}"><img src="svgs/github.svg" alt="" /></a>`
                    : ""
            }
            ${
                item?.viewLink
                    ? `<a href="${item.viewLink}"><img src="svgs/popup.svg" alt="" /></a>`
                    : ""
            }
          </div>
        </div>
      </div>
  `
    )
    .join("");
