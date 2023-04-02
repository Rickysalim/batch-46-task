// let checkboxValue = [
//   {
//     name: "node.js",
//   },
//   {
//     name: "react.js",
//   },
//   {
//     name: "next.js",
//   },
//   {
//     name: "typescript",
//   },
// ];

let projects = [];

const btnFile = document.getElementById("image-project");
const fileChosen = document.getElementById("file-chosen");
btnFile.addEventListener("change", function () {
  fileChosen.textContent = this.files[0].name;
});

// function mapCheckbox() {
//   checkboxValue.map((item) => {
//     document.getElementById("checkbox").innerHTML += `
//      <div>
//       <input
//         type="checkbox"
//         id="${item.name}"
//         value="${item.name}"
//         class="${item.name}"
//         style="padding-top: 0"
//         />
//       </div>
//      `;
//   });
// }

// mapCheckbox();

function clearData() {
  document.getElementById("contents").innerHTML = "";
}

function getData(projects) {
  clearData();
  for (let i = 0; i < projects.length; i++) {
    document.getElementById("contents").innerHTML += `
        <div class="grid-item">
            <div class="project-item">
                <img src="${projects[i].image}" alt="Avatar" />
                <div class="subtitle">
                    <h4>${projects[i].project_name}</h4>
                    <p>Durasi: ${getDuration(
                      projects[i].start_date,
                      projects[i].end_date
                    )}</p>
                    <p></p>
                    <p>${projects[i].description}</p>
                </div>
                <div class="tech-logo-section" id="tech-logo">
                ${projects[i].technologies.map((item) => {
                  return `${item?.image}`;
                }).join(" ")}
                </div>
                <div class="action">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
        `;
  }
}

function getDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const year = end.getFullYear() - start.getFullYear();
  if (year > 0) {
    return `${year} Tahun`;
  } else {
    const month = end.getMonth() + 1 - (start.getMonth() + 1);
    if (month > 0) {
      return `${month} Bulan`;
    } else {
      const day = end.getDate() - start.getDate();
      if (day > 0) {
        return `${day} Hari`;
      } else {
        return `Sehari`;
      }
    }
  }
}

function reset() {
  document.getElementById("project_name").value = "";
  document.getElementById("start_date").value = "";
  document.getElementById("end_date").value = "";
  document.getElementById("image-project").value = "";
  document.getElementById("description").value = "";
}

function getProject(event) {
  event.preventDefault();
  const project_name = document.getElementById("project_name").value;
  const start_date = document.getElementById("start_date").value;
  const end_date = document.getElementById("end_date").value;
  const technologies = [];

  if (document.getElementById("node.js").checked) {
    technologies.push({
      name: document.getElementById("node.js").value,
      image: '<img src="./asset/images/icons8-nodejs-48.png"/>',
    });
  }
  if (document.getElementById("next.js").checked) {
    technologies.push({
      name: document.getElementById("next.js").value,
      image: '<img src="./asset/images/react.png"/>',
    });
  }
  if (document.getElementById("react.js").checked) {
    technologies.push({
      name: document.getElementById("react.js").value,
      image: '<img src="./asset/images/next-js-icon-256x256-6j7ddke7.png"/>',
    });
  }

  if (document.getElementById("typescript").checked) {
    technologies.push({
      name: document.getElementById("typescript").value,
      image: '<img src="./asset/images/typescript.png"/>',
    });
  }
  const image = document.getElementById("image-project").files[0];
  const blob = image ? URL.createObjectURL(image) : null;
  const description = document.getElementById("description").value;

  // validation

  if (!project_name) {
    alert("Project Name Empty");
    return false;
  }
  if (!start_date) {
    alert("Start Date Empty");
    return false;
  }
  if (!end_date) {
    alert("End Date Empty ");
    return false;
  }
  if (start_date > end_date) {
    alert("Start Date can't be Greater Than End Date");
    return false;
  }
  if (!description) {
    alert("Description Empty");
    return false;
  }

  let project = {
    project_name,
    start_date,
    end_date,
    technologies,
    image: blob,
    description,
  };

  projects.push(project);
  getData(projects);
  reset();
}
