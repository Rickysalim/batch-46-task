// data
let personData = [
    {
      name: "Jecky",
      comment: "Bagus",
      image: "./asset/images/person-test-2.jpg",
      rating: 5,
    },
    {
      name: "Bob",
      comment: "Bagus",
      image: "./asset/images/person-test-1.jpg",
      rating: 5,
    },
    {
      name: "Stuart",
      comment: "Bagus",
      image: "./asset/images/person-test-2.jpg",
      rating: 5,
    },
    {
      name: "Jacob",
      comment: "Bagus",
      image: "./asset/images/person-test-3.jpg",
      rating: 4,
    },
    {
      name: "Edward",
      comment: "Bagus",
      image: "./asset/images/person-test-3.jpg",
      rating: 3,
    },
    {
      name: "Jack",
      comment: "Bagus",
      image: "./asset/images/person-test-2.jpg",
      rating: 3,
    },
    {
      name: "Meyhard",
      comment: "Bagus",
      image: "./asset/images/person-test-3.jpg",
      rating: 2,
    },
  ];
  
  function clearData() {
    document.getElementById("content").innerHTML = "";
  }
  
  // function show data
  function loopTestimonial() {
    let testimonial = [];
    for (const item of personData) {
      testimonial.push(item);
    }
    return testimonial;
  }
  
  function showTestimonial(callback) {
    // console.info(callback().forEach((item) => console.info(item)))
    callback().forEach(
      (element) =>
        (document.getElementById("content").innerHTML += `
          <div class="card">
              <div class="card-item">
                  <img src="${element.image}" alt="Picture" />
                  <p>${element.comment}</p>
                  <div class="card-author">
                      <p>- ${element.name}</p>
                      <p>Star ${element.rating}</p>
                  </div>
              </div>
          </div>    
      `)
    );
  }
  
  showTestimonial(loopTestimonial);
  
  function allTestimonial() {
    clearData();
    return personData.forEach(
      (element) =>
        (document.getElementById("content").innerHTML += `
          <div class="card">
              <div class="card-item">
                  <img src="${element.image}" alt="Picture" />
                  <p>${element.comment}</p>
                  <div class="card-author">
                      <p>- ${element.name}</p>
                      <p>Star ${element.rating}</p>
                  </div>
              </div>
          </div>    
      `)
    );
  }
  
  // function for filtering testimonials
  
  function filterTestimonials(rating) {
    clearData();
  
    if (!rating) {
      loopTestimonial().forEach(
        (element) =>
          (document.getElementById("content").innerHTML += `
                  <div class="card">
                      <div class="card-item">
                          <img src="${element.image}" alt="Picture" />
                          <p>${element.comment}</p>
                          <div class="card-author">
                              <p>- ${element.name}</p>
                              <p>Star ${element.rating}</p>
                          </div>
                      </div>
                  </div>    
              `)
      );
    }
  
    const dataFiltered = personData.filter((data) => {
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
                      <p>${element.comment}</p>
                      <div class="card-author">
                          <p>- ${element.name}</p>
                          <p>Star ${element.rating}</p>
                      </div>
                  </div>
              </div>    
          `)
    );
  }
  