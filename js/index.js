//Create footer
function createFooter(fullName) {
  const footer = document.createElement("footer");
  document.body.append(footer);
  const today = new Date();
  const thisYear = today.getFullYear();
  const copyrightElement = document.createElement("p");
  copyrightElement.innerText = `\u{00A9}  ${fullName}  ${thisYear}`;
  footer.appendChild(copyrightElement);
}

//Create skills list
function createSkillsList(skillsArray) {
  const skillsSection = document.getElementById("skills");
  const skillsList = skillsSection.querySelector("ul");
  skillsList.classList.add("skills-container");
  for (let i = 0; i < skillsArray.length; i++) {
    const skillElement = document.createElement("li");
    skillElement.classList.add("skill-item");
    skillElement.innerText = skillsArray[i];
    skillsList.appendChild(skillElement);
  }
}

const myFullName = "Olena Shliegel";
createFooter(myFullName);


const skills = ["JavaScript", "HTML", "CSS", "Photoshop", "GitHub"];
createSkillsList(skills);
