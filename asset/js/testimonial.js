function clearData() {
    document.getElementById("content").innerHTML = "";
  }

const testimonial = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.npoint.io/4d27242ce954114b709d", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Error while fetching data.....");
    }
  };

  xhr.onerror = function () {
    reject("Network Error");
  };

  xhr.send();
});

// testimonial
// .then((res) => console.info(res));
// .catch((err) => console.error(err));

async function AllTestimonial() {
  clearData()
  const response = await testimonial;
  response.forEach(
    (element) =>
      (document.getElementById("content").innerHTML += `
      <div class="col-sm-12 col-md-4">   
        <div class="card mb-3">
          <img src="${element.image}" class="card-img-top" alt="author" style="max-height: 20rem; height: 20rem;">
          <div class="card-body">
            <h5 class="card-title text-break">${element.quote}</h5>
            <p class="card-text">${element.rating} <span class="iconify icon-props" data-icon="material-symbols:star"></span></p>
          </div>
        </div>
      </div>  
    `)
  );
}

AllTestimonial();

async function filterTestimonials(rating) {
  clearData();

  const response = await testimonial;

  const dataFiltered = response.filter((data) => {
    return data.rating === rating;
  });

  if (dataFiltered.length === 0) {
    return (document.getElementById("content").innerHTML += `
         <div class="col-sm-12">
              <h3 class="text-center">Data Not Found</h3>
         </div>    
     `);
  }

  return dataFiltered.forEach(
    (element) =>
      (document.getElementById("content").innerHTML += `
      <div class="col-sm-12">   
        <div class="card mb-5">
            <img src="${element.image}" class="card-img-top" alt="author">
            <div class="card-body">
              <h5 class="card-title text-break">${element.quote}</h5>
              <p class="card-text">${element.rating} <span class="iconify icon-props" data-icon="material-symbols:star"></span></p>
          </div>
        </div>
      </div>  
        `)
  );
}
