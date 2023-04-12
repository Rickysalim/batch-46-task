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
                <div class="col-sm-12 col-md-4">
                    <div class="card">
                        <img src="${
                          projects[i].image
                        }" class="card-img-top" alt="Cover">
                        <div class="card-body">
                            <h5 class="card-title">${
                              projects[i].project_name
                            }</h5>
                            <p class="card-text">Durasi: ${getDuration(
                              projects[i].start_date,
                              projects[i].end_date
                            )}</p>
                            <p class="card-text">${projects[i].description}</p>
                            <div class="d-flex justify-content-between mt-5" id="tech-logo">
                              ${projects[i].technologies
                                .map((item) => {
                                  return `${item?.image}`;
                                })
                                .join(" ")}
                            </div>
                            <div class="d-flex justify-content-between mt-5">
                                <button class="btn btn-dark">Edit</button>
                                <button class="btn btn-dark">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    // document.getElementById("tech-logo").innerHTML = "";
    // for (let j = 0; j < projects[i].technologies.length; j++) {
    //   console.info(projects[i]);
    // document.getElementById("tech-logo").innerHTML += projects[i].technologies[j].image;
    // }
  }
}

function getDuration(startDate, endDate) {
  // const start = new Date(startDate);
  // const end = new Date(endDate);
  // const year = end.getFullYear() - start.getFullYear();
  // if (year > 0) {
  //   return `${year} Tahun`;
  // } else {
  //   const month = (end.getMonth() + 1) - (start.getMonth() + 1);
  //   if (month > 0) {
  //     return `${month} Bulan`;
  //   } else {
  //     const day = end.getDate() - start.getDate();
  //     if (day > 0) {
  //       return `${day} Hari`;
  //     } else {
  //       return `Sehari`;
  //     }
  //   }
  // }
  const distance = new Date(endDate) - new Date(startDate);
  const yearDistance = Math.floor(distance / (12 * 30 * 24 * 60 * 60 * 1000));
  console.info(yearDistance);
  if (yearDistance > 0) {
    return `${yearDistance} Year`;
  } else {
    const monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * 1000));
    if (monthDistance > 0) {
      return `${monthDistance} Month`;
    } else {
      const dayDistance = Math.floor(distance / (24 * 60 * 60 * 1000));
      if (dayDistance > 0) {
        return `${dayDistance} Day`;
      } else {
        return `1 day`;
      }
    }
  }

  // 1 minggu = 7 hari
  // 1 hari = 24 jam
  // 1 bulan = 30 hari
  // 1 tahun = 12 bulan
  // 1 jam = 60 menit
  // 1 menit = 60 detik
  // 1 detik = 1000
}

function reset() {
  const fileChosen = document.getElementById("file-chosen");
  document.getElementById("project_name").value = "";
  document.getElementById("start_date").value = "";
  document.getElementById("end_date").value = "";
  document.getElementById("image-project").value = "";
  fileChosen.textContent = "No File Choosen";
  document.getElementById("description").value = "";
  document.getElementById("node.js").checked = false;
  document.getElementById("next.js").checked = false;
  document.getElementById("react.js").checked = false;
  document.getElementById("typescript").checked = false;
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
      image:
        '<img src="./asset/images/icons8-nodejs-48.png" class="icon-tech-logo"/>',
    });
  }
  if (document.getElementById("next.js").checked) {
    technologies.push({
      name: document.getElementById("next.js").value,
      image:
        '<img src="./asset/images/next-js-icon-256x256-6j7ddke7.png" class="icon-tech-logo"/>',
    });
  }
  if (document.getElementById("react.js").checked) {
    technologies.push({
      name: document.getElementById("react.js").value,
      image: '<img src="./asset/images/react.png" class="icon-tech-logo"/>',
    });
  }

  if (document.getElementById("typescript").checked) {
    technologies.push({
      name: document.getElementById("typescript").value,
      image:
        '<img src="./asset/images/typescript.png" class="icon-tech-logo"/>',
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
