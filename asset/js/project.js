let projects = [];

function clearData() {
  document.getElementById("contents").innerHTML = "";
}

function getData(projects) {
  clearData();
  for (const project of projects) {
    document.getElementById("contents").innerHTML += `
        <div class="grid-item">
            <div class="project-item">
                <img src="${project.image}" alt="Avatar" />
                <div class="subtitle">
                    <h4>${project.project_name}</h4>
                    <p>Durasi: ${project.start_date} sampai ${project.end_date}</p>
                    <p>${project.technologies}</p>
                    <p>${project.description}</p>
                </div>
            </div>
        </div>
        `;
  }
  
}

function reset() {
    document.getElementById("project_name").value = "";
    document.getElementById("start_date").value  = "";
    document.getElementById("end_date").value  = "";
    document.getElementById("input-blog-image").value  = "";
    document.getElementById("description").value  = ""
}

function getProject(event) {
event.preventDefault()
  const project_name = document.getElementById("project_name").value;
  const start_date = document.getElementById("start_date").value;
  const end_date = document.getElementById("end_date").value;
  const technologies = [];
  if (document.getElementById("node.js").checked) {
    technologies.push(document.getElementById("node.js").value);
  }
  if (document.getElementById("next.js").checked) {
    technologies.push(document.getElementById("next.js").value);
  }
  if (document.getElementById("react.js").checked) {
    technologies.push(document.getElementById("react.js").value);
  }
  if (document.getElementById("typescript").checked) {
    technologies.push(document.getElementById("typescript").value);
  }
  const image = document.getElementById("input-blog-image").files[0];
  const blob = image ? URL.createObjectURL(image) : null;
  const description = document.getElementById("description").value

  let project = {
    project_name,
    start_date,
    end_date,
    technologies,
    image: blob,
    description
  };

  projects.push(project);
  getData(projects);
  reset()
}
