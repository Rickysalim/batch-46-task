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
        <div class="card">
            <div class="card-item">
                <img src="${element.image}" alt="Picture" />
                <p>${element.quote}</p>
                <div class="card-author">
                    <p>- ${element.author}</p>
                    <p>Star ${element.rating}</p>
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
         <div class="card">
             <div class="card-item">
                 <h3> Data Not Found</h3>
             </div>
         </div>    
     `);
  }

  return dataFiltered.forEach(
    (element) =>
      (document.getElementById("content").innerHTML += `
            <div class="card">
                <div class="card-item">
                    <img src="${element.image}" alt="Picture" />
                    <p>${element.quote}</p>
                    <div class="card-author">
                        <p>- ${element.author}</p>
                        <p>Star ${element.rating}</p>
                    </div>
                </div>
            </div>    
        `)
  );
}
